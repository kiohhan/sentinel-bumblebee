'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod'
import { findOneRaw } from '../../db/select';
import { updateOne } from '../../db/update';
import { DBObject, FieldInput } from '../../types';
import { json } from '../../util/json';

const table = 'objects'

export interface CreateFieldError {
    errors?: {
        name?: string[];
        slug?: string[];
        type?: string[];
        options?: string[];
    }
    success: boolean;
}

const type_list = [
    "number",
    "text",
    "richtext",
    "singlerel",
    "multirel",
    "date",
    "timestamp",
    "boolean",
    "user"
] as const

const fieldSchema = z.object({
    name: z.string().min(3, "Name must be atleast 3 characters"),
    slug: z.string().min(3, "Slug must be atleast 3 characters"),
    type: z.enum(type_list, {
        errorMap: (issue, ctx) => {
            return { message: `${JSON.stringify(issue)} Invalid Type` }
        }
    }),
    options: z.string()
        .transform((str, ctx): z.infer<ReturnType<typeof json>> => {
            try {
                return JSON.parse(str)
            } catch (e) {
                ctx.addIssue({ code: 'custom', message: 'Invalid JSON' })
                return z.NEVER
            }
        })
})

export async function addFieldFromForm(objId: string, data: CreateFieldError, formData: FormData): Promise<CreateFieldError> {
    const name = formData.get('name')
    const slug = formData.get('slug')
    const type = formData.get('type')
    const options = formData.get('options')
    const formValidate = fieldSchema.safeParse({
        name: name,
        slug: slug,
        type: type,
        options: options
    })
    if (formValidate.error) {
        console.log(formValidate.error.flatten().fieldErrors)
        return {
            success: false,
            errors: formValidate.error?.flatten().fieldErrors
        }
    }
    const optionsFormmatted = JSON.stringify(JSON.parse(options as string))
    await addField(objId, {
        name: name,
        slug: slug,
        type: type,
        options, optionsFormmatted
    } as FieldInput)
    revalidatePath(`/object/${objId}`)
    redirect(`/object/${objId}`)
}

export async function addField(objId: string, fieldData: FieldInput) {
    const myObj = await findOneRaw(table, objId) as DBObject
    const fields = myObj.fields
    let newFields: FieldInput[] = []
    if (fields !== null) {
        newFields = myObj.fields
    }
    newFields.push({
        name: fieldData.name,
        slug: fieldData.slug,
        type: fieldData.type,
        options: fieldData.options
    } as FieldInput)
    const updateObj = await updateOne(table, ['fields'], [JSON.stringify(newFields)], objId)
}

export async function deleteField(objId: string, fieldName: string) {
    const myObj = await findOneRaw(table, objId) as DBObject
    const fields = myObj.fields
    let newFields: FieldInput[] = []
    for (let i = 0; i < fields.length; i++) {
        if (fieldName !== fields[i].name) {
            newFields.push(fields[i])
        }
    }
    const deleteFieldObj = await updateOne(table, ['fields'], [JSON.stringify(newFields)], objId)
    revalidatePath(`/object/${objId}`)
    redirect(`/object/${objId}`)
}