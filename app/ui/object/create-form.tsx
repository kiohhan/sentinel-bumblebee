import { createObject } from "@/app/lib/actions/object/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreateObjectForm() {
    return <form className="mt-3" action={createObject}>
        <div className="flex-col grid gap-4">
            {/* object name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Object Name</Label>
                <Input type="text" name="name" id="name" placeholder="obj1" />
            </div>

            {/* fields */}
            {/* workflow */}

        </div>
        <div className="flex mt-3">
            <Button type="submit">Create Object</Button>
        </div>
    </form>
}