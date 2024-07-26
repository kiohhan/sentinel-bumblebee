import Link from "next/link"
import { Button } from "@/components/ui/button"
import AppTable from "../ui/app/table"
import { SimpleBreadcrumb } from "../ui/components/breadcrumb/SimpleBreadcrumb"
import { Suspense } from "react"
import { SkeletonTable } from "../ui/components/skeleton/table"

export default async function Page() {
    return <div className="p-3">
        <div>
            <SimpleBreadcrumb list={[
                { 'name': 'apps', 'link': '/app' }
            ]} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Apps
        </h1>
        <div className="mt-3">
            <Button><Link href='/app/create'>Create</Link></Button>
        </div>
        <div>
            <Suspense key='apps' fallback={<SkeletonTable />}>
                <AppTable />
            </Suspense>
        </div>
    </div>
}