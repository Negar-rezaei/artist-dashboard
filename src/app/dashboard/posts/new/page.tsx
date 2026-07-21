import { PostForm } from "@/features/posts/components/post-form/post-form";
import { getPostTags } from "@/services/posts.service";

export default async function NewPostPage() {
  const tags = await getPostTags();

  return <PostForm tags={tags} />;
}
