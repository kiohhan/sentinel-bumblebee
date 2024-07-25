import { fetchObject } from "@/app/lib/fetch/object"
import { SimpleBreadcrumb } from "@/app/ui/breadcrumb/SimpleBreadcrumb"
import FieldTable from "@/app/ui/object/fields"
import { SkeletonTable } from "@/app/ui/skeleton/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"
import ViewObject from "@/app/ui/object/view"

export default async function Page({ params }: { params: { id: string } }) {
    return <div className="p-3">
        <Suspense key='fields' fallback={<SkeletonTable />}>
            <ViewObject id={params.id} />
        </Suspense>
    </div>
}
