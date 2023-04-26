import {RefObject, useEffect, useRef} from "react";

type ObserverCallback = () => void
export const useObserver = (
    ref: RefObject<HTMLDivElement>,
    disabled: boolean,
    callback: ObserverCallback,
): void => {
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        if (disabled) return;
        if (observer.current) observer.current.disconnect();

        const addPage: IntersectionObserverCallback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                callback();
            }

        };
        observer.current = new IntersectionObserver(addPage);
        observer.current.observe(ref.current!);


    }, [callback, disabled])
}
