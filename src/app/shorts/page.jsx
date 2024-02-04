"use client";
import VideoStore from "@/store/videoStore";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const ShortsPage = () => {
  const videos = useContext(VideoStore);
  const { id } = videos[0];
  useEffect(() => {
    useRouter().replace(`shorts/${id}`);
  }, []);
};

export default ShortsPage;
