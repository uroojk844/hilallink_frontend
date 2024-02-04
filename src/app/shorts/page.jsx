"use client";
import VideoStore from "@/store/videoStore";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const ShortsPage = () => {
  const videos = useContext(VideoStore);
  const { id } = videos[0];
  useRouter().replace(`shorts/${id}`);
};

export default ShortsPage;
