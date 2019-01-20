import React from 'react';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, handleVideoListEntryTitleClick}) => {
  // console.log("Store",store)
  return (

  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
)}

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
