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
import { defaultIndividualFormData, IndividualSignupFormData } from "@/pattern/schema/auth-schema"
import { LoginInfoForm } from "../organisms/login-info-form"
import { IndividualContactInfoForm } from "../organisms/individual-contact-info-form"
import { useRegisterIndividualMutation } from "@/redux/services/auth/register-individual.api-slice"
import { storeRegisteredEmailAddress } from "@/redux/slices/auth.slice"
import { useDispatch } from "react-redux"

export const IndividualSignupTemp = () => {
    const dispatch = useDispatch()
    const { createSearchParams } = useCreateSearchQuery();

    const { push } = useRouter();

    // Register Individual API mutation
    const [registerIndividual, { isLoading, isSuccess, isError, error }] = useRegisterIndividualMutation()

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<IndividualSignupFormData>(defaultIndividualFormData)

    useEffect(() => {
        if (step) {
            createSearchParams({
                param: { name: "step", value: `${step}` },
            });
        }
    }, [step])


    const handleNext = (data: Partial<IndividualSignupFormData>) => {
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

    const handleSubmit = async (data: Partial<IndividualSignupFormData>) => {
        const { email, firstname, lastname, country, password, phoneNumber, state } = { ...formData, ...data }
        registerIndividual({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            phonenumber: phoneNumber,
            country: country,
            state: state,
            userType: "INDIVIDUAL"
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
                push(`${APP_ROUTES.verifySignupEmail}?persona=personal`);
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
                            'We encountered an error while trying to Register you'
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
            {step === 2 && <IndividualContactInfoForm onSubmit={handleSubmit} isLoading={isLoading} onBack={handleBack} defaultValues={formData} />}
        </div>
    )
}

