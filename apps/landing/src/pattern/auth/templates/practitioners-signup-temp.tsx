"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { APP_ROUTES } from "@/lib/routes"
import { BrandLogo } from "@chainkeeping/ui"
import { useCreateSearchQuery } from "@/lib/hooks/useCreateSearchQuery"
import { show } from '@ebay/nice-modal-react'
import { NetworkConnectionErrorModal } from "@/pattern/common/organisms/network-connection-error-modal"
import { NETWORK_ERROR_MESSAGE } from "@/lib/constants"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"
import { PractitionerSignupFormData, defaultPractitionerFormData } from "@/pattern/schema/auth-schema"
import { LoginInfoForm } from "../organisms/login-info-form"
import PractitionersCompetenceTestNotificationWidget from "../organisms/practitioners-competence-test-notificatioin-widget"
import { useRegisterPractitionerMutation } from "@/redux/services/auth/register-practitioner.api-slice"
import { PractitionerBusinessInfoForm } from "../organisms/practitioner-business-info-form"
import { PractitionerContactInfoForm } from "../organisms/practitioner-contact-info-form"
import { useDispatch } from "react-redux"
import { storeRegisteredEmailAddress } from "@/redux/slices/auth.slice"

export const PractitionersSignupTemp = () => {
    const dispatch = useDispatch()
    const { createSearchParams } = useCreateSearchQuery();

    const { push } = useRouter();

    // Register Practitioner API mutation
    const [registerPractioner, { isLoading, isSuccess, isError, error }] = useRegisterPractitionerMutation()

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<PractitionerSignupFormData>(defaultPractitionerFormData)

    useEffect(() => {
        if (step) {
            createSearchParams({
                param: { name: "step", value: `${step}` },
            });
        }
    }, [step])


    const handleNext = (data: Partial<PractitionerSignupFormData>) => {
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

    const handleSubmit = async (data: Partial<PractitionerSignupFormData>) => {
        const { email, businessCategory, businessName, corporateEmail, corporateTin, country, password, firstname, lastname, phoneNumber, rcNumber, licenseNumber, state } = { ...formData, ...data }
        registerPractioner({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
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
                licenseNumber: licenseNumber,
                businessCategory: businessCategory
            },
            userType: "PRACTITIONER"
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
                push(`${APP_ROUTES.verifySignupEmail}?persona=practitioners`);
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
        <div className='w-fit flex flex-col items-start md:items-center gap-y-8 px-[18px] pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>
            {step === 1 && <LoginInfoForm onSubmit={handleNext} defaultValues={formData} />}
            {step === 2 && <PractitionersCompetenceTestNotificationWidget onSubmit={handleNext} onBack={handleBack} />}
            {step === 3 && <PractitionerBusinessInfoForm onSubmit={handleNext} onBack={handleBack} defaultValues={formData} step={1} totalSteps={2} />}
            {step === 4 && <PractitionerContactInfoForm onSubmit={handleSubmit} isLoading={isLoading} onBack={handleBack} defaultValues={formData} step={2} totalSteps={2} />}
        </div>
    )
}

