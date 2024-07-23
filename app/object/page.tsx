import Link from "next/link"
import ObjectTable from "../ui/object/table"

export default async function Page() {
    return <div className="p-3">
        Objects
        <div>
            <Link href='/object/create'>Create</Link>
        </div>

        <ObjectTable />
    </div>
}