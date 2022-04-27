import React from 'react'
import VideoItem from './VideoItem'

function VideoLists({videos}) {
    const renderedList=videos.map(video=>{
        return <VideoItem video={video} />;
    })
    return (
        <div>
    {renderedList}
        </div>
    )
}

export default VideoLists;
