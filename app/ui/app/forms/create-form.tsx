'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitButton } from "../../components/button/SubmitButton"
import { createApp } from "@/server/actions/app/actions"

export default function CreateAppForm() {
    return <form className="mt-3" action={createApp}>
        <div className="flex-col grid gap-4">
            {/* app name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">App Name</Label>
                <Input type="text" name="name" id="name" placeholder="app1" />
            </div>

            {/* fields */}
            {/* workflow */}

        </div>
        <div className="flex mt-3">
            <SubmitButton label="Create" loading="Creating..." />
        </div>
    </form>
}
