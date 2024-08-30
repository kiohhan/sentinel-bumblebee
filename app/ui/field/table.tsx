import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FieldInput } from "@/server/types"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DeleteField } from "./forms/delete-form"

export default function FieldTable({ objId, fields }: { objId: string, fields: FieldInput[] }) {
    return <div>
        <Table className="hidden min-w-full text-gray-900 md:table">
            <TableHeader className="rounded-lg text-left text-sm font-normal">
                <TableRow>
                    <TableHead className="py-5 font-medium">Name</TableHead>
                    <TableHead className="py-5 font-medium">Slug</TableHead>
                    <TableHead className="py-5 font-medium">Type</TableHead>
                    <TableHead className="py-5 font-medium">Options</TableHead>
                    <TableHead className="py-5 font-medium">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
                {(fields && fields.length > 0 ? (
                    fields.map((field: FieldInput) => {
                        return (<TableRow className="w-full border-b py-3 text-sm last-of-type:border-none">
                            <TableCell className="whitespace-nowrap py-3">{field.name}</TableCell>
                            <TableCell className="whitespace-nowrap py-3">{field.slug}</TableCell>
                            <TableCell className="whitespace-nowrap py-3">{field.type}</TableCell>
                            <TableCell className="whitespace-nowrap py-3">
                                <div className="flex">
                                    {field.options}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex">
                                    <div className="grid gap-x-1 grid-cols-2">
                                        <div>
                                            <DeleteField id={objId} fieldName={field.name} />
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>)
                    })
                ) : (<TableRow></TableRow>))}
            </TableBody>
        </Table>
    </div>
}