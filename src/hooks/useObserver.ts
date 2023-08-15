import {RefObject, useEffect, useRef} from "react";

type ObserverCallback = () => void
export const useObserver = (
    ref: RefObject<HTMLDivElement>,
    disabled: boolean,
    callbackOne: ObserverCallback,
    callbackTwo: ObserverCallback,
): void => {

    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        if (disabled) return;

        const addPage: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting) {
                callbackOne();
            }
            if (!entries[0].isIntersecting) {
                callbackTwo();
            }

        };
        observer.current = new IntersectionObserver(addPage);
        if (ref.current) {
            observer.current.observe(ref.current);
        }


    }, [callbackOne])
}