// import { ColumnDef } from "@tanstack/react-table";

// export const InvoiceTableColumns: ColumnDef<z.infer<typeof studentSchema>>[] = [
//     {
//         accessorKey: "name",
//         header: "Student Name",
//         cell: ({ row }) => (
//             <div className="capitalize">{row.getValue("name") ?? "N/A"}</div>
//         ),
//     },
//     {
//         accessorKey: "points",
//         header: () => <div>Points</div>,
//         cell: ({ row }) => (
//             <div className="lowercase font-semibold">
//                 {row.getValue("points") ?? 0} Points
//             </div>
//         ),
//     }
// ];


// This would be the Invoice Table columns
// The component below is just a placeholder
import React from 'react'

const InvoiceTableColumns = () => {
  return (
    <div>InvoiceTableColumns</div>
  )
}

export default InvoiceTableColumns