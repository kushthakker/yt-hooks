import axios from "axios";

const KEY = "AIzaSyAsRjPfiG75tEnJytM3s36609CpxpTbWHg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
