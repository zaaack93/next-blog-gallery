"use client";

import { Button } from "react-bootstrap";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error( { error,
    reset
 }: ErrorProps ) {
    return (
        <div>
            <div>this div is only on the error page :( 
                <div>{error.message}</div>
                <Button
                    onClick={reset}>
                    reset
                </Button>
            </div>
        </div>
    )
}