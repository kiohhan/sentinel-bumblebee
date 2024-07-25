import { fetchObject } from "@/app/lib/fetch/object"
import { SimpleBreadcrumb } from "@/app/ui/breadcrumb/SimpleBreadcrumb"
import FieldTable from "@/app/ui/object/fields"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {
    const myObj = await fetchObject(params.id)
    const fieldsJSON = myObj.fields
    return <div className="p-3">
        <div>
            <SimpleBreadcrumb list={[
                { 'name': 'objects', 'link': '/object' },
                { 'name': `${myObj.name}`, 'link': `#` },
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {`${myObj.name}`}
        </h1>
        <div className="mt-3 bg-slate-100">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Fields
            </h2>
            <div className="mt-3">
                <Button><Link href='/object/create'>Add Field</Link></Button>
            </div>
            <div className="bg-slate-200">
                <FieldTable fieldsJSON={fieldsJSON} />
            </div>
        </div>
    </div>
}
