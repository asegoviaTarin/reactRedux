import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(video.snippet.title)


  return (
    
    <div className="panel panel-default">
      <div className=" ">
        <div className="panel-heading" >
          <iframe src={url}></iframe>
        </div>
        <div className="panel-body">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
