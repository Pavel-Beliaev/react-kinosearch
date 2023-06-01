import {RefObject, useEffect, useRef} from "react";

type ObserverCallback = () => void
export const useObserver = (
    ref: RefObject<HTMLDivElement>,
    disabled: boolean,
    callback_one: ObserverCallback,
): void => {
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        if (disabled) return;

        const addPage: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting) {
                callback_one();
            }
        };
        observer.current = new IntersectionObserver(addPage);
        if (ref.current) {
            observer.current.observe(ref.current);
        }


    }, [callback_one])
}
