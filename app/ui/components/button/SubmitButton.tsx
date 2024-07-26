import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
    label: string;
    loading: React.ReactNode;
};

export const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} type="submit">
            {pending ? loading : label}
        </Button>
    );
};