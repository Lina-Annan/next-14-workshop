"use client";

import { PostCard } from "@/lib/components/PostCard";
import SearchInput from "@/lib/components/SearchInput";
import useInfinitePostsScrollQuery from "@/lib/hooks/useInfinitePostsScrollQuery";
import { Post } from "@/types/Post";

type Props = {
  initialPosts: Post[];
};

export default function Level2PostsList() {
  const { posts, isFetching, searchText, handleSetSearchText } =
    useInfinitePostsScrollQuery();

  if (!posts.length && !isFetching) {
    return <div>No data</div>;
  }

  return (
    <>
      <div className="sticky top-0 my-10 left-0 right-0 flex justify-center">
        <SearchInput
          placeholder="Search anything"
          onChange={(e) => handleSetSearchText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-4 gap-3 ">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} level={2} />
        ))}
      </div>

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
}
