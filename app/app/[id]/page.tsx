import { SkeletonTable } from "@/app/ui/components/skeleton/table"
import { Suspense } from "react"
import ViewApp from "@/app/ui/app/view"

export default async function Page({ params }: { params: { id: string } }) {
    return <div className="p-3">
        <Suspense key='fields' fallback={<SkeletonTable />}>
            <ViewApp id={params.id} />
        </Suspense>
    </div>
}
