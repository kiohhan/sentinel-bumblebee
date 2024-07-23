import { fetchObjects } from "@/app/lib/fetch/object"
export default async function ObjectTable() {
    const objects = await fetchObjects()
    console.log(objects)
    return <div>
        Table
    </div>
}