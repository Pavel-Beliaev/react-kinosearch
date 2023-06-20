import React, {FC} from 'react';
import './videoplayer.scss'
import ReactPlayer from "react-player/lazy";
import {VideoPlayerProps} from "./types";

export const VideoPlayer:FC<VideoPlayerProps> = ({keys, keysArray}) => {

    return (
        <div className='player-wrapper'>
            <ReactPlayer
                controls={true}
                className='react-player'
                url={keysArray
                    ? keysArray.map((key) => (`https://www.youtube.com/watch?v=${key}`))
                    : `https://www.youtube.com/watch?v=${keys}`
                }
                width='100%'
                height='100%'
                light={true}
                config={{
                    youtube: {
                        playerVars: {
                            enablejsapi: 1,
                            showinfo: 1,
                            origin: 'http://localhost:3000/'
                        },
                    },
                }}
            />
        </div>
    );
};