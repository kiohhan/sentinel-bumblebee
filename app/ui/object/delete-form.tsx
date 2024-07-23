import { deleteObject } from "@/app/lib/actions/object/actions";
export function DeleteObject({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteObject.bind(null, id);
    return <form action={deleteInvoiceWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
            Delete
        </button>
    </form>
}

