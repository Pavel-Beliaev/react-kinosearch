import React, {FC} from 'react';
import {IDetails} from "../../../Store/tmdbService/@types";
import '../synopsis.scss'
import {Poster} from "../SynopsisComponents/Poster";
import {Overviews} from "../SynopsisComponents/Overviews";
import {Info} from "../SynopsisComponents/Info";
import {SkeletonPeoplePage} from "../../Skeletons/SkeletonPeoplePage";
import {useTypePage} from "../../../hooks/useTypePage";

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