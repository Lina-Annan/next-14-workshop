import { getPosts } from "@/lib/api/posts";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PostsList from "./-features/PostsList";

const GET_POSTS_LIMIT = 10;

export default async function Level2Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", ""],
    queryFn: ({ pageParam }) =>
      getPosts({
        skip: pageParam,
        limit: GET_POSTS_LIMIT,
      }),
    initialPageParam: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  );
}
