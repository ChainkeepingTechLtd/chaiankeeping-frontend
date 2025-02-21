import CustomThead from "@/pattern/common/molecules/custom-thead"
import { ViewMoreTableTrigger } from "@/pattern/common/molecules/view-more-table-trigger"
import { Badge, Button, Checkbox, cn, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, ThSortIcon } from "@chainkeeping/ui"
import { ColumnDef } from "@tanstack/react-table"

export type SalesInvoice = {
    id: string
    amount: number
    customer: string
    requestDate: string
    paidDate: string | null
    paymentMethod: string | null
    revenueStream: string | null
    status: "draft" | "unpaid" | "paid" | "partially paid"
}


export const SalesInvoiceColumns: ColumnDef<SalesInvoice>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="h-full flex items-center">
                <Checkbox
                    checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                    className="fixed"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="h-full flex items-center">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="fixed"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: () => (
            <div className="bg-accent h-full flex items-center ml-[32px]">
                <CustomThead title="Invoices" className="fixed w-[337px]" />
            </div>
        ),
        cell: ({ row }) => (
            <div className="!bg-red-500 w-[337px] h-full flex items-center ml-[32px]">
                <div className="fixed w-full font-normal">
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
        accessorKey: "customer",
        header: () => <CustomThead title="Customer" className="w-[150px]" />,
        cell: ({ row }) => {
            return <div className='w-[150px]'>{row.getValue('customer') ?? "-"}</div>
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
        accessorKey: "revenueStream",
        header: () => <CustomThead title="Revenue Stream" className="w-[149px]" />,
        cell: ({ row }) => {
            return <div className='w-[149px]'>{row.getValue('revenueStream') ?? "-"}</div>
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
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <ViewMoreTableTrigger />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Invoice</DropdownMenuItem>
                        <DropdownMenuItem>Download PDF</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]