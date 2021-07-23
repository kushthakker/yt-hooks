import React, { useEffect } from "react";
import Vidmain from "./Vidmain";
import Vidlist from "./Vidlist";
import yt from "../api/Yt";
import "../css/app.css";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [videos, setVideos] = React.useState([]);
  const [current, setCurrent] = React.useState(null);

  useEffect(() => {
    const fetchApi = async function () {
      try {
        const req = await yt.get("/search", {
          params: {
            q: searchValue,
          },
        });
        console.log(req);
        if (req.data.items.length === 0) {
          throw new Error(`Please search another query!`);
        }
        const data = req.data.items;
        console.log(data);
        setVideos(data);
        setCurrent(data[0]);
      } catch (err) {
        alert(err);
      }
    };
    const timeout = setTimeout(() => {
      if (searchValue) fetchApi();
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
    console.log(video);
    setCurrent(video);
  };

  return (
    <div className="app">
      <div className="input">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={onInputChange}
          value={searchValue}
        />
      </div>
      <div className="section-below">
        <Vidmain current={current} />
        <Vidlist videos={videos} current={showDetail} />
      </div>
    </div>
  );
};

export default App;
