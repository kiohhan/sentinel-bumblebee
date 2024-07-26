import { Suspense } from "react"
import { SkeletonTable } from "@/app/ui/components/skeleton/table"
import EditObject from "@/app/ui/object/edit";

export default async function Page({ params }: { params: { id: string } }) {
    return <div className="p-3">
        <Suspense key='editform' fallback={<SkeletonTable />}>
            <EditObject id={params.id} />
        </Suspense>
    </div>
}
