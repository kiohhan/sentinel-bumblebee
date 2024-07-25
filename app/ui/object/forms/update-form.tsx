'use client'
import { updateObject } from "@/app/lib/actions/object/actions"
import { DBObject } from "@/app/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitButton } from "../../button/SubmitButton"

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

        </div>
        <div className="flex mt-3">
            <SubmitButton label="Update" loading="Updating..." />
        </div>
    </form>
}