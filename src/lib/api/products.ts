import { Post } from "@/types/Post";

export const getPosts = async () => {
  const data: Post[] = await fetch("https://jsonplaceholder.org/posts", {
    //   cache: "no-cache",
    //   next: {
    //     revalidate: 1000,
    //   },
    //   next: { tags: ["collection"] },
  })
    .then((response) => response.json())
    .then((json) => json);
  console.log(data);
  return data;
};
