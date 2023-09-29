import {useEffect, useState} from "react";

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState<number>(0);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 1024) {
                setScreenSize(4);
            } else if (window.innerWidth >= 768) {
                setScreenSize(3);
            } else if (window.innerWidth >= 470) {
                setScreenSize(2);
            } else {
                setScreenSize(1);
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