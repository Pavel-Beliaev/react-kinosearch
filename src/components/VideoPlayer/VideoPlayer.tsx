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
                light={true}
                config={{
                    youtube: {
                        playerVars: {showinfo: 1}
                    }
                }}
            />
        </div>
    );
};

export default VideoPlayer;