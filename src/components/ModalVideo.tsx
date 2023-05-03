import React from 'react';
import {useAppDispatch, useAppSelector} from "../Store/store";
import {setActiveModal} from "../Store/config/slice";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import {useGetVideoByIdQuery} from "../Store/tmdbService/tmdb.api";


const ModalVideo: React.FC = () => {
    const {active, id} = useAppSelector(state => state.config.activeModal);
    const dispatch = useAppDispatch();
    const movieID = id && id
    const {data: videoDataList} = useGetVideoByIdQuery(Number(movieID))

    const foundVideo = videoDataList?.results.find((video) =>
        video.name.toLowerCase().includes('official trailer'))
    const video = (foundVideo || videoDataList?.results[0])

    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => dispatch(setActiveModal({active: false}))}
        >
            <div
                className={active ? 'modal-content active' : 'modal-content'}
                onClick={event => event.stopPropagation()}
            >
                {video &&
                    <VideoPlayer keys={video.key} playing={active}/>
                }
            </div>
        </div>
    );
};

export default ModalVideo;