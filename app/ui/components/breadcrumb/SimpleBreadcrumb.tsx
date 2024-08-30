import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { BreadcrumbType } from "@/server/types"

export function SimpleBreadcrumb({ list }: { list: BreadcrumbType[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {
          list.map(li => {
            return <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`${li.link}`}>{li.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          })
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}
