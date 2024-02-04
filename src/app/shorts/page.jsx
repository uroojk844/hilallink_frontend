"use client";
import VideoStore from "@/store/videoStore";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const ShortsPage = () => {
  const videos = useContext(VideoStore);
  useRouter().replace("shorts/" + videos[0]);
};

export default ShortsPage;
