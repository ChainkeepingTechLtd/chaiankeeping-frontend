import type { FC } from "react"
import type { PurchaseInvoice } from "./purchase-invoice-columns"
import { Button } from "@chainkeeping/ui"

interface IProps {
    paymentStatus: PurchaseInvoice["status"]
    invoice: PurchaseInvoice["id"]
}

const PurchaseInvoiceTableAction: FC<IProps> = ({ paymentStatus, invoice }) => {
    const renderButton = () => {
        switch (paymentStatus) {
            case "unpaid":
                return (
                    <Button size="sm" variant="secondaryOutline">
                        Pay
                    </Button>
                )
            case "paid":
                return (
                    <Button size="sm" variant="secondaryOutline">
                        Approve
                    </Button>
                )
            default:
                return <div></div>
        }
    }

    return <>{renderButton()}</>
}

export default PurchaseInvoiceTableAction

