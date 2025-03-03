"use client"

import { useEffect, useRef } from "react"
import { ToggleGroup } from "@chainkeeping/ui"
import type { AppDispatch, RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"

import FeaturesImage from "../molecules/features-image"
import FeaturesStep from "../molecules/features-steps"
import CryptoTaxComputationIcon from "../atoms/crypto-tax-computation-icon"
import ForAccountingPractitionersIcon from "../atoms/for-accounting-practitioners-icon"
import CryptoPayrollIcon from "../atoms/crypto-payroll-icon"
import CryptoPaymentsIcon from "../atoms/crypto-payments-icon"
import CryptoInvoicingIcon from "../atoms/crypto-invoicing-icon"
import CryptoFinancialReportingIcon from "../atoms/crypto-financial-reporting-icon"
import { setFeatureValue } from "@/redux/slices/features.slice"

const features = [
    {
        icon: <CryptoTaxComputationIcon />,
        value: "1",
        title: "Crypto tax computation",
        description: "Computation, filing, optimization and consultation",
    },
    {
        icon: <ForAccountingPractitionersIcon />,
        value: "2",
        title: "For accounting practitioners",
        description: "Enable your clients stay compliant with crypto tax regulations.",
    },
    {
        icon: <CryptoPayrollIcon />,
        value: "3",
        title: "Crypto payroll",
        description: "Employee records, PAYE, Pension figure, NHIS, NHF, Life insurance.",
    },
    {
        icon: <CryptoPaymentsIcon />,
        value: "4",
        title: "Crypto payments",
        description: "Pay vendors, Bills, Bulk and Single payments.",
    },
    {
        icon: <CryptoInvoicingIcon />,
        value: "5",
        title: "Crypto invoicing",
        description: "Bill customers with Sales invoice and record purchases",
    },
    {
        icon: <CryptoFinancialReportingIcon />,
        value: "6",
        title: "Crypto financial reporting",
        description: "Integration with accounting softwares for proper reporting, consulting.",
    },
]

const FeaturesWidget = () => {
    const dispatch: AppDispatch = useDispatch()
    const feature = useSelector((state: RootState) => state.features.feature) ?? '1'
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            dispatch(
                setFeatureValue(
                    feature === "6" ? "1" : String(Number(feature) + 1),
                ),
            )
        }, 5000)

        // Clean up the interval when component unmounts
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [dispatch, feature])

    return (
        <div className="w-full h-fit flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-y-6">
            <ToggleGroup
                type="single"
                orientation="vertical"
                value={feature}
                defaultValue='1'
                onValueChange={(newValue) => {
                    if (newValue) {
                        dispatch(setFeatureValue(newValue))

                        // Reset the interval when user manually selects a feature
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current)
                        }

                        intervalRef.current = setInterval(() => {
                            dispatch(
                                setFeatureValue(feature === "6" ? "1" : String(Number(newValue) + 1),
                                ),
                            )
                        }, 5000)
                    }
                }}
                className="h-full w-full lg:max-h-[456px] flex flex-col items-start gap-y-9"
            >
                {features?.map(({ value, description, icon, title }, idx) => (
                    <FeaturesStep
                        key={idx}
                        description={description}
                        icon={icon}
                        title={title}
                        value={value}
                        toggleGroupValue={feature}
                    />
                ))}
            </ToggleGroup>

            <FeaturesImage feature={feature} />
        </div>
    )
}

export default FeaturesWidget

