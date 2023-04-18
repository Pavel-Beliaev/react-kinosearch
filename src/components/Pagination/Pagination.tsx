import React from 'react';
import './pagination.scss'
import ReactPaginate from "react-paginate";

type PaginationProps = {
    value: number,
    changePage: (page: number) => void
    totalPage: number | undefined
}

const Pagination: React.FC<PaginationProps> = ({value, changePage, totalPage}) => {
    return (
        <ReactPaginate
            className='paginate'
            pageCount={totalPage ? totalPage : 0}
            marginPagesDisplayed={2}
            pageRangeDisplayed={17}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => changePage(event.selected + 1)}
            forcePage={value - 1}
        />
    );
};

export default Pagination;