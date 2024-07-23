'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createOneNoConflict } from "../../db/insert"

export async function createObject(formData: FormData){
    const obj = await createOneNoConflict('objects', ['name'], [`${formData.get('name')}`])
    redirect('/object')
}