import React, { useMemo, useState } from "react";
import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	flexRender,
	Table,
	ColumnDef,
} from "@tanstack/react-table";

import {
	Button,
	Checkbox,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@chainkeeping/ui";
import ArrowIcon from "@/pattern/transaction/atoms/arrow-icon";
import MoreIcon from "@/pattern/transaction/atoms/more-icon";
import SearchInput from "@/pattern/transaction/molecules/search-input";
import PrevIcon from "@/pattern/transaction/atoms/prev-icon";
import NextIcon from "@/pattern/transaction/atoms/next-icon";
import SortIcon from "@/pattern/transaction/atoms/sort-icon";
import HistoryIcon from "../atoms/history-icon";
import NoAccountIcon from "@/pattern/individual/atoms/no-account-icon";
import { useRouter } from "next/navigation";
import AddTransactionModalComponent from "./add-transaction-modal";

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

interface TransactionsTableProps {
	data: Transaction[];
}

const ExchangeTable: React.FC<TransactionsTableProps> = ({ data }) => {
	const [selectedRows, setSelectedRows] = useState<
		Record<string | number, boolean>
	>({});
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [selectedYear, setSelectedYear] = useState("all-year");
	const [selectedType, setSelectedType] = useState("all-transactions");
	const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const router = useRouter();

	const OpenTransactionModal = () => {
		setIsTransactionModalOpen(true);
	};

	const CloseTransactionModal = () => {
		setIsTransactionModalOpen(false);
	};

	const handleImportHistory = () => {
		router.push("/import-history");
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
		if (selectedYear !== "all-year") {
			filtered = filtered.filter((item) => {
				// Extract the year from the date string (assuming item.dateTime.date exists)
				const itemYear = new Date(item.dateTime.date).getFullYear();
				return String(itemYear) === selectedYear;
			});
		}

		// Filter by Type
		if (selectedType !== "all-transactions") {
			filtered = filtered.filter((item) => {
				return item.label.title.toLowerCase() === selectedType.toLowerCase();
			});
		}

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
	}, [data, selectedYear, selectedType, search]);

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
			{
				header: "Fees",
				accessorKey: "fees",
			},
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
			<div className='flex items-center justify-between my-10'>
				<div className='flex gap-3 items-center'>
					{table.getRowModel().rows.length > 0 ? (
						<>
							<div>
								<SearchInput
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									placeholder='Search...'
								/>
							</div>
							<div>
								<Select
									value={selectedYear}
									onValueChange={(value) => setSelectedYear(value)}
								>
									<SelectTrigger>
										<SelectValue placeholder='All years' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='all-year'>All years</SelectItem>
										<SelectItem value='2025'>2025</SelectItem>
										<SelectItem value='2024'>2024</SelectItem>
										<SelectItem value='2023'>2023</SelectItem>
										<SelectItem value='2022'>2022</SelectItem>
										<SelectItem value='2021'>2021</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Select
									value={selectedType}
									onValueChange={(value) => setSelectedType(value)}
								>
									<SelectTrigger>
										<SelectValue placeholder='All transactions' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='all-transactions'>
											All transactions
										</SelectItem>
										<SelectItem value='trade'>Trade</SelectItem>
										<SelectItem value='deposit'>Deposit</SelectItem>
										<SelectItem value='withdrawal'>Withdrawal</SelectItem>
										<SelectItem value='airdrop'>Airdrop</SelectItem>
										<SelectItem value='fiat buy'>Fiat Buy</SelectItem>
										<SelectItem value='fiat sell'>Fiat Sell</SelectItem>
										<SelectItem value='investment loss'>
											Investment Loss
										</SelectItem>
										<SelectItem value='swap'>Swap</SelectItem>
										<SelectItem value='donation'>Donation</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</>
					) : (
						""
					)}
				</div>
				<div className='flex gap-3'>
					{table.getRowModel().rows.length > 0 ? (
						<Button
							onClick={handleImportHistory}
							variant='default'
							size='sm'
							className='text-base gap-2 bg-[#E5EBEF] text-grey-500'
						>
							<HistoryIcon />
							Import History
						</Button>
					) : (
						""
					)}
					<Button
						onClick={OpenTransactionModal}
						variant='secondaryOutline'
						size='sm'
						className='text-base gap-2'
					>
						Add transaction
					</Button>
				</div>
			</div>
			<div className='overflow-x-auto scrollbar-hide'>
				<table className='min-w-full scrollbar-hide  border-collapse table-fixed border shadow-md rounded-lg overflow-hidden'>
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
						{table.getRowModel().rows.length > 0 ? (
							table.getRowModel().rows.map((row) => (
								<tr
									key={row.id}
									className='bg-[#ffffff] whitespace-nowrap hover:bg-gray-50 transition duration-150'
								>
									{row.getVisibleCells().map((cell) => (
										<td
											key={cell.id}
											className='px-6 py-4 border-b border-gray-300 text-sm text-grey-600'
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									))}
								</tr>
							))
						) : (
							<tr className='bg-white h-[465px] items-center'>
								<td
									colSpan={columns.length} // Make sure the message spans all columns
									className='px-6 py-4 text-center  text-sm text-grey-600'
								>
									<div className='flex w-full items-center flex-col gap-3 justify-center'>
										<NoAccountIcon />
										<p className='font-bold'>
											Your transactions will show up here
										</p>
										<p className='w-[420px] text-center text-grey-400 text-sm'>
											Connect exchange or add wallet, Import transaction history
											file or manually add transactions.
										</p>
									</div>
								</td>
							</tr>
						)}
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
			<AddTransactionModalComponent
				isOpen={isTransactionModalOpen}
				onClose={CloseTransactionModal}
			/>
		</div>
	);
};

export default ExchangeTable;
