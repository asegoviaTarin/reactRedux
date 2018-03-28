import React from 'react';

const VideoListItem = (props) => {
  const imageURL = props.videos.snippet.thumbnails.default.url;
  return (
    <li onClick={() => props.onVideoSelect(props.videos) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{props.videos.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
