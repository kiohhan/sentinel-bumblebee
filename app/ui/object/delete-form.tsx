import { deleteObject } from "@/app/lib/actions/object/actions";
import { Button } from "@/components/ui/button";
export function DeleteObject({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteObject.bind(null, id);
    return <form action={deleteInvoiceWithId}>
        <Button className="min-w-24 bg-red-500 hover:bg-red-400">
            Delete
        </Button>
    </form>
}

