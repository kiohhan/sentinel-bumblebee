'use client'
import { addFieldFromForm } from "@/server/actions/field/actions"
import { DBObject } from "@/server/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SubmitButton } from "../../components/button/SubmitButton"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getOptionList } from "@/server/field/options"
import { FC, useState } from "react"
import kebabCase from "lodash/kebabCase"
import { useFormState } from "react-dom"

interface FormErrorProps {
    errors?: string[];
}

const FormError: FC<FormErrorProps> = ({ errors }) => {
    if (!errors?.length) return null
    return (
        <div className="p-2" key={errors[0]}>
            {errors.map((err) => {
                return (
                    <p className="text-tiny text-red-400 list-item">
                        {err}
                    </p>
                )
            })}
        </div>
    )
}

export default function CreateFieldForm({ obj }: { obj: DBObject }) {
    const [state, formAction] = useFormState(addFieldFromForm.bind(null, obj.id), { success: false })
    const [optionText, setOptionText] = useState('')
    const [slugText, setSlugText] = useState('')

    const handleSelectChange = (value: string) => {
        setOptionText(getOptionList(value))
    }

    const handleNameChange = (e: any) => {
        setSlugText(kebabCase(e.target.value).replace("-", "_"))
    }

    const handleSlugChange = (e: any) => {
        setSlugText(e.target.value)
    }

    return <form className="mt-3" action={formAction}>
        <div className="flex-col grid gap-4">
            {/* field name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Field Name</Label>
                <Input type="text" name="name" id="name" placeholder="My Field" onChange={handleNameChange} />
                <FormError errors={state.errors?.name} />
            </div>


            {/* field slug name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="slug">Slug</Label>
                <Input type="text" name="slug" id="slug" placeholder="my_field" value={slugText} onChange={handleSlugChange} />
                <FormError errors={state.errors?.slug} />
            </div>


            {/* field type */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="type">Field Type</Label>
                {/* <Input type="text" name="type" id="type" placeholder="field1" /> */}
                <Select name="type" onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-[180px]" id="type">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="number">Number</SelectItem>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="richtext">Rich Text</SelectItem>
                        <SelectItem value="singleref">Ref</SelectItem>
                        <SelectItem value="multiref">Multi Ref</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="timestamp">Timestamp</SelectItem>
                        <SelectItem value="boolean">Boolean</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                </Select>
                <FormError errors={state.errors?.type} />
            </div>

            {/* field options */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="options">Options</Label>
                <Textarea
                    className="h-[250px]"
                    name="options"
                    id="options"
                    placeholder="{}"
                    value={optionText}
                    onChange={e => setOptionText(e.target.value)}
                >
                </Textarea>
                <FormError errors={state.errors?.options} />
            </div>
        </div>
        <div className="flex mt-3">
            <SubmitButton label="Create" loading="Creating..." />
        </div>
    </form>
}