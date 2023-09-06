export const useScroll = () => {

    return (
        top: number,
        left: number,
        behavior: ScrollBehavior | undefined,
    ) => {

        window.scrollTo({
            top: top,
            left: left,
            behavior: behavior,
        })
    }
}