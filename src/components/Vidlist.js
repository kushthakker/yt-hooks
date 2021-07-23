import React from "react";

const Vidlist = ({ current, videos }) => {
  const renderList = videos.map((video) => {
    if (video === current) return null;
    else
      return (
        <div key={video.id.videoId}>
          <div className="videoitem item" onClick={() => current(video)}>
            <img
              className="ui image"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <div className="content">
              <div className="header">{video.snippet.title}</div>
            </div>
          </div>
        </div>
      );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default Vidlist;
