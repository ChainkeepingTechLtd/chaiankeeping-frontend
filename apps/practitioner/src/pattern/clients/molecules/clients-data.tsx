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

export const AccountData = [
	{
		id: 1,
		year: "2022",

		transactions: "1,098",
		service_type: "Basic",

		status: "Unpaid",
	},
	{
		id: 2,
		year: "2021",

		transactions: "4,860",
		service_type: "Premium",

		status: "Paid",
	},
];

export const TaxesDueData = [
	{
		id: 1,
		tax: "Capital Gains Tax - CGT",
		assessment_period: "Dec 31, 2023",
		due_date: {
			date: "Jun 30, 2023",
			time: "04:29 PM",
		},
	},
	{
		id: 2,
		tax: "Pay As You Earn - PAYE",
		assessment_period: "Feb 28, 2023",
		due_date: {
			date: "Apr 10, 2023",
			time: "04:29 PM",
		},
	},
	{
		id: 3,
		tax: "Personal Income Tax - PIT",
		assessment_period: "Dec 31, 2023",
		due_date: {
			date: "Jun 30, 2023",
			time: "12:29 PM",
		},
	},
	{
		id: 4,
		tax: "Value Added Tax - VAT",
		assessment_period: "Feb 28, 2023",
		due_date: {
			date: "Apr 10, 2023",
			time: "12:20 PM",
		},
	},
];
