'use client'
import { Button } from '@/components/ui/button';
import { MouseEventHandler, useState } from 'react';

type CopyButtonPros = {
    jsonText: string;
};

const copy = (jsonText: string) => {
    navigator.clipboard.writeText(jsonText)
}

export const CopyButton = ({ jsonText }: CopyButtonPros) => {
    const [clicked, setClciked] = useState(false)
    return (
        <Button onClick={() => {
            copy(jsonText)
            setClciked(true)
        }}>
            {clicked ? (
                <>Copied</>
            ) : (
                <>Copy</>
            )}
        </Button>
    );
};
