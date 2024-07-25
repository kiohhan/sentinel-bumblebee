import UpdateObjectForm from "@/app/ui/object/update-form"
import { fetchObject } from "@/app/lib/fetch/object"
import { SimpleBreadcrumb } from "@/app/ui/breadcrumb/SimpleBreadcrumb"

export default async function Page({ params }: { params: { id: string } }) {
    const myObj = await fetchObject(params.id)
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
