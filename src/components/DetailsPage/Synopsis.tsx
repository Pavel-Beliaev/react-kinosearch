import React, {FC} from 'react';
import {IDetails} from "../../Store/tmdbService/@types";
import './sinipsis.scss'
import {Poster} from "./SynopsisComponents/Poster";
import {Overviews} from "./SynopsisComponents/Overviews";
import {Info} from "./SynopsisComponents/Info";
import {SkeletonPeoplePage} from "../Skeletons/SkeletonPeoplePage";

type SynopsisType = {
    data: IDetails | undefined,
    keyType: boolean,
    isFetching: boolean
}
export const Synopsis:FC<SynopsisType> = ({data, keyType, isFetching}) => {

    return (
        <>
            {isFetching
                ? <SkeletonPeoplePage/>
                : <div className='synopsis'>
                    <Poster
                        poster={keyType
                            ? data?.profile_path
                            : data?.poster_path
                        }
                        rating={data?.vote_average}
                        keyType={keyType}
                    />
                    <Overviews
                        title={keyType
                            ? 'Biography'
                            : 'Overviews'
                        }
                        overview={keyType
                            ? data?.biography
                            : data?.overview
                        }
                        creditsCrew={data?.credits.crew}
                        created_by={data?.created_by}
                        keyType={keyType}
                    />
                    <Info
                        data={data}
                        keyType={keyType}
                    />
                </div>
            }
        </>
    );
};