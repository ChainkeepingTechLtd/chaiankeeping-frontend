import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@chainkeeping/ui"
import InvoicingCardIcon from "../atoms/invoicing-card-icon"
import PaymentsCardIcon from "../atoms/payments-card-icon"
import PayrollCardIcon from "../atoms/payroll-card-icon"
import CustomerCardsIcon from "../atoms/customers-card-icon"
import VendorsCardIcon from "../atoms/vendors-card-icon"
import EmployeesCardIcon from "../atoms/employees-card-icon"
import AccountingCardIcon from "../atoms/accounting-card-icon"

const businessItems = [
    {
        title: "Invoicing",
        description: "Create and manage sales and purchase invoices to your customers and vendors with ease",
        icon: InvoicingCardIcon,
        status: "12 Sales Invoices, 10 Purchase Invoices",
    },
    {
        title: "Payments",
        description: "Manage and track all your payments in one place purchase invoice, payroll others.",
        icon: PaymentsCardIcon,
        status: "32 payments made",
    },
    {
        title: "Payroll",
        description: "Easily process your employee salaries, taxes, benefits and important payroll details.",
        icon: PayrollCardIcon,
        status: "10 payrolls processed",
    },
    {
        title: "Customers",
        description: "Manage all your customer information in one place, add, edit, and view customer details.",
        icon: CustomerCardsIcon,
        status: "16 customers added",
    },
    {
        title: "Vendors",
        description: "Keep track of all your vendor information, manage payments, track purchase invoices.",
        icon: VendorsCardIcon,
        status: "15 vendors added",
    },
    {
        title: "Employees",
        description: "Manage all your employee information, keep track of personnel details, payroll and others.",
        icon: EmployeesCardIcon,
        status: "23 employees added",
    },
    {
        title: "Accounting",
        description: "Integrate your favorite accounting tools to smoothly manage your business.",
        icon: AccountingCardIcon,
        status: "3 tools connected",
    },
    {
        title: "Payment Information",
        description: "Add and manage your bank accounts to receive payments via sales invoice others.",
        icon: PaymentsCardIcon,
        status: "3 bank accounts added",
    },
]

export const BusinessGrid = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessItems.map((item, idx) => (
                <Card key={idx} className="space-y-[8px] cursor-pointer">
                    <CardHeader className="space-y-1">
                        <div className="flex flex-col items-start gap-y-1">
                            <div className="">
                                <item.icon />
                            </div>
                            <CardTitle className="text-base text-[hsla(216,30%,18%,1)] font-bold font-sen">{item.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-[hsla(215,23%,40%,1)]">{item.description}</p>
                    </CardContent>
                    <CardFooter className="pt-4 !mt-4 border-t">
                        <p className="text-sm text-[hsla(215,23%,40%,1)]">{item.status}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

