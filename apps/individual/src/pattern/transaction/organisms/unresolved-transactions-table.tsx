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
import MoreIcon from "../atoms/more-icon";
import SearchInput from "../molecules/search-input";
import FilterIcon from "@/pattern/practitioner/atoms/filter-icon";
import ArrowIcon from "../atoms/arrow-icon";
import InfoIcon from "../atoms/info-icon";

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

const UnresolvedTransactionsTable: React.FC<
	UnresolvedTransactionsTableProps
> = ({ data }) => {
	const [selectedRows, setSelectedRows] = useState<
		Record<string | number, boolean>
	>({});

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [search, setSearch] = useState("");

	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
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

	// Define columns
	const columns = React.useMemo<ColumnDef<Transaction>[]>(
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
							handleSelectAll(checked as boolean, table.getRowModel().rows);
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
				header: "Date",
				accessorKey: "dateTime",
				cell: (info: any) => (
					<div className='flex flex-col'>
						<span className='text-[#222222] text-sm'>
							{info.getValue().date}
						</span>
						<span className='text-grey-400 text-xs'>
							{info.getValue().time}
						</span>
					</div>
				),
			},
			{
				header: "Label",
				accessorKey: "label",
				cell: (info: any) => (
					<div className='flex'>
						<div className='bg-[#F5F8FA] text-grey-600 text-sm flex items-center gap-1 w-auto px-2 py-1 rounded-md text-center'>
							{info.getValue().icon}
							<span>{info.getValue().title}</span>
						</div>
					</div>
				),
			},
			{
				header: "Account",
				accessorKey: "account",
				cell: (info: any) => (
					<div className='flex items-center gap-2'>
						{info.row.original.accountIcon}
						<span className='text-sm text-[#222222]'>{info.getValue()}</span>
					</div>
				),
			},
			{
				header: "Out / Sold / From",
				accessorKey: "outFrom",
				cell: (info: any) => (
					<div className='flex gap-1 w-full items-center'>
						<div className='flex flex-col  w-[150px] justify-end items-end'>
							<span className='text-[#222222] text-sm'>
								{info.getValue().amount}
							</span>
							<span className='text-grey-400 text-xs'>
								{info.getValue().details}
							</span>
						</div>
						{info.getValue().icon}
					</div>
				),
				headerClassName: "text-end item-end justify-end", // Right-align the header
			},
			{
				id: "actions",
				cell: () => (
					<div className='flex w-full'>
						<button className='flex w-full '>
							<ArrowIcon />
						</button>
					</div>
				),
			},
			{
				header: "In / Bought / To",
				accessorKey: "inTo",
				cell: (info: any) => (
					<div className='flex gap-1'>
						{info.getValue().icon}
						<div className='flex flex-col items-center justify-center'>
							<span className='text-[#222222] text-sm'>
								{info.getValue().amount}
							</span>
							<span className='text-grey-400 text-xs'>
								{info.getValue().details}
							</span>
						</div>
					</div>
				),
			},
			// {
			// 	header: "Fees",
			// 	accessorKey: "fees",
			// },
			{
				header: "Profit / Loss",
				accessorKey: "profitLoss",
				cell: (info: any) => (
					<div
						className={`text-sm ${
							info.getValue().startsWith("-")
								? "text-[#F14848]"
								: "text-[#27AE60]"
						}`}
					>
						{info.getValue()}
					</div>
				),
			},
			{
				id: "actions",
				cell: () => (
					<div className='flex w-full items-center justify-start'>
						<button className='p-2 hover:bg-gray-100 rounded-full'>
							<MoreIcon />
						</button>
					</div>
				),
			},
		],
		[selectedRows]
	);

	// Use React Table instance
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
						variant='default'
						size='sm'
						className='text-base h-[36px] px-2 gap-2 bg-[#E5EBEF] text-grey-500'
					>
						<FilterIcon />
						Filter
					</Button>

					<Button
						variant='secondary'
						size='sm'
						className='text-base px-2 gap-2'
					>
						Action
					</Button>
				</div>
			</div>
			<div className='bg-[#E9F2FE] p-3 flex gap-2 rounded-md  mb-4'>
				<InfoIcon />
				<p className='text-sm '>
					The following transactions may have been classified wrongly or not
					classified, resolve issues by changing or adding transaction type or
					label
				</p>
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
											header.column.columnDef || ""
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

export default UnresolvedTransactionsTable;
