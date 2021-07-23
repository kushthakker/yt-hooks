import React from "react";
import "../css/vidlist.css";

const Vidlist = ({ onVideoSelect, videos, current }) => {
  const renderList = videos.map((video) => {
    if (video === current) return null;
    return (
      <div key={video.id.videoId} className="vidlist">
        <div className="videoitem item" onClick={() => onVideoSelect(video)}>
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
