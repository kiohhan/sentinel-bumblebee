import Link from "next/link"
import { Button } from "@/components/ui/button"
import ObjectTable from "../ui/object/table"
import { SimpleBreadcrumb } from "../ui/breadcrumb/SimpleBreadcrumb"

export default async function Page() {
    return <div className="p-3">
        <div>
            <SimpleBreadcrumb list={[
                {'name': 'objects', 'link': '/object'}
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Objects
        </h1>
        <div className="mt-3">
            <Button><Link href='/object/create'>Create</Link></Button>
        </div>

        <ObjectTable />
    </div>
}