'use client'
import { addField } from "@/app/lib/actions/field/actions"
import { DBObject } from "@/app/lib/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitButton } from "../../components/button/SubmitButton"

export default function CreateFieldForm({ obj }: { obj: DBObject }) {
    return <form className="mt-3" action={addField}>
        <div className="flex-col grid gap-4">
            {/* field name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Field Name</Label>
                <Input type="text" name="name" id="name" placeholder="field1" />
            </div>

            {/* field type */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Field Type</Label>
                <Input type="text" name="type" id="type" placeholder="field1" />
            </div>

            {/* field options */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Field Type</Label>
                <Input type="text" name="options" id="options" placeholder="field1" />
            </div>

        </div>
        <div className="flex mt-3">
            <SubmitButton label="Create" loading="Creating..." />
        </div>
    </form>
}