"use client";
import React from "react";
import { create, useModal } from "@ebay/nice-modal-react";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "@chainkeeping/ui";

interface IProps {
    message: string;
}

export const NetworkConnectionErrorModal = create(({ message }: IProps) => {
    const { resolve, remove, visible } = useModal();

    const handleCloseModal = () => {
        resolve({ resolved: true });
        remove();
    };

    return (
        <Dialog open={visible} onOpenChange={handleCloseModal}>
            <DialogContent className="bg-accent w-fit h-fit p-0 outline-none border-0 shadow-none">
                <DialogHeader className="p-0">
                    <DialogTitle className="sr-only p-0">Network Error</DialogTitle>
                    <DialogDescription className="sr-only p-0">
                        A network error occurred while processing your request.
                        Please check your connection and try again.
                    </DialogDescription>

                </DialogHeader>
                <Card className="bg-inherit w-[400px] min-h-fit h-fit p-6 pt-0 !border-t-0 !shadow-none !outline-0">
                    {/* Header */}
                    <CardHeader className="w-full flex flex-col items-start gap-y-5">
                        {/* <DeleteAccountHeaderIcon /> */}
                        <CardTitle className="text-[1.125rem] text-destructive font-semibold">
                            Network Error
                        </CardTitle>
                    </CardHeader>

                    {/* Content */}
                    <CardContent className="space-y-[16px] mb-[8px]">
                        <p className="text-base font-medium text-foreground">
                            {message}
                        </p>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="w-full flex items-center justify-between gap-3">
                        <Button size="sm" variant="destructive" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </CardFooter>
                </Card>
            </DialogContent>
        </Dialog>
    );
});
