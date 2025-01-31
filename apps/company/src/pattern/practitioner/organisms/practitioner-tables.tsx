import React, { useState } from "react";
import { Button, Checkbox } from "@chainkeeping/ui";
import SortIcon from "../atoms/sort-icon";
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import { useRouter } from "next/navigation";

type SortOrder = "asc" | "desc" | null;
type Tax = {
	id: string;
	name: string;
	email: string;
	serviceType: string;
	status: string;
	lastLogin: string;
	action: string;
};

const PractitionerTables = () => {
	const [sortColumn, setSortColumn] = useState<string | null>(null);
	const [sortOrder, setSortOrder] = useState<SortOrder>(null);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchText, setSearchText] = useState("");

	const router = useRouter();

	const handleView = () => {
		router.push("/practitioner/activity-log");
	};

	const [orders, setOrders] = useState<Tax[]>([
		{
			id: "1",
			name: "Peter Sutherland",
			email: "p.sutherland@gmail.com",
			serviceType: "Tax Management, Report Signing, Auditing",
			status: "Active",
			lastLogin: "Mar 2, 2022, 5:43 PM",
			action: "Revoke access",
		},
	]);

	const getStatusStyle = (status: string) => {
		switch (status) {
			case "Inactive":
				return { backgroundColor: "#F9CC59", color: "#202B3C" };
			case "Active":
				return { backgroundColor: "#27AE60", color: "#FFFFFF" };

			default:
				return {};
		}
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const toggleSort = (column: keyof Tax) => {
		const isAscending = sortColumn === column && sortOrder === "asc";
		setSortOrder(isAscending ? "desc" : "asc");
		setSortColumn(column); // Now correctly typed to accept `string`

		const sortedOrders = [...orders].sort((a, b) => {
			if (a[column] < b[column]) return isAscending ? 1 : -1;
			if (a[column] > b[column]) return isAscending ? -1 : 1;
			return 0;
		});

		setOrders(sortedOrders); // Ensure `setOrders` is also correctly typed
	};

	const filteredOrders = orders.filter((order: any) =>
		Object.values(order).some((value) => {
			if (typeof value === "string" || typeof value === "number") {
				return value
					.toString()
					.toLowerCase()
					.includes(searchText.toLowerCase());
			}
			return false;
		})
	);

	const indexOfLastRow = currentPage * rowsPerPage;
	const indexOfFirstRow = indexOfLastRow - rowsPerPage;
	const currentRows = filteredOrders.slice(indexOfFirstRow, indexOfLastRow);

	// Handle row selection
	const handleRowsChange = (event: { target: { value: any } }) => {
		setRowsPerPage(Number(event.target.value));
		setCurrentPage(1); // Reset to the first page
	};
	return (
		<div className='w-full overflow-x-auto border rounded-lg'>
			<table className='w-full min-w-[1000px] border-separate border-spacing-0 text-left rounded-lg'>
				<thead>
					<tr className='bg-[#F5F8FA] rounded-lg overflow-hidden'>
						<th className='cursor-pointer whitespace-nowrap p-4 text-sm '>
							<p className='flex items-center gap-2'>
								<Checkbox className='text-lg' />
							</p>
						</th>

						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("name")}
						>
							<p className='flex items-center gap-2'>
								Name <SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("email")}
						>
							<p className='flex items-center gap-2'>
								Email <SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("serviceType")}
						>
							<p className='flex items-center gap-2'>
								Service Type <SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("status")}
						>
							<p className='flex items-center gap-2'>
								Status
								<SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("lastLogin")}
						>
							<p className='flex items-center gap-2'>
								Last Login <SortIcon />
							</p>
						</th>

						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("action")}
						>
							<p className='flex items-center gap-2'>
								Action <SortIcon />
							</p>
						</th>
					</tr>
				</thead>
				<tbody>
					{currentRows.map((order: Tax, idx) => (
						<tr key={idx} className='bg-white'>
							<td className='whitespace-nowrap border-b px-4 py-2 text-sm'>
								<div className='flex items-center gap-2'>
									<Checkbox className='text-lg' />
								</div>
							</td>

							<td
								className='whitespace-nowrap border-b px-4 py-2 cursor-pointer text-sm'
								onClick={handleView}
							>
								<div className='flex items-center gap-2'>{order.name}</div>
							</td>
							<td
								className='whitespace-nowrap border-b px-4 cursor-pointer py-3 text-sm'
								onClick={handleView}
							>
								<div className='flex items-center gap-2'>{order.email}</div>
							</td>

							<td
								className='whitespace-nowrap border-b px-4 cursor-pointer py-1 text-sm'
								onClick={handleView}
							>
								<div className='flex items-center gap-2 pr-4'>
									{order.serviceType}
								</div>
							</td>
							<td
								className='whitespace-nowrap border-b cursor-pointer  px-4 py-3 text-sm'
								onClick={handleView}
							>
								<div className='flex'>
									<div
										style={getStatusStyle(order.status)}
										className='flex items-center justify-center gap-1  text-[10px] text-semibold rounded-full px-2 py-1'
									>
										{order.status}
									</div>
								</div>
							</td>
							<td className='whitespace-nowrap border-b px-4 py-1 text-sm'>
								<div className='flex flex-col items-start pr-4'>
									<p>{order.lastLogin}</p>
								</div>
							</td>

							<td className='whitespace-nowrap border-b px-4 py-3 text-sm text-grey-300'>
								<Button variant='ghost' size='sm' onClick={openModal}>
									{order.action}
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title='Revoke Practitioner Access'
			>
				<div className='p-4 flex flex-col gap-7 items-center'>
					<p className='text-grey-400 text-sm text-center'>
						[Tax_Pro Fname_Lname] will no longer have access to manage your
						account. This action cannot be undone.
					</p>
					{/* <div className='flex w-full rounded-lg border border-dashed py-4 px-3 justify-between items-center'>
						<p className='text-sm text-grey-500'>0123-5678-9012</p>
						<CopyIcon />
					</div> */}
					<Button
						variant='destructive'
						onClick={closeModal}
						className='w-full text-base'
					>
						Revoke access
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default PractitionerTables;
