import { useMemo, useState } from "react";
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
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import AddClientModal from "@/pattern/taxes/molecules/add-client-modal";
import SearchInput from "@/pattern/clients/molecules/search-input";
import AddIcon from "@/pattern/clients/atoms/add-icon";
import SortIcon from "@/pattern/clients/atoms/sort-icon";
import PrevIcon from "@/pattern/clients/atoms/prev-icon";
import NextIcon from "@/pattern/clients/atoms/next-icon";
import FileNameIcon from "@/pattern/clients/atoms/file-name-icon";
import Downloadicon2 from "@/pattern/clients/atoms/download-icon2";
import DocIcon from "@/pattern/clients/atoms/doc-icon";
import SettingsMenuIcon from "@/pattern/common/atoms/settings-menu-icon";
import { useRouter } from "next/navigation";

interface Clientele {
	id: string | number;
	clients: string;
	email: string;
	service_type: string;
	assigned_to: {
		title: string;
		icon?: React.ReactNode;
	};
	status: string;
	account: string;
}

interface ClientsTableProps {
	data: Clientele[];
}

const ClientsTable: React.FC<ClientsTableProps> = ({ data }) => {
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
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
	const router = useRouter();

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const openAddClientModal = () => {
		setIsAddClientModalOpen(true);
	};

	const closeClientModal = () => {
		setIsAddClientModalOpen(false);
	};

	const openDeleteModal = () => {
		setIsDeleteModalOpen(true);
	};

	const handleViewClient = () => {
		router.push("/clients/manage");
	};

	const closeDeleteModal = () => {
		setIsDeleteModalOpen(false);
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
					item.clients.toLowerCase().includes(search.toLowerCase()) ||
					item.account.toLowerCase().includes(search.toLowerCase()) ||
					item.email.includes(search)
				);
			});
		}

		console.log("Filtered Data:", filtered);
		return filtered;
	}, [data, search]);

	// Define columns
	const columns = useMemo<ColumnDef<Clientele>[]>(
		() => [
			{
				id: "select",
				header: ({ table }: { table: Table<Clientele> }) => (
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
				header: "Client",
				accessorKey: "clients",
				cell: (info: any) => (
					<div className='flex'>
						<div className='text-grey-600 text-sm flex items-center gap-1 w-auto  text-center'>
							<span>{info.getValue()}</span>
						</div>
					</div>
				),
			},

			{
				header: "Email",
				accessorKey: "email",
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
						case "Active":
							bgColor = "bg-[#27AE60]";
							break;
						case "Inactive":
							bgColor = "bg-[#94A3B8]";
							break;
						case "Pending":
							bgColor = "bg-[#F9CC59]";
							break;
						default:
							bgColor = "bg-grey-500";
					}

					return (
						<div className='flex gap-1'>
							<div className='text-grey-600 border rounded-full py-1 px-2 text-sm flex items-center gap-1 w-auto text-center'>
								{/* Dynamic background color based on status */}
								<div className={`h-2 w-2 rounded-full ${bgColor}`}></div>
								<span>{status}</span>
							</div>
						</div>
					);
				},
			},

			{
				header: "Account Type",
				accessorKey: "account",
				cell: (info: any) => (
					<div className='flex'>
						<div className='bg-[#F5F8FA] text-grey-600 text-sm flex items-center gap-1 w-auto px-2 py-1 rounded-md text-center'>
							<span>{info.getValue()}</span>
						</div>
					</div>
				),
			},

			{
				id: "actions",
				cell: () => (
					<div className='flex w-full items-center justify-start'>
						<Button
							onClick={handleViewClient}
							variant='primaryOutline'
							size='sm'
							className='text-sm  gap-2'
						>
							View client
						</Button>
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
				<div className='flex  gap-3 '>
					<SearchInput
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Search...'
					/>

					<Select
						value={selectedYear}
						onValueChange={(value) => setSelectedYear(value)}
					>
						<SelectTrigger>
							<SelectValue placeholder='Status: All' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all-year'>Status: All </SelectItem>
							<SelectItem value='2025'>2025</SelectItem>
							<SelectItem value='2024'>2024</SelectItem>
							<SelectItem value='2023'>2023</SelectItem>
							<SelectItem value='2022'>2022</SelectItem>
							<SelectItem value='2021'>2021</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className='flex gap-3'>
					<Button
						onClick={openAddClientModal}
						variant='secondary'
						size='md'
						className='text-base  gap-2'
					>
						<SettingsMenuIcon className='text-white' />
						Assign client
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

			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title='Bulk Invite Clients'
			>
				<div className='p-4 flex flex-col gap-4 items-center'>
					<div className='flex w-full justify-between items-center bg-[#F8F9FA] border-[#E6E9EE] border border-dashed p-2 rounded-md'>
						<div className='flex items-center gap-1'>
							<FileNameIcon />
							<p className='text-sm'>chainkeeping_bulk_payment.xlsx</p>
						</div>
						<Downloadicon2 />
					</div>

					<div className='mb-4 p-4 flex w-full bg-[#F8F9FA] rounded-md hover:bg-transparent transition-all ease-in-out duration-300'>
						<div className='w-full gap-1 border border-dashed rounded-md border-[#CBD5E1] flex items-center justify-center flex-col h-[120px] transition-all ease-in-out duration-300 hover:bg-[#FDF3F3] hover:border-[#D82E2E]'>
							<DocIcon />
							<h6 className='text-xs font-bold'>Drag & drop file or select</h6>
							<p className='text-[10px] text-grey-400'>
								Supports .csv, .xls, .xlsx files up to 20MB
							</p>
						</div>
					</div>

					<Button onClick={closeModal} className='w-full gap-2 text-base'>
						Save upload
					</Button>
				</div>
			</Modal>

			<Modal
				isOpen={isDeleteModalOpen}
				onClose={closeDeleteModal}
				title='Remove Client'
			>
				<div className='p-4 flex flex-col gap-7 items-center'>
					{/* <SuccesIcon /> */}

					<p className='text-grey-400 text-sm text-center'>
						<span className='text-[#202B3C]'>[First_name][Last_name]</span> will
						be removed from your client list. Are you sure about this?
					</p>

					<Button variant='secondary' className='w-full text-base'>
						Remove client
					</Button>
					<Button
						variant='link'
						onClick={closeDeleteModal}
						className='w-full text-base'
					>
						Cancel
					</Button>
				</div>
			</Modal>
			<AddClientModal
				isOpen={isAddClientModalOpen}
				onClose={closeClientModal}
				title='Remove Client'
			>
				<div className='p-4 flex flex-col gap-7 items-center'>
					{/* <SuccesIcon /> */}

					<p className='text-grey-400 text-sm text-center'>
						<span className='text-[#202B3C]'>[First_name][Last_name]</span> will
						be removed from your client list. Are you sure about this?
					</p>

					<Button variant='secondary' className='w-full text-base'>
						Remove client
					</Button>
				</div>
			</AddClientModal>
		</div>
	);
};

export default ClientsTable;
