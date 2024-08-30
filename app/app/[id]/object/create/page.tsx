import { fetchApps } from "@/server/fetch/app"
import { DBApp } from "@/server/types"
import { SimpleBreadcrumb } from "@/app/ui/components/breadcrumb/SimpleBreadcrumb"
import CreateObjectForm from "@/app/ui/object/forms/create-form"

export default async function Page({ params }: { params: { id: string } }) {
    const apps : DBApp[] = await fetchApps()
    console.log(apps)
    return <div className="p-3">
        <div>
            <SimpleBreadcrumb list={[
                { 'name': 'objects', 'link': '/object' },
                { 'name': 'create', 'link': '/object/create' },
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Create Object
        </h1>
        <CreateObjectForm apps={apps} defaultApp={params.id} />
    </div>
}
