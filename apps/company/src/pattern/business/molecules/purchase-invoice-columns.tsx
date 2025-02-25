import CustomThead from "@/pattern/common/molecules/custom-thead"
import { ViewMoreTableTrigger } from "@/pattern/common/molecules/view-more-table-trigger"
import { Badge, Button, Checkbox, cn, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, ThSortIcon } from "@chainkeeping/ui"
import { ColumnDef } from "@tanstack/react-table"
import PurchaseInvoiceTableAction from "./purchase-invoice-table-actions"

export type PurchaseInvoice = {
    id: string
    amount: number
    vendor: string
    requestDate: string
    paidDate: string | null
    paymentMethod: string | null
    expenseType: string | null
    status: "draft" | "unpaid" | "paid" | "pending approval"
}


export const PurchaseInvoiceColumns: ColumnDef<PurchaseInvoice>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="h-full flex items-center ml-[-16px]">
                <div className="fixed bg-accent py-3 pl-3 pr-5">
                    <Checkbox
                        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                        aria-label="Select all"
                    />
                </div>
            </div>
        ),
        cell: ({ row }) => (
            <div className="h-full flex items-center ml-[-16px]">
                <div className={cn("fixed py-3 pl-3 pr-5", row.getIsSelected() ? "bg-accent" : "bg-white")}>
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                        aria-label="Select row"
                    />
                </div>
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: () => (
            <div className="bg-accent h-full w-[180px] md:w-[327px] flex items-center">
                <CustomThead title="Invoices" className="fixed bg-accent py-3 pl-4 pr-10 md:pl-8 md:pr-16" />
            </div>
        ),
        cell: ({ row }) => (
            <div className="w-[100px] md:w-[327px] h-full flex items-center">
                <div className={cn("fixed w-[180px] md:w-[327px] font-normal text-xs md:text-sm py-2 px-1 md:px-8", row.getIsSelected() ? "bg-accent" : "bg-white")}>
                    {row.getValue("id") ?? "-"}
                </div>
            </div>
        ),
    },
    {
        accessorKey: "amount",
        header: () => <CustomThead title="Amount" className="w-[122px] justify-end text-right" />,
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)
            return (
                <div className='w-[122px] text-right'>{formatted}</div>
            )
        },
    },
    {
        accessorKey: "vendor",
        header: () => <CustomThead title="Vendor" className="w-[150px]" />,
        cell: ({ row }) => {
            return <div className='w-[150px]'>{row.getValue('vendor') ?? "-"}</div>
        }
    },
    {
        accessorKey: "requestDate",
        header: () => <CustomThead title="Request On" className="w-[124px]" />,
        cell: ({ row }) => {
            return <div className='w-[124px]'>{row.getValue('requestDate') ?? "-"}</div>
        }
    },
    {
        accessorKey: "paidDate",
        header: () => <CustomThead title="Paid On" className="w-[127px]" />,
        cell: ({ row }) => {
            return <div className='w-[127px]'>{row.getValue('paidDate') ?? "-"}</div>
        }
    },
    {
        accessorKey: "paymentMethod",
        header: () => <CustomThead title="Payment Method" className="w-[165px]" />,
        cell: ({ row }) => {
            return <div className='w-[165px]'>{row.getValue('paymentMethod') ?? "-"}</div>
        }
    },
    {
        accessorKey: "expenseType",
        header: () => <CustomThead title="Expense Type" className="w-[149px]" />,
        cell: ({ row }) => {
            return <div className='w-[149px]'>{row.getValue('expenseType') ?? "-"}</div>
        }
    },
    {
        accessorKey: "status",
        header: () => <CustomThead title="Status" className="w-[98px]" />,
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <Badge
                    variant="outline"
                    className={
                        cn(
                            "text-white text-[0.625rem] min-w-fit rounded-full",
                            status === "paid"
                                ? "bg-[hsla(145,63%,42%,1)]" : "",
                            status === "unpaid"
                                ? "bg-destructive" : "",
                            status === "partially paid"
                                ? "bg-[hsla(28,91%,54%,1)]" : "",
                            status === "draft" ? "bg-[hsla(214,84%,56%,1)]" : ""
                        )
                    }
                >
                    {status}
                </Badge>
            )
        },
    },
    {
        id: "actions",
        header: () => <CustomThead title="Actions" className="w-[143px]" />,
        cell: ({ row }) => {
            return (
                <div className="w-[143px] flex items-center justify-between">
                    <PurchaseInvoiceTableAction paymentStatus={row.getValue("status")} invoice={row.getValue("id")} />
                    <DropdownMenu>
                        <DropdownMenuTrigger className="relative cursor-pointer">
                            <ViewMoreTableTrigger />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Invoice</DropdownMenuItem>
                            <DropdownMenuItem>Download PDF</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]