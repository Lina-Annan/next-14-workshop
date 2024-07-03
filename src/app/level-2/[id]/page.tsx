import { getPost } from "@/lib/api/post";
import { Suspense } from "react";

type Props = {
  params: {
    id: number;
  };
};

// export async function generateStaticParams() {
//     const postsId = await ();
//     return postsId.map((id) => ({ params: { id } }));
//   }

export default async function Level1PostPage({ params: { id } }: Props) {
  const post = await getPost(id);

  return (
    <main className="max-w-[800px] p-8 mx-auto space-y-6">
      <img
        src={post.image}
        className="w-full aspect-video object-cover rounded-2xl"
      />
      <div className="space-x-2">
        {post.tags.map((tag) => (
          <span className="text-green-700 capitalize bg-green-400/15 rounded-xl py-2 px-4 mb-1 w-fit">
            {tag}
          </span>
        ))}
      </div>
      <h1 className="font-semibold text-3xl">{post.title}</h1>
      <p className="text-xl">{post.body}</p>
    </main>
  );
}
