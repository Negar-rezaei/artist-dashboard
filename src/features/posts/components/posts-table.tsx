import { Post } from "@/types/posts.types";

interface PostsTableProps {
  posts: Post[];
}

export function PostsTable({ posts }: PostsTableProps) {
  return (
    <section className="w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-border-primary bg-table-header-bg">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-text-primary">
                #
              </th>

              <th className="px-4 py-3 text-left text-sm font-medium text-text-primary">
                Title
              </th>

              <th className="px-4 py-3 text-left text-sm font-medium text-text-primary">
                Author
              </th>

              <th className="px-4 py-3 text-left text-sm font-medium text-text-primary">
                Tags
              </th>

              <th className="px-4 py-3 text-left text-sm font-medium text-text-primary">
                Views
              </th>

              <th className="px-4 py-3 text-left text-sm font-medium text-text-primary">
                Reactions
              </th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id} className="border-b border-border-primary ">
                <td className="px-4 py-4 text-sm text-text-primary">
                  <span className="bg-table-index-bg p-2 rounded">
                    {index + 1}
                  </span>
                </td>

                <td className="max-w-xs px-4 py-4">
                  <p className="truncate text-sm font-medium text-text-primary">
                    {post.title}
                  </p>
                </td>

                <td className="px-4 py-4 text-sm text-text-primary">
                  {post.author ?? `User ${post.userId}`}
                </td>

                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-bg-page px-2 py-1 text-xs text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-4 py-4 text-sm text-text-primary">
                  {post.views}
                </td>

                <td className="px-4 py-4 text-sm text-text-primary">
                  👍 {post.reactions.likes}
                  <span className="mx-2 text-text-secondary">|</span>
                  👎 {post.reactions.dislikes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
