import { fetchApp, fetchAppJSON } from "@/server/fetch/app"
import { SimpleBreadcrumb } from "@/app/ui/components/breadcrumb/SimpleBreadcrumb"
import FieldTable from "@/app/ui/field/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DBApp, DBObject } from "@/server/types"
import { DeleteApp } from "./forms/delete-form"
import ObjectTable from "../object/table"
import { fetchObjects, fetchObjectsByApp } from "@/server/fetch/object"
import { CopyButton } from "../components/button/CopyButton"

export default async function ViewApp({ id }: { id: string }) {
    const myApp = await fetchApp(id) as DBApp
    const myObjeects = await fetchObjectsByApp(id) as DBObject[]
    const myJson = await fetchAppJSON(id)
    return <>
        <div>
            <SimpleBreadcrumb list={[
                { 'name': 'apps', 'link': '/app' },
                { 'name': `${myApp.name}`, 'link': `#` },
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {`${myApp.name}`}
        </h1>
        <div className="flex mt-3">
            <div className="grid gap-x-1 grid-cols-2">
                <div>
                    <Link href={`/app/${id}/edit`}>
                        <Button className="min-w-24 bg-blue-500 hover:bg-blue-400">Edit</Button>
                    </Link>
                </div>
                <div>
                    <DeleteApp id={id} />
                </div>
            </div>
        </div>

        <div className="mt-3 bg-slate-100 border-2">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Objects
            </h2>
            <div className="mb-3">
                <Button><Link href={`/app/${id}/object/create`}>Create Object</Link></Button>
            </div>
            <div className="bg-slate-200">
                <div>
                    {/* <FieldTable objId={myApp.id} fields={myApp.fields} /> */}
                    <ObjectTable objects={myObjeects} />
                </div>
            </div>
        </div>

        <div className="mt-3 bg-slate-100 border-2">
            <div className="flex flex-cols justify-between">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    JSON
                </h2>
                <div>
                    <CopyButton jsonText={JSON.stringify(myJson, null, 2)}/>
                </div>
            </div>

            <div className="bg-slate-200">
                <div>
                    <pre className="bg-white text-xs">{JSON.stringify(myJson, null, 2)}</pre>
                </div>

            </div>
        </div>
    </>
}