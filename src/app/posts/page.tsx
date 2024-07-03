"use client";

import { getPosts } from "@/lib/api/posts";
import { PostCard } from "@/lib/components/PostCard";
import useInfiniteScrollQuery from "@/lib/hooks/useInfiniteScrollQuery";
import useMemoizedDebounce from "@/lib/hooks/useMemoizedDebounce";
import { useState } from "react";

const GET_POSTS_LIMIT = 10;

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useMemoizedDebounce(searchText, 500);

  const { data, isFetching } = useInfiniteScrollQuery({
    queryKey: ["posts", debouncedSearchText],
    queryFn: ({ pageParam }) =>
      getPosts({
        skip: pageParam,
        limit: GET_POSTS_LIMIT,
        searchText: debouncedSearchText,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const newSkip = allPages.length * GET_POSTS_LIMIT;
      if (newSkip < lastPage.total) {
        return newSkip;
      }
    },
  });

  if (!data && !isFetching) {
    return <div>No data</div>;
  }

  return (
    <>
      <div className="sticky top-8">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search posts..."
          className="p-2 text-black"
        />
      </div>

      {data?.pages.map((page) =>
        page.posts.map((post) => <PostCard key={post.id} post={post} />)
      )}

      {isFetching && (
        <div>
          <p className="text-white">Loading...</p>
          <p className="text-white">Loading...</p>
          <p className="text-white">Loading...</p>
          <p className="text-white">Loading...</p>
          <p className="text-white">Loading...</p>
          <p className="text-white">Loading...</p>
        </div>
      )}
    </>
  );
};

export default Products;
