'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createOneNoConflict } from "../../db/insert"
import { updateOne } from '../../db/update';
import { deleteOne } from '../../db/delete';
import { addField } from '../field/actions';
import { FieldInput } from '../../types';

const table = 'objects'

export async function createObject(formData: FormData){
    const obj = await createOneNoConflict(table, ['name', 'app'], [`${formData.get('name')}`, `${formData.get('app')}`])
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
}

export async function updateObject(id: string, formData: FormData){
    const obj = await updateOne(table, ['name'], [`${formData.get('name')}`], id)
    revalidatePath(`/object/${id}`)
    redirect(`/object/${id}`)
}

export async function deleteObject(id: string){
    const obj = await deleteOne(table, id)
    revalidatePath(`/object`)
    redirect(`/object`)
}