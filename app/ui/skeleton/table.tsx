import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonTable() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  )
}