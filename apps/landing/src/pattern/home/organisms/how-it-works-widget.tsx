import { ToggleGroup } from '@chainkeeping/ui'
import HowItWorksStep from '../molecules/how-it-works-step'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { setToggleGroupValue } from '@/redux/slices/how-it-works.slice'
import { useEffect, useRef } from 'react'

const howItWorks = [
    {
        number: "01",
        value: "1",
        title: "Import Transactions",
        description: "Connect to your crypto exchanges or wallets via API or CSV uploads. Chainkeeping will automatically and securely import your transactions data."
    },
    {
        number: "02",
        value: "2",
        title: "Review Transactions",
        description: "Chainkeeping automatically classifies your transactions accordingly, you may need to resolve unclassified transactions or add additional data such as expenses incurred."
    },
    {
        number: "03",
        value: "3",
        title: "Get insights & download report",
        description: "Head on to the reports tab to see your generated tax reports, get your report signed by an accounting practitioner, file your taxes and download your report. "
    }
]

const HowItWorksWidget = () => {
    const dispatch: AppDispatch = useDispatch();
    const toggleGroupValue = useSelector((state: RootState) => state.howItWorks.toggleGroupValue)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            dispatch(
                setToggleGroupValue(
                    toggleGroupValue === "3" ? "1" : String(Number(toggleGroupValue) + 1),
                ),
            )
        }, 5000)

        // Clean up the interval when component unmounts
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [dispatch, toggleGroupValue])

    return (
        <div className='w-full h-fit lg:max-w-[439px] lg:max-h-[306px] flex flex-col items-start'>
            <ToggleGroup type="single" orientation='vertical' value={toggleGroupValue} defaultValue='1'
                onValueChange={(newValue) => {
                    if (newValue) {
                        dispatch(setToggleGroupValue(newValue))

                        // Reset the interval when user manually selects a feature
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current)
                        }

                        intervalRef.current = setInterval(() => {
                            dispatch(
                                setToggleGroupValue(toggleGroupValue === "6" ? "1" : String(Number(newValue) + 1),
                                ),
                            )
                        }, 5000)
                    }
                }}
                className='h-full flex flex-col items-start gap-y-2'>
                {howItWorks?.map(({ value, description, number, title }, idx) => (
                    <HowItWorksStep key={idx} description={description} number={number} title={title} value={value} toggleGroupValue={toggleGroupValue} />
                ))}
            </ToggleGroup>
        </div>
    )
}

export default HowItWorksWidget