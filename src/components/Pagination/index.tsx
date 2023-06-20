import React, {FC} from 'react';
import './pagination.scss'
import ReactPaginate from "react-paginate";

export type PaginationProps = {
    value: number,
    changePage: (page: number) => void
    totalPage: number | undefined
}

export const Pagination:FC<PaginationProps> = ({value, changePage, totalPage}) => {

    return (
        <ReactPaginate
            className='paginate'
            pageCount={totalPage ? totalPage : 0}
            marginPagesDisplayed={2}
            pageRangeDisplayed={10}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => changePage(event.selected + 1)}
            forcePage={value - 1}
        />
    );
};