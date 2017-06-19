import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {
  if (!videos) {
    return <div>Loading...</div>;
  }
  const videoItems = videos.map((video) => {
    return <VideoItem key={video.etag} video={video}/>
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
}

export default VideoList;
