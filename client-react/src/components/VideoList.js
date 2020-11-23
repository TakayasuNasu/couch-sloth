import React from 'react';
import Player from './Player';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return <Player key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} ></Player>
    });

        return <div className='video-lsit'>{renderedVideos}</div>
};

export default VideoList;