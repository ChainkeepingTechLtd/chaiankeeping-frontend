import { useSearchParams } from 'next/navigation';
import MainMenuIcon from '@/pattern/common/atoms/main-menu-icon'
import { Button } from '@chainkeeping/ui'
import InvoicingToggleGroup from '../organisms/invoicing-toggle-group'
import { BUSINESS_ROUTES } from '@/lib/routes'
import SalesInvoiceTable from '../organisms/sales-invoice-table';

const InvoicingTemp = () => {
    const searchParams = useSearchParams()
    const activeTab = searchParams.get('tab')

    return (
        <div className='h-full w-full flex flex-col'>
            <div className='bg-white w-full md:min-h-[126px] h-fit flex flex-col gap-y-6 md:gap-y-2 pt-6'>
                <div className='w-full flex items-start justify-between px-4 md:px-8'>
                    <div className='flex items-center gap-[10px]'>
                        <MainMenuIcon route={BUSINESS_ROUTES.index} />
                        <h2 className='text-base text-primary font-bold font-sen'>Invoicing</h2>
                    </div>
                    <Button variant="secondary" className='hidden md:block'>Create an invoice</Button>
                </div>
                <div className='w-full'>
                    <InvoicingToggleGroup />
                    {activeTab === "sales-invoice" ? <SalesInvoiceTable /> : <SalesInvoiceTable />}
                </div>
            </div>
        </div>
    )
}

export default InvoicingTemp