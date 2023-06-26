export const useScroll = () => {

    const scrollToHandler = (
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

    return scrollToHandler
}