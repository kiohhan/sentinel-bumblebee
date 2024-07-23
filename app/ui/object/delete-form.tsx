import { deleteObject } from "@/app/lib/actions/object/actions";
export function DeleteObject({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteObject.bind(null, id);
    return <form action={deleteInvoiceWithId}>
        <button className="rounded-md border p-2 bg-red-500 hover:bg-red-400">
            Delete
        </button>
    </form>
}

