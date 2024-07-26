'use client'
import { addField } from "@/app/lib/actions/field/actions"
import { DBObject } from "@/app/lib/types"
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

export default function CreateFieldForm({ obj }: { obj: DBObject }) {
    const addFieldWithId = addField.bind(null, obj.id)
    return <form className="mt-3" action={addFieldWithId}>
        <div className="flex-col grid gap-4">
            {/* field name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Field Name</Label>
                <Input type="text" name="name" id="name" placeholder="field1" />
            </div>

            {/* field type */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="type">Field Type</Label>
                {/* <Input type="text" name="type" id="type" placeholder="field1" /> */}
                <Select name="type">
                    <SelectTrigger className="w-[180px]" id="type">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="number">Number</SelectItem>
                        <SelectItem value="text">text</SelectItem>
                        <SelectItem value="richtext">Rich Text</SelectItem>
                        <SelectItem value="single-ref">Ref</SelectItem>
                        <SelectItem value="multi-ref">Multi Ref</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="timestamp">Timestamp</SelectItem>
                        <SelectItem value="boolean">Boolean</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* field options */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="options">Options</Label>
                <Textarea name="options" id="options" placeholder="Type your message here." />
            </div>
        </div>
        <div className="flex mt-3">
            <SubmitButton label="Create" loading="Creating..." />
        </div>
    </form>
}