'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createOneNoConflict } from "../../db/insert"
import { updateOne } from '../../db/update';
import { deleteOne } from '../../db/delete';

const table = 'apps'

export async function createApp(formData: FormData){
    const obj = await createOneNoConflict(table, ['name'], [`${formData.get('name')}`])
    revalidatePath('/app')
    redirect('/app')
}

export async function updateApp(id: string, formData: FormData){
    const obj = await updateOne(table, ['name'], [`${formData.get('name')}`], id)
    revalidatePath(`/app`)
    redirect(`/app`)
}

export async function deleteApp(id: string){
    const obj = await deleteOne(table, id)
    revalidatePath(`/app`)
    redirect(`/app`)
}