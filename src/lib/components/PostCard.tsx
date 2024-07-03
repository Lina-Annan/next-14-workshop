import { Post } from "@/types/Post";
import Link from "next/link";

type Props = {
  post: Post;
  level: number;
};

export const PostCard = ({ post, level }: Props) => {
  return (
    <div className="flex flex-col bg-white w-full p-3 ">
      <Link
        href={`/level-${level}/${post.id}`}
        className=" h-[250px] aspect-video flex-shrink-0"
      >
        <img
          src={post.image}
          alt={post.title}
          className="rounded-2xl object-cover w-full h-full"
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-2 max-w-[550px] text-balance">
            {post.title}
          </h2>
          <div className="space-x-2 mt-4">
            {post.tags.map((tag) => (
              <span className="text-green-400 capitalize bg-green-400/15 rounded-xl py-2 px-4 mb-1 w-fit">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="line-clamp-3 text-ellipsis">{post.body}</p>
        {/* <p>{post.publishedAt}</p> */}
      </div>
    </div>
  );
};
