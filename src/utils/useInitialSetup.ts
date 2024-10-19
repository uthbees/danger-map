import { useEffect, useRef } from 'react';

export default function useInitialSetup(callback: () => void) {
    const run = useRef(false);

    useEffect(() => {
        if (!run.current) {
            run.current = true;
            callback();
        }
    }, []);
}
