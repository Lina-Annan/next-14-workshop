import React, { Suspense } from "react";
import { Post } from "../../page";

const PostList = async () => {
  const getPosts = async () => {
    const posts: Post[] = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    )
      .then((response) => response.json())
      .then((json) => json);
    return posts;
  };

  const posts = await getPosts();

  return (
    <>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default PostList;
