import React from 'react';

const Player = ({video, handleVideoSelect}) => {
  return (
    <div onClick={ () => handleVideoSelect(video)} className='video-player'>
      <img className='image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}></img>
      <div className='content'>
      <div className='Title'>{video.snippet.title}</div>
      </div>
    </div>

  )
}
export default Player
