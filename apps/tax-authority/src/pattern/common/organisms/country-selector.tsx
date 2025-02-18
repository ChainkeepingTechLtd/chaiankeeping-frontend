'use client'

import * as React from "react"
import { Check, ChevronDown } from 'lucide-react'
import { Button, cn, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Popover, PopoverContent, PopoverTrigger } from "@chainkeeping/ui"
import { US, NG, GB, CA, AU } from 'country-flag-icons/react/3x2'
import Image from "next/image"

interface Country {
    code: string
    name: string
    flag: React.ReactElement
}

const countries: Country[] = [
    { code: 'NG', name: 'Nigeria', flag: <NG title="Nigeria" /> },
    { code: 'US', name: 'United States', flag: <US title="United states" /> },
    { code: 'GB', name: 'United Kingdom', flag: <GB title="United Kingdom" /> },
    { code: 'CA', name: 'Canada', flag: <CA title="Canada" /> },
    { code: 'AU', name: 'Australia', flag: <AU title="Australia" /> },
    // Add more countries as needed
]

export function CountrySelect() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("NG")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    role="combobox"
                    aria-expanded={open}
                    className="w-fit flex justify-between gap-1 px-1"
                >
                    <Image src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${value}.svg`} width={20} height={11.36} alt={value} />
                    <div className="flex items-center gap-1">
                        {value ? (
                            <>
                                {countries.find((country) => country.code === value)?.flag}{" "}
                                {value}
                            </>
                        ) : (
                            "Select country"
                        )}
                        <ChevronDown className="h-4 w-fit shrink-0 opacity-50" />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup>
                        {countries.map((country) => (
                            <CommandItem
                                key={country.code}
                                value={country.code}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === country.code ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {country.flag} {country.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

