'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createOneNoConflict } from "../../db/insert"
import { updateOne } from '../../db/update';
import { deleteOne } from '../../db/delete';

const table = 'objects'

export async function createObject(formData: FormData){
    const obj = await createOneNoConflict(table, ['name', 'app'], [`${formData.get('name')}`, `${formData.get('app')}`])
    revalidatePath('/object')
    redirect('/object')
}

export async function updateObject(id: string, formData: FormData){
    const obj = await updateOne(table, ['name'], [`${formData.get('name')}`], id)
    revalidatePath(`/object`)
    redirect(`/object`)
}

export async function deleteObject(id: string){
    const obj = await deleteOne(table, id)
    revalidatePath(`/object`)
    redirect(`/object`)
}