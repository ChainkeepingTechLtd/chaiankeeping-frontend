import { useMemo, useState, ReactNode, FC } from "react";
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
import { useRouter } from "next/navigation";
import TetherIcon from "@/pattern/individual/atoms/tether-icon";
import EditIcon from "../atoms/edit-icon";
import DeleteIcon from "../atoms/delete-icon";
import PaymentSuccessModal from "../molecules/payment-success-modal";
import ApprovePaymentModal from "../molecules/approve-payment-modal";
import DeletePaymentModal from "../molecules/delete-payment-modal";
import EditPaymentModal from "../molecules/edit-payment-modal";
import Image from "next/image";

interface Transaction {
	id: string | number;
	dateTime: {
		date: string;
		time: string;
	};
	label: {
		title: string;
		icon?: ReactNode;
	};
	account: string;
	accountIcon?: ReactNode;
	outFrom: {
		amount: string;
		details: string;
		icon?: ReactNode;
	};
	inTo: {
		amount: string;
		details: string;
		icon?: ReactNode;
	};
	profitLoss: string;
}

interface UnresolvedTransactionsTableProps {
	data: Transaction[];
}

const PreviewPayment: FC<UnresolvedTransactionsTableProps> = ({
	data,
}) => {
	const [selectedRows, setSelectedRows] = useState<
		Record<string | number, boolean>
	>({});

	const [search, setSearch] = useState("");

	const { push } = useRouter();

	const handleAddAccount = () => {
		push("bulk-payments/transaction");
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

	const [loading, setLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditodalOpen] = useState(false);
	const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);

	const openApproveModal = () => setIsApproveModalOpen(true);
	const openDeleteModal = () => setIsDeleteModalOpen(true);
	const openEditModal = () => setIsEditodalOpen(true);
	const closeEditModal = () => setIsEditodalOpen(false);
	const closeDeleteModal = () => setIsDeleteModalOpen(false);
	const closeApproveModal = () => setIsApproveModalOpen(false);
	const closeModal = () => setIsModalOpen(false);

	const handleApproveClick = async () => {
		setLoading(true);
		setIsApproveModalOpen(false);

		setTimeout(() => {
			setLoading(false);
			setIsModalOpen(true);
		}, 2000);
	};

	const columns = useMemo<ColumnDef<Transaction>[]>(
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
				header: "Transaction ID",
				accessorKey: "transaction_id",
				cell: (info: any) => (
					<div className='flex w-[300px] items-center gap-2'>
						<span className='text-sm'>{info.getValue()}</span>
					</div>
				),
			},
			{
				header: "Amount",
				accessorKey: "amount",
				cell: (info: any) => (
					<div className='flex w-full'>
						<div className='text-sm justify-end flex items-end gap-1 w-[50%] text-end'>
							{info.getValue()}
						</div>
					</div>
				),
				headerClassName: "text-end item-end justify-end", // Right-align the header
			},
			{
				header: "Currency",
				accessorKey: "currency",
				cell: (info: any) => {
					const value = info.getValue();

					return (
						<div className='flex'>
							<div className='flex gap-1 text-xs items-center'>
								<TetherIcon />
								{value}
							</div>
						</div>
					);
				},
			},

			{
				header: "Recipient",
				accessorKey: "recipient",
				cell: (info: any) => (
					<div className='flex gap-1 w-full items-center'>
						<span className='text-[#222222] text-sm'>{info.getValue()}</span>
					</div>
				),
				headerClassName: "text-end item-end justify-end", // Right-align the header
			},
			{
				header: "Recipient Email",
				accessorKey: "recipient_email",
				cell: (info: any) => (
					<div className='flex gap-1 w-full items-center'>
						<span className='text-[#222222] text-sm'>{info.getValue()}</span>
					</div>
				),
				headerClassName: "text-end item-end justify-end", // Right-align the header
			},
			{
				header: "Payment Description",
				accessorKey: "payment_description",
				cell: (info: any) => (
					<div className='flex gap-1 w-full items-center'>
						<span className='text-[#222222] text-sm'>{info.getValue()}</span>
					</div>
				),
				headerClassName: "text-end item-end justify-end", // Right-align the header
			},

			{
				id: "actions",
				accessorKey: "action",
				cell: (info: any) => {
					const actionValue = info.getValue();
					return (
						<div className='flex gap-4 w-full items-center justify-start'>
							<button
								onClick={openEditModal}
								className=' flex items-center gap-1 text-grey-300'
							>
								<EditIcon />
								Edit
							</button>
							<button
								onClick={openDeleteModal}
								className='flex items-center gap-1 text-grey-300'
							>
								<DeleteIcon />
								Delete
							</button>
						</div>
					);
				},
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
					<div className='flex bg-[#E5EBEF] py-[10px] px-5 rounded-md'>
						<p className='font-medium text-black'>Binance Mainnet</p>
					</div>
					<div className='flex bg-[#E5EBEF] items-center gap-2 py-[10px] px-5 rounded-md'>
						<Image src='/Base.svg' width={20} height={20} alt='Base SVG Icon' />
						<p className='font-medium'>0x2c9b...fa23bc093ae3b282c0</p>
					</div>
				</div>
				<div className='flex gap-3'>
					<Button
						variant='secondary'
						size='md'
						className='text-base gap-2'
						onClick={openApproveModal}
					>
						Approve transaction
					</Button>
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full table-fixed border border-destructive shadow-md rounded-lg overflow-hidden'>
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

			<PaymentSuccessModal isOpen={isModalOpen} onClose={closeModal} />
			<DeletePaymentModal
				isOpen={isDeleteModalOpen}
				onClose={closeDeleteModal}
			/>
			<EditPaymentModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
			<ApprovePaymentModal
				isOpen={isApproveModalOpen}
				onClose={closeApproveModal}
				onApprove={handleApproveClick}
				loading={loading}
			/>
		</div>
	);
};

export default PreviewPayment;
