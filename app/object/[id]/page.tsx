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
        <div className="mt-3">
            <Button><Link href='/object/create'>Add Field</Link></Button>
        </div>
        <FieldTable fieldsJSON={fieldsJSON} />
    </div>
}
