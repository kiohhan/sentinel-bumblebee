'use client'
import { deleteObject } from "@/server/actions/object/actions";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "../../components/button/DeleteButton";
export function DeleteObject({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteObject.bind(null, id);
    return <form action={deleteInvoiceWithId}>
        <DeleteButton label="Delete" loading="Deleting..." />
    </form>
}

