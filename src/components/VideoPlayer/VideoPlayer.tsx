import React from 'react';
import './videoplayer.scss'
import ReactPlayer from "react-player/lazy";


type VideoPlayerProps = {
    keysArray?: string[],
    keys?: string | undefined,
    playing?: boolean
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({keys, playing, keysArray}) => {

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
                playing={playing}
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

export default VideoPlayer;