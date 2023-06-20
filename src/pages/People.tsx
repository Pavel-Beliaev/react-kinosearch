import React, {useState} from 'react';
import {useGetAllPersonQuery} from "../Store/tmdbService/endpoints";
import {Pagination, PeopleCard, SkeletonPeopleCard} from "../components";


const People: React.FC = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const {data, isFetching} = useGetAllPersonQuery(pageNumber);


    const onChangePage = (page: number) => {
        (setPageNumber(page))
        window
            .scrollTo({
                top: 0,
                behavior: 'smooth'
            })
    };

    return (
        <div className='frameworks-container people'>
            <h2>Popular People</h2>
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
                    ))}
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

export default People;