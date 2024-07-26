import CreateAppForm from "@/app/ui/app/forms/create-form"
import { SimpleBreadcrumb } from "@/app/ui/components/breadcrumb/SimpleBreadcrumb"

export default function Page() {
    return <div className="p-3">
        <div>
            <SimpleBreadcrumb list={[
                { 'name': 'apps', 'link': '/app' },
                { 'name': 'create', 'link': '#' },
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Create App
        </h1>
        <CreateAppForm />
    </div>
}
