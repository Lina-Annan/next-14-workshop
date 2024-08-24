import { useCallback, useState } from "react";
import useInfiniteScrollQuery from "./useInfiniteScrollQuery";
import useMemoizedDebounce from "./useMemoizedDebounce";
import type { Post } from "@prisma/client";

export const GET_POSTS_LIMIT = 10;

export default function useInfinitePostsScrollQuery() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useMemoizedDebounce(searchText, 500);

  const handleSetSearchText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const { data, isFetching, isPending } = useInfiniteScrollQuery({
    queryKey: ["posts", debouncedSearchText],
    queryFn: async ({ pageParam }) => {
      const searchParams = new URLSearchParams();
      searchParams.append("limit", GET_POSTS_LIMIT.toString());
      searchParams.append("skip", (pageParam ?? 0).toString());

      if (debouncedSearchText) {
        searchParams.append("search", debouncedSearchText);
      }

      const url = `/api/posts?${searchParams.toString()}`;

      const res = await fetch(url);
      const data = (await res.json()) as { posts: Post[]; total: number };
      return data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const newSkip = allPages.length * GET_POSTS_LIMIT;
      if (newSkip < lastPage.total) {
        return newSkip;
      }
    },
  });

  return {
    data,
    posts: data?.pages.flatMap((page) => page.posts) ?? [],
    isFetching,
    searchText,
    isPending,
    handleSetSearchText,
  };
}
