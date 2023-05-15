import {RefObject, useEffect, useRef} from "react";

type ObserverCallback = () => void
export const useObserver = (
    ref: RefObject<HTMLDivElement>,
    disabled: boolean,
    callback_one: ObserverCallback,
    callback_two: ObserverCallback,
): void => {
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        if (disabled) return;
        if (observer.current) observer.current.disconnect();

        const options = {
            threshold: 1.0,
        };

        const addPage: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting) {
                callback_one();
            } else if (!entries[0].isIntersecting) {
                callback_two();
            }

        };
        observer.current = new IntersectionObserver(addPage, options);
        observer.current.observe(ref.current!);


    }, [callback_one, disabled, callback_two])
}
