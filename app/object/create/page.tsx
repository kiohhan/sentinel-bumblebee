import { createObject } from "@/app/lib/actions/object/actions"
import CreateObjectForm from "@/app/ui/object/create-form"
export default function Page() {
    return <div className="mx-auto max-w-2xl">
        <div>Object Form</div>
        <CreateObjectForm />
    </div>
}