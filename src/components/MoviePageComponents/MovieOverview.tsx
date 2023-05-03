import React from 'react';
import {CreditsCrewType} from "../../Store/tmdbService/@types";

export type MovieOverviewType = {
    title: string,
    overview: string | null | undefined,
    creditsCrew: CreditsCrewType[] | undefined
}
const MovieOverview:React.FC<MovieOverviewType> = ({title, overview,creditsCrew}) => {

    return (
        <>
            <h3>{title}</h3>
            <p>{overview}</p>
            <div className='page-credits'>
                {creditsCrew
                    ?.filter(el => el.job === 'Characters'
                        || el.job === 'Director'
                        || el.job === 'Writer'
                        || el.job === 'Producer'
                        || el.job === 'Creator'
                    ).map((crew) => (
                        <div
                            key={crew.credit_id}
                            className='page-crew'>
                            <h3>{crew.name}</h3>
                            <p>{crew.job}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default MovieOverview;