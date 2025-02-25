"use client"

import { useState } from "react"
import { create, useModal } from "@ebay/nice-modal-react";
import { Button, Checkbox, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@chainkeeping/ui"

export const CreatePurchaseInvoiceModal = create(() => {
    const [vendor, setVendor] = useState("")
    const [includeTax, setIncludeTax] = useState(false)
    const [includeDiscount, setIncludeDiscount] = useState(false)

    const { resolve, remove, visible } = useModal();

    const handleCloseModal = () => {
        resolve({ resolved: true });
        remove();
    };

    return (
        <Dialog open={visible} onOpenChange={handleCloseModal}>
            <DialogContent className="sm:max-w-[429px] pt-0 px-0">
                <DialogHeader className="bg-[hsla(204,33%,97%,1)] w-full h-[52px] flex flex-row justify-start items-center py-3 px-6 rounded-t-[10px]">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="font-dmsans font-bold text-base">New Purchase Invoice</DialogTitle>
                    </div>
                </DialogHeader>
                <div className="space-y-6 px-6">
                    <div className="space-y-2">
                        <label htmlFor="invoice-number" className="text-sm font-medium">
                            Invoice Number
                        </label>
                        <Input placeholder="INV#0000001" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="vendor" className="text-sm font-medium">
                            Vendor
                        </label>
                        <Select value={vendor} onValueChange={setVendor}>
                            <SelectTrigger id="vendor">
                                <SelectValue placeholder="-- Select --" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="vendor1">Vendor 1</SelectItem>
                                <SelectItem value="vendor2">Vendor 2</SelectItem>
                                <SelectItem value="vendor3">Vendor 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Invoice items</label>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="tax"
                                    checked={includeTax}
                                    onCheckedChange={(checked) => setIncludeTax(checked as boolean)}
                                />
                                <label
                                    htmlFor="tax"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Tax
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="discount"
                                    checked={includeDiscount}
                                    onCheckedChange={(checked) => setIncludeDiscount(checked as boolean)}
                                />
                                <label
                                    htmlFor="discount"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Discount
                                </label>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full bg-black text-white hover:bg-black/90">Continue to fill details</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
})

