import { Suspense } from "react"
import { SkeletonTable } from "@/app/ui/components/skeleton/table"
import CreateField from "@/app/ui/field/create"

export default async function Page({ params }: { params: { id: string } }) {
    return <div className="p-3">
        <Suspense key='editform' fallback={<SkeletonTable />}>
            <CreateField id={params.id} />
        </Suspense>
    </div>
}
