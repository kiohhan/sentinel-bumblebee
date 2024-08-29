import { FieldInput } from "@/app/lib/types"
export default function JSONView({ objId, fields }: { objId: string, fields: FieldInput[] }) {
    console.log(fields)
    let newFields: FieldInput[] = []
    if (fields && fields.length && fields.length > 0) {
        fields.forEach(field => {
            let newField = field
            newField.options = JSON.parse(field.options)
            newFields.push(newField)
        })
    }

    return <pre className="bg-white text-xs">{JSON.stringify(newFields, null, 2)}</pre>
}