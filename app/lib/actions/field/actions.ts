'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const table = 'objects'

export async function addField(formData: FormData){
    const name = formData.get('name')
    const type = formData.get('type')
    const options = formData.get('options')
    console.log(name)
    console.log(type)
    console.log(options)
}