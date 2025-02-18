"use client";

import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'
import { z } from "zod";
import { APP_ROUTES } from '@/lib/routes'
import { BrandLogo, Card, CardContent, CardDescription, CardHeader, CardTitle, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Button, SubmitButton, Hidden } from '@chainkeeping/ui'
import { formatTextWithBoldMarkers } from '@/lib/utils/format-text'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { CREATE_PASSWORD_TRIGGER_TIME, NETWORK_ERROR_MESSAGE, REGISTERED_EMAIL_ADDRESS } from '@/lib/constants';
import { useVerifyEmailMutation } from '@/redux/services/auth/verify-email.api-slice';
import { VerifyEmailFormSchema } from '@/pattern/schema/auth-schema';
import { show } from '@ebay/nice-modal-react';
import { NetworkConnectionErrorModal } from '@/pattern/common/organisms/network-connection-error-modal';
import { toast } from 'sonner';
import { useResendVerificationEmailMutation } from '@/redux/services/auth/resend-verification-email.api-slice';
import { useCountdown } from '@/lib/hooks/useCountdown';

const VerifyEmailTemp = () => {
    const { push, back } = useRouter()

    // helper functions for starting and reseting trigger timer
    const [count, { start, reset }] = useCountdown({
        countStart: CREATE_PASSWORD_TRIGGER_TIME,
    });

    const searchParams = useSearchParams()
    const persona = searchParams.get('persona')

    const registeredEmailAddress = useSelector((state: RootState) => state.authState.registeredEmailAddress)

    // Verify Email API mutation
    const [verifyEmail, { isLoading, isSuccess, isError, error }] = useVerifyEmailMutation()

    // Resend Verify Email API mutation
    const [resendVerificationEmail, { isLoading: loadingResendEmail, isSuccess: successSendingEmail, isError: errorResendingEmail }] = useResendVerificationEmailMutation()

    const defaultValues = {
        token: "",
    }

    const form = useForm<z.infer<typeof VerifyEmailFormSchema>>({
        resolver: zodResolver(VerifyEmailFormSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: defaultValues
    })

    const {
        handleSubmit,
        formState: { errors, isDirty },
    } = form

    const onSubmit = ({ token }: z.infer<typeof VerifyEmailFormSchema>) => {
        verifyEmail({
            email: registeredEmailAddress ?? "",
            token: token
        })
            .unwrap()
            .then(res => {
                localStorage.removeItem(REGISTERED_EMAIL_ADDRESS)
                push(`${APP_ROUTES.signupEmailVerified}?persona=${persona}`)
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
                            "We ran into an issue while verifying your email address. Please try again or contact support for assistance."
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

    useEffect(() => {
        if (loadingResendEmail) {
            toast.loading("Resending Verification Email...", {
                description: "We are resending a verification code to your email",
                id: "sending-email",
            });
        } else if (errorResendingEmail || successSendingEmail) {
            toast.dismiss("sending-email");
        }
    }, [isLoading, isError, isSuccess]);

    useEffect(() => {
        start();
    }, [start]);

    const handleResendEmail = useCallback(() => {
        // reset timer
        reset();
        resendVerificationEmail({
            email: registeredEmailAddress ?? "",
        })
            .unwrap()
            .then(res => {
                toast.success('Unexpected error', {
                    description: `${res?.responseMessage ??
                        "A verification code has been resent to your email, kindly check your email"
                        }`,
                    duration: 8000,
                    cancel: {
                        onClick: () => { },
                        label: 'Ok',
                    },
                })
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
                            "We encountered an issue while resending the verification code. Please try again or reach out to support for assistance."
                            }`,
                        duration: 8000,
                        cancel: {
                            onClick: () => { },
                            label: 'Close',
                        },
                    })
                }
            })
        start();
    }, [push, reset, resendVerificationEmail, start, registeredEmailAddress]);

    return (
        <div className='w-full max-w-[437px] flex flex-col items-start md:items-center gap-y-8 px-[18px] md:px-0 pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>

            <Card className="bg-white w-full max-w-[438px] h-fit flex flex-col gap-y-6 p-6 rounded-[8px] card-shadow border-none shadow-none">
                <CardHeader className="h-[91px] border-b space-y-[16px] pb-2">
                    <CardTitle className="flex items-center text-base font-bold font-sen">
                        <span className="mr-[8px] cursor-pointer" onClick={() => back()}>
                            <ChevronLeft className="text-secondary" />
                        </span>
                        Email Verification
                    </CardTitle>
                    <CardDescription className="text-sm text-[hsla(215,16%,47%,1)]">{formatTextWithBoldMarkers(`We've sent a verification code to your email address **${registeredEmailAddress}**, enter verification code here..`)}</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col justify-start items-start gap-y-4 font-dmsans">
                            {/* Token */}
                            <FormField
                                control={form.control}
                                name="token"
                                render={({ field }) => (
                                    <FormItem className="w-full grid gap-2">
                                        <FormLabel htmlFor="code">Verification Code</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="code"
                                                placeholder="enter verification code"
                                                type="text"
                                                autoComplete="code"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <SubmitButton
                                size="lg"
                                loading={isLoading}
                                disabled={isLoading}
                                className="w-full text-base font-medium"
                            >
                                Verify
                            </SubmitButton>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <div className='w-full flex flex-col items-start gap-y-2'>
                <p className='text-gray-400'>Didn't receive the email? Please check your spam folder or try to resend.</p>
                <Hidden isVisible={count > 0}>
                    <p className="text-base text-primary font-sen font-semibold">
                        Resend verification code in <span>{count}s</span>
                    </p>
                </Hidden>
                <Hidden isVisible={count === 0}>
                    <Button variant="link" onClick={() => handleResendEmail()} className="text-base">Resend verification code</Button>
                </Hidden>
            </div>
        </div>
    )
}

export default VerifyEmailTemp