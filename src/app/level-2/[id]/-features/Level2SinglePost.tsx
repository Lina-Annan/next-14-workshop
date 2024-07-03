import { getPost } from "@/lib/api/post";
import React, { useEffect } from "react";

type Props = {
  id: number;
};

export default async function Level2SinglePost({ id }: Props) {
  const post = await getPost(id);

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>{post.tags}</p>
      </div>
    </>
  );
}
