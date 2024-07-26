"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect } from "react"

function convertItems(items: any[], name: string) {
    let newItems: any[] = []
    items.forEach((item): any => {
        const newItem = {
            combokey: item[name].toLowerCase(),
            ...item
        }
        newItems.push(newItem)
    })
    return newItems
}

function getItemIdByComboKey(items: any[], combokey: string) {
    let returnId = 0
    items.forEach((item): any => {
        if (item.combokey === combokey) {
            returnId = item.id
        }
    })
    return returnId
}

function getComboKeyByItemId(items: any[], id: number): string {
    let returnComboKey = ""
    items.forEach((item): any => {
        if (item.id === id) {
            returnComboKey = item.combokey
        }
    })
    return returnComboKey
}

export function ComboBox({
    placeholder,
    items,
    name,
    fieldValue,
    setFieldValue
}: { placeholder: string, items: any[], name: string, fieldValue: any, setFieldValue: any }) {
    useEffect(() => {
        let myItems = convertItems(items, name)
        let myComboKey = getComboKeyByItemId(myItems, fieldValue)
        setValue(myComboKey)
    }, [items, fieldValue]) // eslint-disable-line react-hooks/exhaustive-deps

    let myItems = convertItems(items, name)
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? myItems.find((item) => item.combokey === value)?.[name]
                        : `${placeholder}`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search item..." />
                    <CommandEmpty>No item found.</CommandEmpty>
                    <CommandGroup>
                        {myItems.map((item) => (
                            <CommandItem
                                key={item.combokey}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setFieldValue(getItemIdByComboKey(myItems, currentValue))
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.combokey ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {item[name]}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
