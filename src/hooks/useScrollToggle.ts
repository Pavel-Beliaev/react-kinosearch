import {useEffect, useState} from "react";

export const useScrollToggle = () => {
    const [scroll, setScroll] = useState(0);
    console.log('1')
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    return {scroll}
}