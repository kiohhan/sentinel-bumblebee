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
import { useState } from "react"
import { capitalize } from "lodash"

const objectDefault = `{
    "prefix": "DOC",
    "display": "doc_name"
}`

const workflowDefault = `{
    "name": "field_workflow",
    "states": [
        { "name": "none", "is_active": true, "is_end": false },
        { "name": "open", "is_active": true, "is_end": false }
    ],
    "transitions": [
        { "name": "submit", "from_state": "none", "to_state": "open", "is_active": true, "is_submit": true }
    ]
}
`



export default function CreateObjectForm({ apps, defaultApp }: { apps: DBApp[], defaultApp?: string }) {

    const [objName, setObjName] = useState('')
    const [optionsText, setOptionsText] = useState(objectDefault)
    const [workflowText, setWorkflowText] = useState(workflowDefault)
    const handleNameChange = (name: string) => {
        setWorkflowText(`{
    "name": "${name}_workflow",
    "states": [
        { "name": "none", "is_active": true, "is_end": false },
        { "name": "open", "is_active": true, "is_end": false }
    ],
    "transitions": [
        { "name": "submit", "from_state": "none", "to_state": "open", "is_active": true, "is_submit": true }
    ]
}`)
        setOptionsText(`{
    "prefix": "${name.toUpperCase()}",
    "display": "${name}_name"
}`)
    }
    return <form className="mt-3" action={createObject}>
        <div className="flex-col grid gap-4">
            {/* object name */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Object Name</Label>
                <Input type="text" name="name" id="name" placeholder="obj1" value={objName} onChange={e => {handleNameChange(e.target.value); setObjName(e.target.value)}} />
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
                    defaultValue={objectDefault}
                    value={optionsText}
                    onChange={e => setOptionsText(e.target.value)}
                >
                </Textarea>
            </div>
            {/* workflow */}
            <div className="grid w-full max-w-screen-md items-center gap-1.5">
                <Label htmlFor="workflows">Worflow</Label>
                <Textarea
                    className="h-[250px]"
                    name="workflows"
                    id="workflows"
                    placeholder="{}"
                    defaultValue={workflowDefault}
                    value={workflowText}
                    onChange={e => setWorkflowText(e.target.value)}
                >
                </Textarea>
            </div>

        </div>
        <div className="flex mt-3">
            <SubmitButton label="Create" loading="Creating..." />
        </div>
    </form>
}
