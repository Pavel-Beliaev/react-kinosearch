import React, {FC, useState} from 'react';
import {useGetAllPersonQuery} from "../Store/tmdbService/endpoints";
import {Pagination, PeopleCard, SkeletonPeopleCard} from "../components";
import {useScroll} from "../hooks/useScroll";
import Title from "../components/Title";


export const People: FC = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const scrollTo = useScroll()

    const {data, isFetching} = useGetAllPersonQuery(pageNumber);


    const onChangePage = (page: number) => {
        (setPageNumber(page))
        scrollTo(0, 0, "smooth")
    };

    return (
        <div className='frameworks-container people'>
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
                <div className='container people-pagination'>
                    <Pagination
                        value={pageNumber}
                        changePage={onChangePage}
                        totalPage={data?.total_pages}
                    />
                </div>
            </div>
        </div>
    );
};