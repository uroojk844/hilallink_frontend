import { createContext } from "react";

const url = "https://res.cloudinary.com/dvz1oehqm/video/upload/";
const videosList = [
  { id: "v1706959345", name: "nn1xmlqtweck3j0durdm.mp4" },
  { id: "v1706959344", name: "jikht7ootixcwf9a5alb.mp4" },
  { id: "v1706959639", name: "jfa8nxn3sxwtqqswh1e5.mp4" },
  { id: "v1706959599", name: "iwvn9mmlubrgtnwke7cm.mp4" },
];
const VideoStore = createContext(videosList);

export default VideoStore;
