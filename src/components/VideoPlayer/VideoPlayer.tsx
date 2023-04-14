import React from 'react';
import './videoplayer.scss'
import ReactPlayer from "react-player/youtube";


const VideoPlayer:React.FC = () => {

    return (
        <div className='player-wrapper'>
            <ReactPlayer
                controls={true}
                className='react-player'
                url='https://www.youtube.com/watch?v=jmP2gK4wySg'
                width='100%'
                height='100%'
                config={{

                }}
            />
        </div>
    );
};

export default VideoPlayer;