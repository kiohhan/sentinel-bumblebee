import { Suspense } from "react"
import { SkeletonTable } from "@/app/ui/components/skeleton/table"
import EditApp from "@/app/ui/app/edit";

export default async function Page({ params }: { params: { id: string } }) {
    return <div className="p-3">
        <Suspense key='editform' fallback={<SkeletonTable />}>
            <EditApp id={params.id} />
        </Suspense>
    </div>
}
