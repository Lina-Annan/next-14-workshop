import { Post } from "@/types/Post";

type GetPostsResponse = {
  posts: Post[];
  limit: number;
  skip: number;
  total: number;
};

type Params = {
  skip: number;
  limit: number;
  searchText?: string;
};

export const getPosts = async (params: Params) => {
  let url = new URL("https://dummyjson.com/posts");
  if (params.searchText) {
    url = new URL("https://dummyjson.com/posts/search");
    url.searchParams.append("q", params.searchText);
  }

  url.searchParams.append("limit", params.limit.toString());
  url.searchParams.append("skip", params.skip.toString());

  const data = (await fetch(url, {
    //   cache: "no-cache",
    //   next: {
    //     revalidate: 1000,
    //   },
    //   next: { tags: ["collection"] },
  }).then((response) => response.json())) as GetPostsResponse;

  return {
    ...data,
    posts: data.posts.map((post, i) => {
      const imageSize = {
        width: 500 + (params.skip + 1) * (i + 1),
        height: 350 + (params.skip + 1) * (i + 1),
      };

      return {
        ...post,
        image: `https://picsum.photos/${imageSize.width}/${imageSize.height}`,
      };
    }),
  };
};
