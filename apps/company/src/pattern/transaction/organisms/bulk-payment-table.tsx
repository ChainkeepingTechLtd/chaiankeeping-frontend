import React, { useMemo, useState } from "react";
import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	flexRender,
	Table,
	ColumnDef,
} from "@tanstack/react-table";

import SortIcon from "../atoms/sort-icon";

import PrevIcon from "../atoms/prev-icon";
import NextIcon from "../atoms/next-icon";
import { Button, Checkbox } from "@chainkeeping/ui";
import SearchInput from "../molecules/search-input";
import FileNameIcon from "../atoms/file-name-icon";
import Downloadicon from "../atoms/download-icon";
import AddIcon from "../atoms/add-icon";
import { useRouter } from "next/navigation";

interface Transaction {
	id: string | number;
	dateTime: {
		date: string;
		time: string;
	};
	label: {
		title: string;
		icon?: React.ReactNode;
	};
	account: string;
	accountIcon?: React.ReactNode;
	outFrom: {
		amount: string;
		details: string;
		icon?: React.ReactNode;
	};
	inTo: {
		amount: string;
		details: string;
		icon?: React.ReactNode;
	};
	profitLoss: string;
}

interface UnresolvedTransactionsTableProps {
	data: Transaction[];
}

const BulkPaymentTable: React.FC<UnresolvedTransactionsTableProps> = ({
	data,
}) => {
	const [selectedRows, setSelectedRows] = useState<
		Record<string | number, boolean>
	>({});

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [search, setSearch] = useState("");

	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};
	const router = useRouter();

	const handleAddAccount = () => {
		router.push("bulk-payments/transaction");
	};

	const handlePayment = () => {
		router.push("bulk-payments/payment");
	};

	// Handle individual checkbox change
	const handleCheckboxChange = (
		rowId: string | number,
		checked: string | boolean
	) => {
		setSelectedRows((prev: { [x: string]: any }) => ({
			...prev,
			[rowId]: !prev[rowId],
		}));
	};

	// Handle select/deselect all rows
	const handleSelectAll = (
		isChecked: boolean,
		rows: { id: string | number }[]
	) => {
		const newSelectedRows: Record<string | number, boolean> = {};
		rows.forEach((row) => {
			newSelectedRows[row.id] = isChecked;
		});
		setSelectedRows(isChecked ? newSelectedRows : {});
	};

	const filteredData = useMemo(() => {
		let filtered = data;

		// Filter by Year

		// Search Filter
		if (search) {
			filtered = filtered.filter((item) => {
				return (
					item.label.title.toLowerCase().includes(search.toLowerCase()) ||
					item.account.toLowerCase().includes(search.toLowerCase()) ||
					item.dateTime.date.includes(search)
				);
			});
		}

		console.log("Filtered Data:", filtered);
		return filtered;
	}, [data, search]);

	const columns = React.useMemo(
		() => [
			{
				id: "select",
				header: ({ table }: { table: Table<Transaction> }) => (
					<Checkbox
						checked={table
							.getRowModel()
							.rows.every(
								(row: { id: string | number }) => selectedRows[row.id]
							)}
						onCheckedChange={(checked) => {
							handleSelectAll(checked, table.getRowModel().rows);
						}}
					/>
				),
				cell: ({ row }) => (
					<Checkbox
						checked={!!selectedRows[row.id]}
						onCheckedChange={(checked) => handleCheckboxChange(row.id, checked)}
					/>
				),
			},
			{
				header: "Filename",
				accessorKey: "filename",
				cell: (info: any) => (
					<div className='flex w-[300px] items-center gap-2'>
						<FileNameIcon />
						<span className='text-[#222222] text-sm'>{info.getValue()}</span>
					</div>
				),
			},
			{
				header: "Entries",
				accessorKey: "entries",
				cell: (info: any) => (
					<div className='flex w-full'>
						<div className='text-sm justify-end flex items-end gap-1 w-[50%] px-2 py-1 text-end'>
							{info.getValue()}
						</div>
					</div>
				),
				headerClassName: "text-end item-end justify-end", // Right-align the header
			},
			{
				header: "Status",
				accessorKey: "status",
				cell: (info: any) => {
					const value = info.getValue();
					const statusStyles =
						value === "Pending"
							? "bg-[#F9CC59] text-black"
							: value === "Processed"
								? "bg-[#27AE60] text-white"
								: "bg-gray-200 "; // Default styles for other statuses

					return (
						<div className='flex'>
							<div
								className={`flex justify-center rounded-full items-center gap-2 px-2 py-1  text-xs ${statusStyles}`}
							>
								{value}
							</div>
						</div>
					);
				},
			},

			{
				header: "Date Uploaded",
				accessorKey: "date_update",
				cell: (info: any) => (
					<div className='flex gap-1 w-full items-center'>
						<span className='text-[#222222] text-sm'>{info.getValue()}</span>
					</div>
				),
				headerClassName: "text-end item-end justify-end", // Right-align the header
			},

			{
				id: "actions",
				cell: () => (
					<div className='flex w-full items-center justify-start'>
						<button onClick={handleAddAccount} className='p-2 text-grey-300'>
							View details
						</button>
					</div>
				),
			},
		],
		[selectedRows]
	);

	const table = useReactTable({
		data: filteredData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<div>
			<div className='flex justify-between mb-10'>
				<div className='flex gap-3 '>
					<SearchInput
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Search...'
					/>
				</div>
				<div className='flex gap-3'>
					<Button
						onClick={toggleFilter}
						variant='secondaryOutline'
						size='md'
						className='text-base gap-2'
					>
						<Downloadicon />
						Template
					</Button>

					<Button
						variant='secondary'
						size='md'
						className='text-base gap-2'
						onClick={handlePayment}
					>
						<AddIcon />
						New payment
					</Button>
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full table-fixed border border-[red] shadow-md rounded-lg overflow-hidden'>
					<thead className='bg-[#F5F8FA]'>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										className={`text-left whitespace-nowrap px-6 py-3 border-b border-gray-300 text-sm font-semibold ${
											header.column.columnDef.headerClassName || ""
										}`}
									>
										<div className='flex w-full items-center gap-1'>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
											{header.column.id !== "actions" &&
												header.column.id !== "select" && <SortIcon />}
										</div>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className='bg-[#ffffff] whitespace-nowrap hover:bg-gray-50 transition duration-150'
							>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className='px-6 py-4 border-b border-gray-300 text-sm text-grey-600'
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>

				{/* Pagination */}
				<div className='flex justify-between items-center py-4'>
					<span>
						Showing page {table.getState().pagination.pageIndex + 1} of{" "}
						{table.getPageCount()}
					</span>
					<div className='flex items-center gap-1'>
						{/* Previous Page Button */}
						<button
							className='px-3 py-1 text-grey-400 flex gap-1 items-center rounded disabled:opacity-50'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<PrevIcon />
							Prev
						</button>

						{/* Page Numbers */}
						{table.getPageOptions().map((pageIndex) => (
							<button
								key={pageIndex}
								className={`h-6 text-sm w-6 rounded-full ${
									pageIndex === table.getState().pagination.pageIndex
										? "bg-[#D82E2E] text-white"
										: "bg-transparent text-gray-800"
								}`}
								onClick={() => table.setPageIndex(pageIndex)}
							>
								{pageIndex + 1}
							</button>
						))}

						{/* Next Page Button */}
						<button
							className='px-3 py-1 text-grey-400 flex gap-1 items-center rounded disabled:opacity-50'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Next
							<NextIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BulkPaymentTable;
