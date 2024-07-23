'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createOneNoConflict } from "../../db/insert"
import { updateOne } from '../../db/update';

const table = 'objects'

export async function createObject(formData: FormData){
    const obj = await createOneNoConflict(table, ['name'], [`${formData.get('name')}`])
    revalidatePath('/object');
    redirect('/object')
}

export async function updateObject(id: string, formData: FormData){
    const obj = await updateOne(table, ['name'], [`${formData.get('name')}`], id)
    revalidatePath(`/object`);
    redirect(`/object`)
}