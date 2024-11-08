'use client'
import { updateObject } from "@/server/actions/object/actions"
import { DBObject } from "@/server/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SubmitButton } from "../../components/button/SubmitButton"

export default function UpdateObjectForm({ obj }: { obj: DBObject }) {
    const updateObjectWithId = updateObject.bind(null, obj.id)
    return <form className="mt-3" action={updateObjectWithId}>
        <div className="flex-col grid gap-4">
            {/* object name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Object Name</Label>
                <Input type="text" name="name" id="name" placeholder="obj1" defaultValue={obj.name} />
            </div>

            {/* fields */}
            {/* workflow */}
            {/* object options */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="options">Options</Label>
                <Textarea
                    className="h-[250px]"
                    name="options"
                    id="options"
                    placeholder="{}"
                    defaultValue={`${JSON.stringify(obj.options)}`}
                >
                </Textarea>
            </div>
        </div>
        <div className="flex mt-3">
            <SubmitButton label="Update" loading="Updating..." />
        </div>
    </form>
}