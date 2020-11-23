import React from 'react';

const VideoDescription = ({ video }) => { 
    if (!video) {
        return <div>
            <h1>Wellcome to Couch-Sloth!</h1>
            <br></br>
            <p>Couch-Sloth is a new way to watch Youtube with your friends online,<br /> it  
                synchronizes video playback and has a group chat to comment on<br /> the videos, as well
                as a queue system. Symply search for the video that<br /> you want and start sharing it with the people
                you care!
                </p>
        </div>
    }

    const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof video);
    return (
        <div>
            <div class='embeded'>
                <iframe src={videoSrc} allowfullscreen title='YTplayer'></iframe>
            </div>
            <div class='Video-info'>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDescription;