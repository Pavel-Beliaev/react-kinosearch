import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../Store/store";
import {setActiveModal} from "../Store/config/slice";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import {useLazyGetVideoByIdQuery} from "../Store/tmdbService/tmdb.api";


const ModalVideo: React.FC = () => {
    const {active, id} = useAppSelector(state => state.config.activeModal);
    const dispatch = useAppDispatch();
    const movieID = id && id
    const [target, data] = useLazyGetVideoByIdQuery()
    const foundVideo = data.data?.results.find((video) =>
        video.name.toLowerCase().includes('official trailer'))
    const video = (foundVideo || data.data?.results[0])

    useEffect(() => {
        if (active) {
            target(Number(movieID))
        }
    }, [movieID])


    return (
        <>
            <div
                className={active ? 'modal active' : 'modal'}
                onClick={() => dispatch(setActiveModal({active: false}))}
            >
                <div
                    className={active ? 'modal-content active' : 'modal-content'}
                    onClick={event => event.stopPropagation()}
                >
                    {active &&
                        <VideoPlayer keys={video?.key}/>
                    }
                </div>
            </div>
        </>

    );
};

export default ModalVideo;