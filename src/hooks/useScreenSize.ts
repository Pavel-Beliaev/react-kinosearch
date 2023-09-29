import {useEffect, useState} from "react";

type HookProps = {
    value_1: number,
    size_1: number,
    value_2: number,
    size_2: number,
    value_3: number,
    size_3: number,
    value_4: number,
}
export function useScreenSize({size_1, value_1, size_2, value_2, size_3, value_3, value_4}: HookProps) {
    const [screenSize, setScreenSize] = useState<number>(0);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= size_1) {
                setScreenSize(value_1);
            } else if (window.innerWidth >= size_2) {
                setScreenSize(value_2);
            } else if (window.innerWidth >= size_3) {
                setScreenSize(value_3);
            } else {
                setScreenSize(value_4);
            }
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return screenSize;
}