import React, { useEffect, useRef } from "react";
import Vidmain from "./Vidmain";
import Vidlist from "./Vidlist";
import yt from "../api/Yt";
import "../css/app.css";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [videos, setVideos] = React.useState([]);
  const [current, setCurrent] = React.useState(null);
  const show = useRef();

  useEffect(() => {
    const fetchApi = async function () {
      try {
        console.log(show);
        show.current.style.display = "block";
        const req = await yt.get("/search", {
          params: {
            q: searchValue,
          },
        });

        if (req.data.items.length === 0) {
          throw new Error(`Please search another query!`);
        }
        const data = req.data.items;
        setVideos(data);
        setCurrent(data[0]);
        show.current.style.display = "none";
      } catch (err) {
        alert(err);
      }
    };
    const timeout = setTimeout(() => {
      if (searchValue) fetchApi();
      else {
        setCurrent(null);
        setVideos([]);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  const onInputChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const showDetail = (video) => {
    setCurrent(video);
  };

  return (
    <div className="app">
      <div>
        <label>
          <input
            type="text"
            className="search"
            onChange={onInputChange}
            value={searchValue}
            required
          />
          <ul>
            <li s="">s</li>
            <li e="">e</li>
            <li a="">a</li>
            <li r="">r</li>
            <li c="">c</li>
            <li h="">h</li>
          </ul>
        </label>
      </div>
      <div
        className="ui active inverted dimmer"
        ref={show}
        style={{ display: "none" }}
      >
        <div className="ui text loader"></div>
      </div>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <Vidmain current={current} />
          </div>
          <div className="five wide column">
            <Vidlist
              videos={videos}
              onVideoSelect={showDetail}
              current={current}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
