import axios from "axios";

const KEY = "AIzaSyCqqe4iSpJv8fUcfO8VRyvhxEB06W0Eq4U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/videos",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
