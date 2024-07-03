"use client";

import { PostCard } from "@/lib/components/PostCard";
import useInfinitePostsScrollQuery from "@/lib/hooks/useInfinitePostsScrollQuery";

export default function Level1PostsPage() {
  const { posts, isFetching, searchText, handleSetSearchText } =
    useInfinitePostsScrollQuery();

  if (!posts.length && !isFetching) {
    return <div>No data</div>;
  }

  return (
    <>
      <div className="sticky top-8">
        <input
          type="text"
          value={searchText}
          onChange={(e) => handleSetSearchText(e.target.value)}
          placeholder="Search posts..."
          className="p-2 text-black"
        />
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} level={1} />
      ))}

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
