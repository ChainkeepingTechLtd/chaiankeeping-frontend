import { cn, ToggleGroup, ToggleGroupItem } from '@chainkeeping/ui'
import useCreateSearchQuery from '@/lib/hooks/useCreateSearchQuery';
import { useState } from 'react';


const InvoicingTabs = [
    {
        name: "Sales invoice",
        value: "sales-invoice",
    },
    {
        name: "Purchase invoice",
        value: "purchase-invoice",
    }
]

const InvoicingToggleGroup = () => {
    const { createSearchParams, searchParams } = useCreateSearchQuery();

    // get active tab value
    const activeTab = searchParams.get("tab");

    const [tab, setTab] = useState<string>(activeTab ?? InvoicingTabs[0].value)


    return (
        <>
            <ToggleGroup type="single" orientation='vertical' value={tab as string}
                onValueChange={(newValue) => {
                    if (newValue) {
                        createSearchParams({
                            param: { name: "tab", value: newValue },
                        });
                        setTab(newValue)
                    }
                }}
                className='w-full h-full flex items-center justify-start gap-4 flex-wrap  px-4 md:px-8'>
                {InvoicingTabs?.map(({ name, value }, idx) => (
                    <div key={idx} className='w-fit flex items-center'>
                        <ToggleGroupItem name={name} value={value} aria-label={name} size="custom" variant="outline" className={cn('bg-transparent min-w-fit max-w-[149px] min-h-[38px] flex items-center justify-center text-[hsla(215,20%,65%,1)] text-base font-medium whitespace-nowrap gap-3 pt-2 pb-5 px-3 border-0 rounded-none hover:bg-transparent hover:text-primary focus-visible:bg-transparent focus-visible:text-primary data-[state=on]:bg-transparent data-[state=on]:text-primary  data-[state=on]:border-b-[2px] data-[state=on]:border-b-secondary transition-all duration-200 ease-in-out')}>
                            {name}
                        </ToggleGroupItem>
                    </div>
                ))}
            </ToggleGroup>
        </>
    )
}

export default InvoicingToggleGroup