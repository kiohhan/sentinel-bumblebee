'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createOneNoConflict, createOneJunction } from "../../db/insert"
import { updateOne } from '../../db/update';
import { deleteOne } from '../../db/delete';
import { addField } from '../field/actions';
import { FieldInput } from '../../types';

const table = 'objects'

export async function createObject(formData: FormData) {
    try {
        const options = formData.get('options')
        const optionsFormmatted = JSON.stringify(JSON.parse(options as string))
        const workflows = formData.get('workflows')
        console.log(workflows)
        const workflowsFormmatted = JSON.stringify(JSON.parse(workflows as string))
    
        const obj = await createOneJunction(
            table,
            ['name', 'app', 'options', 'workflows'],
            [`${formData.get('name')}`, `${formData.get('app')}`, optionsFormmatted, workflowsFormmatted]
        )
        const objId = obj.rows[0].id
        await addField(objId, {
            name: "name",
            slug: "name",
            type: "text",
            options: JSON.stringify({
                "unique": true,
                "emptyok": false
            })
        } as FieldInput)
        revalidatePath(`/object/${objId}`)
        redirect(`/object/${objId}`)
    } catch (e) {
        console.log(e)
    }

}

export async function updateObject(id: string, formData: FormData) {
    try {
        const options = formData.get('options')
        const optionsFormmatted = JSON.stringify(JSON.parse(options as string))
        const workflows = formData.get('workflows')
        const workflowsFormmatted = JSON.stringify(JSON.parse(workflows as string))
        const obj = await updateOne(table, ['name', 'options', 'workflows'], [`${formData.get('name')}`, optionsFormmatted, workflowsFormmatted], id)
        revalidatePath(`/object/${id}`)
        redirect(`/object/${id}`)
    } catch (e) {
        console.log(e)
    }

}

export async function deleteObject(id: string) {
    const obj = await deleteOne(table, id)
    revalidatePath(`/object`)
    redirect(`/object`)
}