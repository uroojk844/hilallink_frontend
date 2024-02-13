"use client";
import VideoStore from "@/store/videoStore";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const ShortsPage = () => {
  const videos = useContext(VideoStore);
  const { id } = videos[0];
  const router = useRouter();
  useEffect(() => {
    router.replace(`shorts/${id}`);
  }, []);
};

export default ShortsPage;
