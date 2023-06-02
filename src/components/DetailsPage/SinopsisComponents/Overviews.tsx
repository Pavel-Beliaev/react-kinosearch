import React from 'react';
import {CreatedByType, CreditsCrewType} from "../../../Store/tmdbService/@types";

type OverviewsType = {
    title: string,
    overview: string | null | undefined,
    creditsCrew?: CreditsCrewType[] | undefined,
    created_by?: CreatedByType[] | undefined,
    keyType: boolean
}
const Overviews: React.FC<OverviewsType> = ({title, created_by, overview, creditsCrew, keyType}) => {


    return (
        <div className='page-overview'>
            <h3>{title}</h3>
            <p>{overview}</p>
            {!keyType &&
                <div className='page-credits'>
                    {creditsCrew
                        ? creditsCrew
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
                        : created_by?.map((created) => (
                            <div
                                key={created.credit_id}
                                className='page-crew'>
                                <p>Created by</p>
                                <h3>{created.name}</h3>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Overviews;