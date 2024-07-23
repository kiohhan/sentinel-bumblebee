import { fetchObject } from "@/app/lib/fetch/object"
import FieldTable from "@/app/ui/object/fields"

export default async function Page({ params }: { params: { id: string } }) {
    const myObj = await fetchObject(params.id)
    const fieldsJSON = myObj.fields
    return <div className="mx-auto max-w-2xl">
        <div>name: {`${myObj.name}`}</div>
        <div>fields:</div>
        <FieldTable fieldsJSON={fieldsJSON} />
        <div><button>Add Field</button></div>
    </div>
}
