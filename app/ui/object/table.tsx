import { fetchObjects } from "@/app/lib/fetch/object"
import { DeleteObject } from "./delete-form"
import Link from "next/link"

export default async function ObjectTable() {
    const objects = await fetchObjects()
    console.log(objects)
    const test = ''
    return <div>
        <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Id</th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Name</th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {(objects && objects.length > 0 ? (
                    objects.map(obj => {
                        return (<tr className="w-full border-b py-3 text-sm last-of-type:border-none">
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">{obj.id}</td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">{obj.name}</td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <Link href={`/object/${obj.id}/edit`}><button>Edit</button></Link>
                                <DeleteObject id={obj.id} />
                            </td>
                        </tr>)
                    })
                ) : (<tr></tr>))}
            </tbody>
        </table>
    </div>
}