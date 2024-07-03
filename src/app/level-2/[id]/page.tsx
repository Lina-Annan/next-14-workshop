import { getPost } from "@/lib/api/post";
import { Suspense } from "react";
import Level2SinglePost from "./-features/Level2SinglePost";

type Props = {
  params: {
    id: number;
  };
};

// export async function generateStaticParams() {
//     const postsId = await ();
//     return postsId.map((id) => ({ params: { id } }));
//   }

export default function Level1PostPage({ params: { id } }: Props) {
  return (
    <>
      <Suspense fallback={<div>LOADING FROM SUSPENSE...</div>}>
        <Level2SinglePost id={id} />
      </Suspense>
    </>
  );
}
