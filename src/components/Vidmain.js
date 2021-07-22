import React from "react";

const VidMain = ({ current }) => {
  console.log(current);
  if (!current) {
    return <div>loading..</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${current.id.currentId}`}
          title="current player"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{current.snippet.title}</h4>
        <p>{current.snippet.description}</p>
      </div>
    </div>
  );
};

export default VidMain;
