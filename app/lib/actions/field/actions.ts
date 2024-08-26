'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { findOneRaw } from '../../db/select';
import { updateOne } from '../../db/update';
import { DBObject, FieldInput } from '../../types';

const table = 'objects'

export async function addField(objId: string, formData: FormData) {
    const myObj = await findOneRaw(table, objId) as DBObject
    const fields = myObj.fields
    const name = formData.get('name')
    const slug = formData.get('slug')
    const type = formData.get('type')
    const options = formData.get('options')
    const optionsFormmatted = JSON.stringify(JSON.parse(options as string))
    console.log(name)
    console.log(slug)
    console.log(type)
    console.log(optionsFormmatted)
    console.log(fields)
    let newFields : FieldInput[] = []
    if (fields !== null) {
        newFields = myObj.fields
    } 
    newFields.push({
        name: name,
        slug: slug,
        type: type,
        options: optionsFormmatted
    } as FieldInput)
    const updateObj = await updateOne(table, ['fields'], [JSON.stringify(newFields)], objId)
    revalidatePath(`/object/${objId}`)
    redirect(`/object/${objId}`)
}

export async function deleteField(objId: string, fieldName: string) {
    const myObj = await findOneRaw(table, objId) as DBObject
    const fields = myObj.fields
    let newFields : FieldInput[] = []
    for (let i=0; i<fields.length; i++){
        if (fieldName !== fields[i].name) {
            newFields.push(fields[i])
        }
    }
    const deleteFieldObj = await updateOne(table, ['fields'], [JSON.stringify(newFields)], objId)
    revalidatePath(`/object/${objId}`)
    redirect(`/object/${objId}`)
}