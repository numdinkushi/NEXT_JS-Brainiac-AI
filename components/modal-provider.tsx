'use client'
import { useEffect, useState } from "react";
import { ProModal } from "./pro-modal";

export const ModalProivder = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <>
            <ProModal />
        </>
    );
};
