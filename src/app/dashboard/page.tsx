import { Section } from "@/components/ui/section";
import { PostsTableContainer } from "@/features/posts/components/posts-table-container";
import { getPosts } from "@/services/posts.service";

const posts = await getPosts();

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Section title="Posts">
        <PostsTableContainer posts={posts} />
      </Section>
    </div>
  );
}
