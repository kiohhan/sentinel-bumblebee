'use client'
import { createObject } from "@/server/actions/object/actions"
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
import { DBApp } from "@/server/types"

export default function CreateObjectForm({ apps, defaultApp }: { apps: DBApp[], defaultApp?: string }) {
    return <form className="mt-3" action={createObject}>
        <div className="flex-col grid gap-4">
            {/* object name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Object Name</Label>
                <Input type="text" name="name" id="name" placeholder="obj1" />
            </div>

            {/* app */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="app">App</Label>
                <Select name="app" defaultValue={defaultApp}>
                    <SelectTrigger className="w-[180px]" id="app">
                        <SelectValue placeholder="Select App" />
                    </SelectTrigger>
                    <SelectContent>
                        {apps.map(app => {
                            return <SelectItem key={`${app.id}`} value={`${app.id}`}>
                                {`${app.name}`}
                            </SelectItem>
                        })}
                    </SelectContent>
                </Select>
            </div>


            {/* object options */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="options">Options</Label>
                <Textarea
                    className="h-[250px]"
                    name="options"
                    id="options"
                    placeholder="{}"
                    defaultValue={`{
    "prefix": "DOC",
    "display": "doc_name"
}`}
                >
                </Textarea>
            </div>
            {/* workflow */}

        </div>
        <div className="flex mt-3">
            <SubmitButton label="Create" loading="Creating..." />
        </div>
    </form>
}
