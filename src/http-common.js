import axios from "axios";

export default axios.create({
  baseURL: "https://downloads.egybrain.net",
  headers: {
    "Content-type": "application/json",
  },
});
