import CreateFieldForm from "./forms/create-form"
import { fetchObject } from "@/app/lib/fetch/object"
import { SimpleBreadcrumb } from "@/app/ui/components/breadcrumb/SimpleBreadcrumb"
import { DBObject } from "@/app/lib/types"

export default async function EditObject({ id }: { id: string }) {
    const myObj = await fetchObject(id) as DBObject
    return <div className="p-3">
        <div>
            <SimpleBreadcrumb list={[
                { 'name': 'objects', 'link': '/object' },
                { 'name': `${myObj.name}`, 'link': `#` },
                { 'name': `fields`, 'link': `#` },
                { 'name': `create`, 'link': `#` },
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Create Field for {`${myObj.name}`}
        </h1>
        <CreateFieldForm obj={myObj} />
    </div>
}
