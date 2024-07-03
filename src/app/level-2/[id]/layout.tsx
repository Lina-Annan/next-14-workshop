import SinglePostSkeleton from "@/lib/components/SinglePostSkeleton";
import { PropsWithChildren, Suspense } from "react";

export default function Level2SinglePostLayout({
  children,
}: PropsWithChildren) {
  return <Suspense fallback={<SinglePostSkeleton />}>{children}</Suspense>;
}
