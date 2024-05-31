import React, { Suspense } from "react";
import PostList from "./_features/components/PostList";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const page = async () => {
  return (
    <Suspense fallback={<p>LOADING......</p>}>
      <PostList />
    </Suspense>
  );
};

export default page;
