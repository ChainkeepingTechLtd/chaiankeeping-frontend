"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { APP_ROUTES } from "@/lib/routes"
import { BrandLogo } from "@chainkeeping/ui"
import { CompanyContactInfoForm } from "../organisms/company-contact-info-form"
import { useCreateSearchQuery } from "@/lib/hooks/useCreateSearchQuery"
import { show } from '@ebay/nice-modal-react'
import { NetworkConnectionErrorModal } from "@/pattern/common/organisms/network-connection-error-modal"
import { NETWORK_ERROR_MESSAGE } from "@/lib/constants"
import { useRegisterCompanyMutation } from "@/redux/services/auth/register-company.api-slice"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"
import { CompanySignupFormData, defaultCompanyFormData } from "@/pattern/schema/auth-schema"
import { LoginInfoForm } from "../organisms/login-info-form"
import { BusinessInfoForm } from "../organisms/business-info-form"
import { useDispatch } from "react-redux"
import { storeRegisteredEmailAddress } from "@/redux/slices/auth.slice"

export const CompanySignupTemp = () => {
    const dispatch = useDispatch()
    const { push } = useRouter();

    const { createSearchParams } = useCreateSearchQuery();

    // Register Company API mutation
    const [registerCompany, { isLoading, isSuccess, isError, error }] = useRegisterCompanyMutation()

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<CompanySignupFormData>(defaultCompanyFormData)

    useEffect(() => {
        if (step) {
            createSearchParams({
                param: { name: "step", value: `${step}` },
            });
        }
    }, [step])


    const handleNext = (data: Partial<CompanySignupFormData>) => {
        setFormData((prev) => ({ ...prev, ...data }))
        setStep((prev) => prev + 1)
        createSearchParams({
            param: { name: "step", value: `${step}` },
        });
    }

    const handleBack = () => {
        setStep((prev) => prev - 1)
        createSearchParams({
            param: { name: "step", value: `${step}` },
        });
    }

    const handleSubmit = async (data: Partial<CompanySignupFormData>) => {
        const { email, businessCategory, businessName, corporateEmail, corporateTin, country, password, phoneNumber, rcNumber, state } = { ...formData, ...data }
        registerCompany({
            email: email,
            password: password,
            phonenumber: `+${phoneNumber}`,
            country: country,
            state: state,
            kyc: {
                tin: corporateTin
            },
            profile: {
                corporateEmail: corporateEmail,
                businessName: businessName,
                rcNumber: rcNumber,
                businessCategory: businessCategory
            },
            userType: "COMPANY"
        })
            .unwrap()
            .then(res => {
                toast.success('Successful Registration', {
                    description:
                        'Kindly verify registered email',
                    duration: 5000,
                    cancel: {
                        onClick: () => { },
                        label: 'Close',
                    },
                })
                dispatch(storeRegisteredEmailAddress(res?.data?.email))
                push(`${APP_ROUTES.verifySignupEmail}?persona=company`);
            })
            .catch(error => {
                if (
                    'error' in error &&
                    error?.error === 'TypeError: Failed to fetch'
                ) {
                    show(NetworkConnectionErrorModal, {
                        message: `${NETWORK_ERROR_MESSAGE}`,
                    })
                } else {
                    // display error message
                    toast.error('Unexpected error', {
                        description: `${error?.data?.responseMessage ??
                            'We encountered an error while trying to Register your company'
                            }`,
                        duration: 8000,
                        cancel: {
                            onClick: () => { },
                            label: 'Close',
                        },
                    })
                }
            })
    }

    return (
        <div className='w-fit flex flex-col items-center gap-y-8 px-[18px] pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>
            {step === 1 && <LoginInfoForm onSubmit={handleNext} defaultValues={formData} />}
            {step === 2 && <BusinessInfoForm onSubmit={handleNext} onBack={handleBack} defaultValues={formData} step={2} totalSteps={3} />}
            {step === 3 && <CompanyContactInfoForm onSubmit={handleSubmit} isLoading={isLoading} onBack={handleBack} defaultValues={formData} step={3} totalSteps={3} />}
        </div>
    )
}