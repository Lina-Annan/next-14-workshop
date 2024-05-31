"use client";

import { getPosts } from "@/lib/api/products";
import { PostCard } from "@/lib/components/PostCard";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { data, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  if (isPending) {
    return <div>Loading.....</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <>
      {data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default Products;
