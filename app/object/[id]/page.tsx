import { SkeletonTable } from "@/app/ui/skeleton/table"
import { Suspense } from "react"
import ViewObject from "@/app/ui/object/view"

export default async function Page({ params }: { params: { id: string } }) {
    return <div className="p-3">
        <Suspense key='fields' fallback={<SkeletonTable />}>
            <ViewObject id={params.id} />
        </Suspense>
    </div>
}
