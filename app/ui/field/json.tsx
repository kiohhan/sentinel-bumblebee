import { FieldInput } from "@/app/lib/types"
export default function JSONView({ objId, fields }: { objId: string, fields: FieldInput[] }) {
    let newFields : FieldInput[] = []
    fields.forEach(field => {
        let newField = field
        newField.options = JSON.parse(field.options)
        newFields.push(newField)
    })
    return <pre className="bg-white text-xs">{JSON.stringify(newFields, null, 2)}</pre>
}