"use client";

import Header from "@/lib/components/Header";
import { PostCard } from "@/lib/components/PostCard";
import PostCardSkeleton from "@/lib/components/PostCardSkeleton";
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
      <Header handleSetSearchText={handleSetSearchText} />

      <div className="grid grid-cols-4 gap-3 p-8">
        {posts.map((post) => (
          <>
            <PostCard key={post.id} post={post} level={2} />
            <PostCardSkeleton />
          </>
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
