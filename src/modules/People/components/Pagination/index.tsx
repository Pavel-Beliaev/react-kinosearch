import React, {FC} from 'react';
import './pagination.scss'
import ReactPaginate from "react-paginate";
import {useScreenSize} from "../../../../hooks/useScreenSize";

type PropsType = {
    value: number,
    changePage: (page: number) => void
    totalPage: number | undefined
}

export const Pagination: FC<PropsType> = ({value, changePage, totalPage}) => {
    const screenSize = useScreenSize({
        size_1: 940,
        value_1: 10,
        size_2: 720,
        value_2: 7,
        size_3: 575,
        value_3: 4,
        value_4: 0,});

    return (
        <div className='people-pagination'>
            <ReactPaginate
                className='paginate'
                pageCount={totalPage ? totalPage : 0}
                marginPagesDisplayed={1}
                pageRangeDisplayed={screenSize}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(event) => changePage(event.selected + 1)}
                forcePage={value - 1}
            />
        </div>
    );
};