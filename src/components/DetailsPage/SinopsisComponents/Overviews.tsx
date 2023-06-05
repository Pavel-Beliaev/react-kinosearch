import React from 'react';
import {OverviewsType} from "./types";
import '../sinipsis.scss'

const Overviews: React.FC<OverviewsType> = ({title, created_by, overview, creditsCrew, keyType}) => {

    return (
        <div className='overview'>
            <h3>{title}</h3>
            <p>{overview}</p>
            {!keyType &&
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

export default Overviews;