"use client";
import ArticleDetails from "@/components/CreateArticle/ArticleDetails";
import ArticlePreview from "@/components/CreateArticle/ArticlePreview";
import { useState } from "react";


const CreateArticle = () => {
  const [preview,setPreview] = useState(false)
  return (
    <>
      <div className="medium bg-white dark:bg-[hsl(0deg_0%_5%)] rounded-md p-3 min-h-[calc(100dvh-64px)] relative">
              <ArticleDetails controller={setPreview} />
      </div>
      {preview && <ArticlePreview controller={setPreview}/>}
    </>
  );
};

export default CreateArticle;
