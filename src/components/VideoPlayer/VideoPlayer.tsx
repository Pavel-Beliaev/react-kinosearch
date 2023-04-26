import React from 'react';
import './videoplayer.scss'
import ReactPlayer from "react-player/lazy";


type VideoPlayerProps = {

    keys: string | undefined,
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({keys,}) => {


    return (
        <div className='player-wrapper'>
            <ReactPlayer
                controls={true}
                className='react-player'
                url={`https://www.youtube.com/watch?v=${keys}`}
                width='100%'
                height='100%'
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