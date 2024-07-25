import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button';

type DeleteButtonProps = {
    label: string;
    loading: React.ReactNode;
};

export const DeleteButton = ({ label, loading }: DeleteButtonProps) => {
    const { pending } = useFormStatus()
    return (
        <Button className="min-w-24 bg-red-500 hover:bg-red-400" disabled={pending} type="submit">
            {pending ? loading : label}
        </Button>
    );
};