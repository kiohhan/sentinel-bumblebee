'use client'
import { updateApp } from "@/server/actions/app/actions"
import { DBApp } from "@/server/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitButton } from "../../components/button/SubmitButton"

export default function UpdateAppForm({ app }: { app: DBApp }) {
    const updateAppWithId = updateApp.bind(null, app.id)
    return <form className="mt-3" action={updateAppWithId}>
        <div className="flex-col grid gap-4">
            {/* app name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">App Name</Label>
                <Input type="text" name="name" id="name" placeholder="app1" defaultValue={app.name} />
            </div>
        </div>
        <div className="flex mt-3">
            <SubmitButton label="Update" loading="Updating..." />
        </div>
    </form>
}