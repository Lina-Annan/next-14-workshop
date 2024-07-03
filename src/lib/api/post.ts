import { Post } from "@/types/Post";

export async function getPost(id: number) {
  const data = (await fetch(`https://dummyjson.com/posts/${id}`).then(
    (response) => response.json()
  )) as Post;

  return data;
}
