import React, {FC} from 'react';
import {IDetails} from "../../../../Store/tmdbService/@types";
import '../synopsis.scss'
import {useTypePage} from "../../../../hooks/useTypePage";
import {Poster} from "../Poster";
import {Overviews} from "../Overviews";
import {Info} from "../Info";
import {SkeletonPeoplePage} from "../SkeletonPeoplePage";

type SynopsisType = {
    data: IDetails | undefined,
    isFetching: boolean
}
export const Synopsis:FC<SynopsisType> = ({data, isFetching}) => {
    const {isType} = useTypePage()

    return (
        <>
            {isFetching
                ? <SkeletonPeoplePage/>
                : <div className='synopsis'>
                    <Poster
                        poster={isType
                            ? data?.profile_path
                            : data?.poster_path
                        }
                        rating={data?.vote_average}
                    />
                    <Overviews
                        title={isType
                            ? 'Biography'
                            : 'Overviews'
                        }
                        overview={isType
                            ? data?.biography
                            : data?.overview
                        }
                        creditsCrew={data?.credits.crew}
                        created_by={data?.created_by}
                    />
                    <Info
                        data={data}
                    />
                </div>
            }
        </>
    );
};