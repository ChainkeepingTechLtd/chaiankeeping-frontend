import { useState } from "react";
import { ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table"
import { SalesInvoice, SalesInvoiceColumns } from "../molecules/sales-invoice-columns";
import { Button, Pagination, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@chainkeeping/ui";
import SearchInput from "@/pattern/transaction/molecules/search-input";

const Invoices = [
    {
        title: "All invoices",
        value: "all"
    },
    {
        title: "Crypto Invoice",
        value: "crypto"
    },
    {
        title: "Tax Invoice",
        value: "tax"
    },
]

// Sample data
const data: SalesInvoice[] = [
    {
        id: "SINV#00000078",
        amount: 32000.0,
        customer: "Nick Hunterman",
        requestDate: "Dec 02, 2022",
        paidDate: null,
        paymentMethod: null,
        revenueStream: null,
        status: "draft",
    },
    {
        id: "SINV#00000085",
        amount: 150000.0,
        customer: "Alexis Thorpe",
        requestDate: "Nov 01, 2021",
        paidDate: null,
        paymentMethod: null,
        revenueStream: null,
        status: "unpaid",
    },
    {
        id: "SINV#00000085",
        amount: 150000.0,
        customer: "Janet Doe",
        requestDate: "Nov 01, 2021",
        paidDate: "Nov 07, 2021",
        paymentMethod: "Card",
        revenueStream: null,
        status: "partially paid",
    },
    {
        id: "SINV#00000085",
        amount: 150000.0,
        customer: "Janet Doe",
        requestDate: "Nov 01, 2021",
        paidDate: "Nov 07, 2021",
        paymentMethod: "Crypto",
        revenueStream: null,
        status: "paid",
    },
]

const SalesInvoiceTable = () => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})

    const [search, setSearch] = useState<string>("")

    const columns = SalesInvoiceColumns

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="bg-accent w-full px-4 md:px-8">
            <div className="w-full flex items-center justify-start gap-4 py-4">
                <div className="w-[335px]">
                    <SearchInput
                        value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => table.getColumn("id")?.setFilterValue(event.target.value)}
                        className="w-full h-[48px]"
                        placeholder='Search invoice ID or customers...'
                    />
                </div>

                {/* Select Invoice */}
                <Select onValueChange={setSearch} value={search} defaultValue={Invoices?.[0]?.value}>
                    <SelectTrigger className="w-[200px] h-[48px]">
                        <SelectValue placeholder="— Select —" />
                    </SelectTrigger>
                    <SelectContent>
                        {Invoices?.map(({ title, value }) => (
                            <SelectItem key={value} value={value}>
                                {title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="bg-white w-full pt-[1px] px-[1px] pb-2 rounded-[8px] border">
                <Table className="relative">
                    <TableHeader className="relative bg-accent w-full">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="w-full">
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="whitespace-nowrap">
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="bg-white">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* Pagination */}
            {/* <Hidden visible={isSuccess && !isLoading && !isFetching}> */}
            {/* {table.getRowModel().rows?.length ? (
                <Pagination table={table} className='pr-6' />
                ) : null} */}
            {/* </Hidden> */}
        </div>
    )
}

export default SalesInvoiceTable