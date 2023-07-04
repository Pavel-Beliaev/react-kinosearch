import React, {useState} from 'react';
import {PeopleCard, SkeletonPeopleCard, Title} from "../../../../components";
import {Pagination} from "../Pagination";
import {useScroll} from "../../../../hooks/useScroll";
import {useGetAllPersonQuery} from "../../../../Store/tmdbService/endpoints";

export const PeopleContent = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const scrollTo = useScroll()

    const {data, isFetching} = useGetAllPersonQuery(pageNumber);


    const onChangePage = (page: number) => {
        (setPageNumber(page))
        scrollTo(0, 0, "smooth")
    };

    return (
        <>
            <Title>Popular People</Title>
            <div className='people-content'>
                {data?.results
                    .map((object, index) => (
                        isFetching
                            ? <SkeletonPeopleCard key={index}/>
                            : <PeopleCard
                                key={object.id}
                                name={object.name}
                                knownFor={object.known_for}
                                id={object.id}
                                profilePath={object.profile_path}
                            />
                    ))
                }
                <div className='people-pagination'>
                    <Pagination
                        value={pageNumber}
                        changePage={onChangePage}
                        totalPage={data?.total_pages}
                    />
                </div>
            </div>
        </>
    );
};