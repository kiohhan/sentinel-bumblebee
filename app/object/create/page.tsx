import { SimpleBreadcrumb } from "@/app/ui/breadcrumb/SimpleBreadcrumb"
import CreateObjectForm from "@/app/ui/object/create-form"

export default function Page() {
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
        <CreateObjectForm />
    </div>
}
