import { fetchObject } from "@/app/lib/fetch/object"
import { SimpleBreadcrumb } from "@/app/ui/breadcrumb/SimpleBreadcrumb"
import FieldTable from "@/app/ui/object/fields"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DBObject } from "@/app/lib/types"
import { DeleteObject } from "./forms/delete-form"

export default async function ViewObject({ id }: { id: string }) {
    const myObj = await fetchObject(id) as DBObject
    return <>
        <div>
            <SimpleBreadcrumb list={[
                { 'name': 'objects', 'link': '/object' },
                { 'name': `${myObj.name}`, 'link': `#` },
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {`${myObj.name}`}
        </h1>
        <div className="flex mt-3">
            <div className="grid gap-x-1 grid-cols-2">
                <div>
                    <Link href={`/object/${id}/edit`}>
                        <Button className="min-w-24 bg-blue-500 hover:bg-blue-400">Edit</Button>
                    </Link>
                </div>
                <div>
                    <DeleteObject id={id} />
                </div>
            </div>
        </div>

        <div className="mt-3 bg-slate-100">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Fields
            </h2>
            <div className="mt-3">
                <Button><Link href='/object/create'>Add Field</Link></Button>
            </div>
            <div className="bg-slate-200">
                <div>
                    <FieldTable fieldsJSON={myObj.fields} />
                </div>
            </div>
        </div>
    </>
}