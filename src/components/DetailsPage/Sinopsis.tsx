import React from 'react';
import Poster from "./SinopsisComponents/Poster";
import {CreatedByType, CreditsCrewType, IDetails} from "../../Store/tmdbService/@types";
import SkeletonPeoplePage from "../Skeletons/SkeletonPeoplePage";
import Overviews from "./SinopsisComponents/Overviews";
import Info from "./SinopsisComponents/Info";

type SinopsisType = {
    data: IDetails | undefined,
    keyType: boolean,
    isFetching: boolean
}
const Sinopsis: React.FC<SinopsisType> = ({data, keyType, isFetching}) => {
    return (
        <>
            {isFetching
                ? <SkeletonPeoplePage/>
                : <div className='page-synopsis'>
                    <Poster
                        poster={keyType ? data?.profile_path : data?.poster_path}
                        rating={data?.vote_average}
                        keyType={keyType}
                    />
                    <Overviews
                        title={keyType ? 'Biography' : 'Overviews'}
                        overview={keyType ? data?.biography : data?.overview}
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

export default Sinopsis;