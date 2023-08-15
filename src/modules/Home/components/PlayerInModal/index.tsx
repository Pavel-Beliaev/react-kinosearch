import React, {useEffect} from 'react';
import {useAppSelector} from "../../../../Store/store";
import {useLazyGetVideoByIdQuery} from "../../../../Store/tmdbService/endpoints";
import {VideoPlayer} from "../../../../components";
import './playerInModal.scss'

export const PlayerInModal = () => {
    const {active, id} = useAppSelector((state) => state.config.activeModal);

    const [fetchVideoById, data] = useLazyGetVideoByIdQuery();

    const movieID = id && id;
    const foundVideo = data.data?.results.find((video) =>
        video.name.toLowerCase().includes("official trailer")
    );
    const video = foundVideo || data.data?.results[0];

    useEffect(() => {
        if (active) {
            fetchVideoById(movieID!);
        }
    }, [movieID]);

    return (
        <div
            className={`modal-content ${active && "active"}`}
            onClick={(event) => event.stopPropagation()}
        >
            {active && <VideoPlayer keys={video?.key}/>}
        </div>
    );
};