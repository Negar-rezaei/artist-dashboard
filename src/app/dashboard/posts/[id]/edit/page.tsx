import { notFound } from "next/navigation";

import { PostForm } from "@/features/posts/components/post-form/post-form";
import { getPost, getPostTags } from "@/services/posts.service";

interface EditPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;

  const post = await getPost(Number(id));

  if (!post) {
    notFound();
  }

  const tags = await getPostTags();

  return <PostForm post={post} tags={tags} />;
}
