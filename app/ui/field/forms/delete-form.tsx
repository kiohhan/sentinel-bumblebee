'use client'
import { deleteField } from "@/app/lib/actions/field/actions";
import { DeleteButton } from "../../components/button/DeleteButton";
export function DeleteField({ id, fieldName }: { id: string, fieldName: string }) {
    const deleteInvoiceWithId = deleteField.bind(null, id, fieldName);
    return <form action={deleteInvoiceWithId}>
        <DeleteButton label="Delete" loading="Deleting..." />
    </form>
}

