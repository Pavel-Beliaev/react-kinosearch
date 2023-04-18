import React from 'react';
import PeopleCard from "../components/Cards/PeopleCard";
import {useGetPopularPersonQuery} from "../Store/tmdbService/tmdb.api";


const People = () => {
    const {data} = useGetPopularPersonQuery(1);

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
            </div>
        </div>
    );
};

export default People;