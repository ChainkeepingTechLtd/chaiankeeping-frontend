import React, { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { Button, cn, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger, ScrollArea, ScrollBar } from '@chainkeeping/ui'
import { Countries, CountryProps, StateProps, States } from '@chainkeeping/utils'

interface LocationSelectorProps {
    disabled?: boolean
    onCountryChange?: (country: CountryProps | null) => void
    onStateChange?: (state: StateProps | null) => void
    className?: string
}

const LocationSelector = ({
    className,
    disabled,
    onCountryChange,
    onStateChange,
}: LocationSelectorProps) => {
    const [selectedCountry, setSelectedCountry] = useState<CountryProps | null>(
        null,
    )
    const [selectedState, setSelectedState] = useState<StateProps | null>(null)
    const [openCountryDropdown, setOpenCountryDropdown] = useState(false)
    const [openStateDropdown, setOpenStateDropdown] = useState(false)

    // Cast imported JSON data to their respective types
    const countriesData = Countries as CountryProps[]
    const statesData = States as StateProps[]

    // Filter states for selected country
    const availableStates = statesData.filter(
        (state) => state.country_id === selectedCountry?.id,
    )

    const handleCountrySelect = (country: CountryProps | null) => {
        setSelectedCountry(country)
        setSelectedState(null) // Reset state when country changes
        onCountryChange?.(country)
        onStateChange?.(null)
    }

    const handleStateSelect = (state: StateProps | null) => {
        setSelectedState(state)
        onStateChange?.(state)
    }

    return (
        <div className={cn("w-full flex flex-col gap-4 font-dmsans", className)}>
            {/* Country Selector */}
            <Popover open={openCountryDropdown} onOpenChange={setOpenCountryDropdown}>
                <PopoverTrigger asChild>
                    <Button
                        variant="primaryOutline"
                        role="combobox"
                        aria-expanded={openCountryDropdown}
                        disabled={disabled}
                        className="w-full h-12 justify-between !font-normal font-dmsans text-base text-foreground px-3 hover:ring-0 border-[hsla(213,27%,84%,1)] focus:bg-transparent hover:bg-transparent shadow-none"
                    >
                        {selectedCountry ? (
                            <div className="text-foreground flex items-center gap-2">
                                {/* <span>{selectedCountry.emoji}</span> */}
                                <span>{selectedCountry.name}</span>
                            </div>
                        ) : (
                            <span>Select Country...</span>
                        )}
                        <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="!w-full p-0 overflow-y-hidden">
                    <Command className='w-full'>
                        <CommandInput placeholder="Search country..." />
                        <CommandList className='overflow-y-hidden'>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                <ScrollArea className="h-[200px]">
                                    {countriesData.map((country) => (
                                        <CommandItem
                                            key={country.id}
                                            value={country.name}
                                            onSelect={() => {
                                                handleCountrySelect(country)
                                                setOpenCountryDropdown(false)
                                            }}
                                            className="flex cursor-pointer items-center justify-between text-sm"
                                        >
                                            <div className="flex items-center gap-2">
                                                {/* <span>{country.emoji}</span> */}
                                                <span>{country.name}</span>
                                            </div>
                                            <Check
                                                className={cn(
                                                    'h-4 w-4',
                                                    selectedCountry?.id === country.id
                                                        ? 'opacity-100'
                                                        : 'opacity-0',
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                    <ScrollBar orientation="vertical" />
                                </ScrollArea>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            {/* State Selector - Only shown if selected country has states */}
            {availableStates.length > 0 && (
                <div className="w-full flex flex-col gap-2">
                    <label>State</label>
                    <Popover open={openStateDropdown} onOpenChange={setOpenStateDropdown}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="primaryOutline"
                                role="combobox"
                                aria-expanded={openStateDropdown}
                                disabled={!selectedCountry}
                                className="w-full h-12 justify-between !font-normal font-dmsans text-base text-foreground px-3 hover:ring-0 border-[hsla(213,27%,84%,1)] focus:bg-transparent hover:bg-transparent shadow-none"
                            >
                                {selectedState ? (
                                    <span>{selectedState.name}</span>
                                ) : (
                                    <span>Select State...</span>
                                )}
                                <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="!w-full p-0 overflow-y-hidden">
                            <Command className='w-full'>
                                <CommandInput placeholder="Search state..." />
                                <CommandList className='w-full overflow-y-hidden'>
                                    <CommandEmpty>No state found.</CommandEmpty>
                                    <CommandGroup>
                                        <ScrollArea className="h-[200px]">
                                            {availableStates.map((state) => (
                                                <CommandItem
                                                    key={state.id}
                                                    value={state.name}
                                                    onSelect={() => {
                                                        handleStateSelect(state)
                                                        setOpenStateDropdown(false)
                                                    }}
                                                    className="flex cursor-pointer items-center justify-between text-sm"
                                                >
                                                    <span>{state.name}</span>
                                                    <Check
                                                        className={cn(
                                                            'h-4 w-4',
                                                            selectedState?.id === state.id
                                                                ? 'opacity-100'
                                                                : 'opacity-0',
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                            <ScrollBar orientation="vertical" />
                                        </ScrollArea>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
            )}
        </div>
    )
}

export default LocationSelector
