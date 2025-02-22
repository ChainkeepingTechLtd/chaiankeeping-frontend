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
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import SuccesIcon from "@/pattern/taxes/atoms/success-icon";
import CopyIcon from "@/pattern/taxes/atoms/copy-icon";

interface AccountInfo {
	id: string | number;
	year: string;
	transactions: string;
	service_type: string;

	status: string;
}

interface AccountInfoProps {
	data: AccountInfo[];
}

const AccountTable: React.FC<AccountInfoProps> = ({ data }) => {
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
	const [selectedYear, setSelectedYear] = useState("all-year");
	const [selectedType, setSelectedType] = useState("all-transactions");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
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
					item.year.toLowerCase().includes(search.toLowerCase()) ||
					item.transactions.toLowerCase().includes(search.toLowerCase()) ||
					item.service_type.includes(search)
				);
			});
		}

		console.log("Filtered Data:", filtered);
		return filtered;
	}, [data, search]);

	// Define columns
	const columns = React.useMemo<ColumnDef<AccountInfo>[]>(
		() => [
			{
				id: "select",
				header: ({ table }: { table: Table<AccountInfo> }) => (
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
				header: "Year",
				accessorKey: "year",
				cell: (info: any) => (
					<div className='flex'>
						<div className='text-grey-600 text-sm flex items-center gap-1 w-auto  text-center'>
							<span>{info.getValue()}</span>
						</div>
					</div>
				),
			},

			{
				header: "Transactions",
				accessorKey: "transactions",
				cell: (info: any) => (
					<div className='flex'>
						<div className='text-grey-600 text-sm flex items-center gap-1 w-auto  text-center'>
							<span>{info.getValue()}</span>
						</div>
					</div>
				),
			},

			{
				header: "Plan",
				accessorKey: "service_type",
				cell: (info: any) => (
					<div className='flex'>
						<div className='text-grey-600 text-sm flex items-center gap-1 w-auto  text-center'>
							<span>{info.getValue()}</span>
						</div>
					</div>
				),
			},

			{
				header: "Status",
				accessorKey: "status",
				cell: (info: any) => {
					const status = info.getValue();
					let bgColor = "";

					switch (status) {
						case "Paid":
							bgColor = "bg-[#27AE60]"; // Green for Paid
							break;
						case "Unpaid":
							bgColor = "bg-secondary"; // Red for Unpaid
							break;
						default:
							bgColor = "bg-grey-500"; // Gray for other statuses
					}

					return (
						<div className='flex gap-1'>
							{/* Dynamic background color based on status */}
							<div
								className={`rounded-full text-xs py-1 px-2 text-white ${bgColor}`}
							>
								<span>{status}</span>
							</div>
						</div>
					);
				},
			},
			{
				id: "actions",
				cell: ({ row }) => {
					const status = row.getValue("status");

					return (
						<div className='flex w-full items-center justify-start'>
							<Button
								onClick={openModal}
								variant={
									status === "Paid" ? "primaryOutline" : "secondaryOutline"
								}
								size='sm'
								className='text-sm'
								disabled={status === "Paid"}
							>
								Pay
							</Button>
						</div>
					);
				},
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

			<Modal isOpen={isModalOpen} onClose={closeModal} title='Tax Processed'>
				<div className='p-4 flex flex-col gap-7 items-center'>
					<SuccesIcon />

					<p className='text-grey-400 text-sm text-center'>
						Tax <span className='text-[#202B3C]'>#01234567</span> has been been
						processed successfully, copy the RRR number below and proceed to
						pay.
					</p>
					<div className='flex w-full rounded-lg border border-dashed py-4 px-3 justify-between items-center'>
						<p className='text-sm text-[#4F627D]'>0123-5678-9012</p>
						<CopyIcon />
					</div>
					<Button onClick={closeModal} className='w-full text-base'>
						Ok, got it
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default AccountTable;
