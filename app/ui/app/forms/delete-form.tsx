'use client'
import { deleteApp } from "@/app/lib/actions/app/actions";
import { DeleteButton } from "../../components/button/DeleteButton";
export function DeleteApp({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteApp.bind(null, id);
    return <form action={deleteInvoiceWithId}>
        <DeleteButton label="Delete" loading="Deleting..." />
    </form>
}

