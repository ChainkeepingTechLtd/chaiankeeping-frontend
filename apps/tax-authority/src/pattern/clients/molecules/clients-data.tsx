import ACIcon from "../atoms/ac-icon";
import AccountIcon from "../atoms/account-icon";
import JFIcon from "../atoms/jf-icon";
import LKIcon from "../atoms/lk-icon";
import UnAssignedIcon from "../atoms/unassigned-icon";
import UnknownIcon from "../atoms/unknown-icon";

export const ClientsData = [
	{
		id: 1,
		user_id: "ck_1120919",
		name: "Jerome Jenkins ",

		type: "Individual",
		tin: "12345678-0001",
		tax_paid: "10",

		assigned_to: {
			title: "Mariam Basit",
			icon: <AccountIcon />,
		},
	},
	{
		id: 2,
		user_id: "ck_1300903",
		name: "Larissa Tucker",

		type: "Individual",
		tin: "12345678-0001",
		tax_paid: "10",

		assigned_to: {
			title: "Unassigned",
			icon: <UnAssignedIcon />,
		},
	},
	{
		id: 3,
		user_id: "ck_1200956",
		name: "Derek Hale",

		type: "Individual",
		tin: "12345678-0001",
		tax_paid: "10",

		assigned_to: {
			title: "Jocelyn Franci",
			icon: <JFIcon />,
		},
	},
	{
		id: 4,
		user_id: "ck_1129498",
		name: "Folake Adesanya",

		type: "Individual",
		tin: "12345678-0001",
		tax_paid: "10",

		assigned_to: {
			title: "Livia Kenter",
			icon: <LKIcon />,
		},
	},
	{
		id: 5,
		user_id: "ck_1120919",
		name: "Convexity Limited",

		type: "Company",
		tin: "12345678-0001",
		tax_paid: "10",
		assigned_to: {
			title: "Ann Calzoni",
			icon: <ACIcon />,
		},
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
