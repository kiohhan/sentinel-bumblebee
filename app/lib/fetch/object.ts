import { findManyRaw, findOneRaw, findManyByKey } from "../db/select";
import { DBObject, FieldInput } from "../types";

const table = 'objects'

export async function fetchObjects(){
    return await findManyRaw(table) as DBObject[]
}

export async function fetchObject(id: string) {
    return await findOneRaw(table, id) as DBObject
}

export async function fetchObjectFieldsJSON(id: string) {
    const obj = await fetchObject(id)
    const fields = obj.fields
    let newFields: FieldInput[] = []
    if (fields && fields.length && fields.length > 0) {
        fields.forEach(field => {
            let newField = field
            newField.options = JSON.parse(field.options)
            newFields.push(newField)
        })
    }
    return newFields
}

export async function fetchObjectsByApp(appId: string){
    return await findManyByKey(table, 'app', appId)
}