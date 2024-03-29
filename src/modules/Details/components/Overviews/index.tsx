import React, {FC} from 'react';
import {CreatedByType, CreditsCrewType} from "../../../../Store/tmdbService/@types";
import './overviews.scss'

type PropsType = {
    title: string,
    overview: string | null | undefined,
    creditsCrew?: CreditsCrewType[] | undefined,
    created_by?: CreatedByType[] | undefined,
    type: boolean
}

export const Overviews:FC<PropsType> = ({type, title, created_by, overview, creditsCrew}) => {

    return (
        <div className='overview'>
            <h3>{title}</h3>
            <p>{overview}</p>
            {!type &&
                <div className='overview-credits'>
                    {creditsCrew
                        ? creditsCrew
                            ?.filter(el => el.job === 'Characters'
                                || el.job === 'Director'
                                || el.job === 'Writer'
                                || el.job === 'Producer'
                                || el.job === 'Creator'
                            )
                            .map((crew) => (
                                <div
                                    key={crew.credit_id}
                                    className='overview-crew'>
                                    <h3>{crew.name}</h3>
                                    <p>{crew.job}</p>
                                </div>
                            ))
                        : created_by
                            ?.map((created) => (
                                <div
                                    key={created.credit_id}
                                    className='overview-crew'>
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