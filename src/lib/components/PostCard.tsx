"use client";

import { Post } from "@/types/Post";
import React from "react";

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return (
    <div className=" w-96">
      <p className="text-black">{post.title}</p>
      <p className="text-black">{post.content}</p>
      <p className="text-black">{post.publishedAt}</p>
    </div>
  );
};
