import UpdateObjectForm from "@/app/ui/object/forms/update-form"
import { fetchObject } from "@/app/lib/fetch/object"
import { SimpleBreadcrumb } from "@/app/ui/breadcrumb/SimpleBreadcrumb"
import { DBObject } from "@/app/lib/types"

export default async function EditObject({ id }: { id: string }) {
    const myObj = await fetchObject(id) as DBObject
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
        <UpdateObjectForm obj={myObj} />
    </div>
}
