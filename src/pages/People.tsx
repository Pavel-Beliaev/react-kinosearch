import React from 'react';
import PeopleCard from "../components/Cards/PeopleCard";
import {useGetPopularPersonQuery} from "../Store/tmdbService/tmdb.api";
import Pagination from "../components/Pagination/Pagination";
import {setPage} from "../Store/filter/slice";
import {useAppDispatch, useAppSelector} from "../Store/store";


const People = () => {
    const {page} =useAppSelector(state => state.filter)
    const {data} = useGetPopularPersonQuery(page);
    const dispatch =useAppDispatch();

    const onChangePage = (page: number) => {
        dispatch(setPage(page));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    };

    return (
        <div className='frameworks-container people'>
            <h2>Popular People</h2>
            <div className='people-content'>
                {data?.results.map((object) => (
                    <PeopleCard
                        key={object.id}
                        name={object.name}
                        knownFor={object.known_for}
                        profilePath={object.profile_path}
                    />
                ))}
                <div className='container people-pagination'>
                    <Pagination value={page} changePage={onChangePage} totalPage={data?.total_pages}/>
                </div>
            </div>
        </div>
    );
};

export default People;