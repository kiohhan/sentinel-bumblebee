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
import { FieldInput } from "@/app/lib/types"

export default function FieldTable({ fields }: { fields: FieldInput[] }) {
    return <div>
        <Table className="hidden min-w-full text-gray-900 md:table">
            <TableHeader className="rounded-lg text-left text-sm font-normal">
                <TableRow>
                    <TableHead className="py-5 font-medium">Name</TableHead>
                    <TableHead className="py-5 font-medium">Type</TableHead>
                    <TableHead className="py-5 font-medium">Options</TableHead>
                    <TableHead className="py-5 font-medium">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
                {(fields && fields.length > 0 ? (
                    fields.map((field: any) => {
                        return (<TableRow className="w-full border-b py-3 text-sm last-of-type:border-none">
                            <TableCell className="whitespace-nowrap py-3">{field.name}</TableCell>
                            <TableCell className="whitespace-nowrap py-3">{field.type}</TableCell>
                            <TableCell className="whitespace-nowrap py-3">
                                <div className="flex">
                                    {field.options}
                                </div>
                            </TableCell>
                            <TableCell>
                                
                            </TableCell>
                        </TableRow>)
                    })
                ) : (<TableRow></TableRow>))}
            </TableBody>
        </Table>
    </div>
}