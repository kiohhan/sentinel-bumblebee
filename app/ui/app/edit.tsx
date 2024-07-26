import UpdateAppForm from "./forms/update-form"
import { fetchApp } from "@/app/lib/fetch/app"
import { SimpleBreadcrumb } from "@/app/ui/components/breadcrumb/SimpleBreadcrumb"
import { DBApp } from "@/app/lib/types"

export default async function EditApp({ id }: { id: string }) {
    const myApp = await fetchApp(id) as DBApp
    return <div className="p-3">
        <div>
            <SimpleBreadcrumb list={[
                { 'name': 'apps', 'link': '/app' },
                { 'name': `${myApp.name}`, 'link': `#` },
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {`${myApp.name}`}
        </h1>
        <UpdateAppForm app={myApp} />
    </div>
}
