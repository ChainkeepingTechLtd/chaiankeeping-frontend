import { useSearchParams } from 'next/navigation';
import MainMenuIcon from '@/pattern/common/atoms/main-menu-icon'
import { ButtonWithAddon } from '@chainkeeping/ui'
import InvoicingToggleGroup from '../organisms/invoicing-toggle-group'
import { BUSINESS_ROUTES } from '@/lib/routes'
import SalesInvoiceTable from '../organisms/sales-invoice-table';
import PurchaseInvoiceTable from '../organisms/purchase-invoice-table';
import { generateMockPurchaseInvoices } from '@/lib/mocks/generate-mock-purchase-invoice';
import { PlusIcon } from 'lucide-react';
import { show } from "@ebay/nice-modal-react";
import { CreatePurchaseInvoiceModal } from '../organisms/create-purchase-invoice-modal';

const InvoicingTemp = () => {
    const searchParams = useSearchParams()
    const activeTab = searchParams.get('tab') as "sales-invoice" | "purchase-invoice"

    const purchaseInvoices = generateMockPurchaseInvoices(4)

    const handleInvoice = () => {
        if (activeTab === "purchase-invoice") {
            show(CreatePurchaseInvoiceModal)
        } else {
            show(CreatePurchaseInvoiceModal)
        }
    }

    return (
        <div className='h-full w-full flex flex-col'>
            <div className='bg-white w-full md:min-h-[126px] h-fit flex flex-col gap-y-6 md:gap-y-2 pt-6'>
                <div className='w-full flex items-start justify-between px-4 md:px-8'>
                    <div className='flex items-center gap-[10px]'>
                        <MainMenuIcon route={BUSINESS_ROUTES.index} />
                        <h2 className='text-base text-primary font-bold font-sen'>Invoicing</h2>
                    </div>
                    <ButtonWithAddon variant="secondary" addon={<PlusIcon className='inline h-5 w-5' />} addonPosition='start' onClick={() => handleInvoice()} className='hidden md:block md:font-medium md:w-fit'>Create an invoice</ButtonWithAddon>
                </div>
                <div className='w-full'>
                    <InvoicingToggleGroup />
                    {activeTab === "sales-invoice" ? <SalesInvoiceTable /> : <PurchaseInvoiceTable data={purchaseInvoices} />}
                </div>
            </div>
        </div>
    )
}

export default InvoicingTemp