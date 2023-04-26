import React from 'react';
import {useAppDispatch, useAppSelector} from "../Store/store";
import {setActiveModal} from "../Store/config/slice";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import {useGetVideoByIdQuery} from "../Store/tmdbService/tmdb.api";


const ModalVideo: React.FC = () => {
    const {active, id} = useAppSelector(state => state.config.activeModal);
    const dispatch = useAppDispatch();
    const {data: videoDataList} = useGetVideoByIdQuery(Number(id))

    const foundVideo = videoDataList?.results.find((video) =>
        video.name.toLowerCase().includes('official trailer'))
    const video = (foundVideo || videoDataList?.results[0])
    console.log(video)
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
                    <VideoPlayer keys={video.key}/>
                }
            </div>
        </div>
    );
};

export default ModalVideo;