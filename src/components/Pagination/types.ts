export type PaginationProps = {
    value: number,
    changePage: (page: number) => void
    totalPage: number | undefined
}