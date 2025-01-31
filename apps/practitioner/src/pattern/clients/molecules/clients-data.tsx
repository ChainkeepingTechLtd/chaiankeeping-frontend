import ACIcon from "../atoms/ac-icon";
import AccountIcon from "../atoms/account-icon";
import JFIcon from "../atoms/jf-icon";
import LKIcon from "../atoms/lk-icon";
import UnAssignedIcon from "../atoms/unassigned-icon";
import UnknownIcon from "../atoms/unknown-icon";

export const ClientsData = [
	{
		id: 1,
		clients: "Jerome Jenkins ",

		email: "jj@gmail.com ",
		service_type: "Report Signing",

		assigned_to: {
			title: "Mariam Basit",
			icon: <AccountIcon />,
		},
		status: "Active",
		account: "shared",
	},
	{
		id: 2,
		clients: "Larissa Tucker",

		email: "larissat@gmail.com",
		service_type: "Account Management",

		assigned_to: {
			title: "Unassigned",
			icon: <UnAssignedIcon />,
		},
		status: "Inactive",
		account: "Managed",
	},
	{
		id: 3,
		clients: "Derek Hale",

		email: "derek@gmail.com",
		service_type: "Account Management",

		assigned_to: {
			title: "Jocelyn Franci",
			icon: <JFIcon />,
		},
		status: "Pending",
		account: "Managed",
	},
	{
		id: 4,
		clients: "Folake Adesanya",

		email: "folushade@gmail.com",
		service_type: "Report Signing",

		assigned_to: {
			title: "Livia Kenter",
			icon: <LKIcon />,
		},
		status: "Active",
		account: "Shared",
	},
	{
		id: 5,
		clients: "Convexity Limited",
		email: "info@convexity.com",
		service_type: "Auditing",
		assigned_to: {
			title: "Ann Calzoni",
			icon: <ACIcon />,
		},
		status: "Active",
		account: "Shared",
	},
];
