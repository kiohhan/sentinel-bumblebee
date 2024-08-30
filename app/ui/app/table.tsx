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
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fetchApps } from "@/server/fetch/app"
import { DeleteApp } from "./forms/delete-form"

export default async function AppTable() {
    const apps = await fetchApps()
    console.log(apps)
    return <div>
        <Table className="min-w-full text-gray-900 md:table">
            <TableHeader className="rounded-lg text-left text-sm font-normal">
                <TableRow>
                    {/* <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Id</th> */}
                    <TableHead className="py-5 font-medium">Name</TableHead>
                    <TableHead className="py-5 font-medium">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
                {(apps && apps.length > 0 ? (
                    apps.map(app => {
                        return (<TableRow className="w-full border-b py-3 text-sm last-of-type:border-none">
                            {/* <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{app.id}</TableCell> */}
                            <TableCell className="whitespace-nowrap py-3">
                                <Link className="underline text-blue-600" href={`/app/${app.id}`}>{app.name}</Link>
                            </TableCell>
                            <TableCell className="whitespace-nowrap py-3">
                                <div className="flex">
                                    <div className="grid gap-x-1 grid-cols-2">
                                        <div>
                                            <Link href={`/app/${app.id}/edit`}>
                                                <Button className="min-w-24 bg-blue-500 hover:bg-blue-400">Edit</Button>
                                            </Link>
                                        </div>
                                        <div>
                                            <DeleteApp id={app.id} />
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