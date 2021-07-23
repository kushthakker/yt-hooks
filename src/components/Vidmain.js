import React from "react";

const VidMain = ({ current }) => {
  console.log(current);
  if (current !== null) {
    return (
      <div>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${current.id.videoId}`}
            title="current player"
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{current.snippet.title}</h4>
          <p>{current.snippet.description}</p>
        </div>
      </div>
    );
  } else return null;
};

export default VidMain;
