import UpdateObjectForm from "@/app/ui/object/update-form"
import { fetchObject } from "@/app/lib/fetch/object"

export default async function Page({ params }: { params: { id: string } }) {
    const myObj = await fetchObject(params.id)
    return <div className="mx-auto max-w-2xl">
        <div>Object Form</div>
        <UpdateObjectForm obj={myObj} />
    </div>
}
