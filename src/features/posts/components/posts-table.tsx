import { Post } from "@/types/posts.types";
import { PostActions } from "./post-actions";

interface PostsTableProps {
  posts: Post[];
  onDeleted?: () => void;
}
export function PostsTable({ posts, onDeleted }: PostsTableProps) {
  return (
    <section className="w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-border-primary bg-table-header-bg">
            <tr>
              <th className="px-4 py-3 text-left lg:text-sm text-xs font-medium text-text-primary">
                #
              </th>

              <th className="px-4 py-3 text-left lg:text-sm text-xs font-medium text-text-primary">
                Title
              </th>

              <th className="px-4 py-3 text-left lg:text-sm text-xs font-medium text-text-primary">
                Author
              </th>

              <th className="px-4 py-3 text-left lg:text-sm text-xs font-medium text-text-primary">
                Tags
              </th>

              <th className="px-4 py-3 text-left lg:text-sm text-xs font-medium text-text-primary">
                Views
              </th>

              <th className="px-4 py-3 text-left lg:text-sm text-xs font-medium text-text-primary">
                Reactions
              </th>

              <th className="px-4 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id} className="border-b border-border-primary ">
                <td className="px-4 py-4 lg:text-sm text-xs text-text-primary">
                  <span className="bg-table-index-bg p-2 rounded">
                    {index + 1}
                  </span>
                </td>

                <td className="max-w-xs lg:p-4 p-2">
                  <p className="truncate lg:text-sm text-xs font-medium text-text-primary">
                    {post.title}
                  </p>
                </td>

                <td className="px-4 py-4 lg:text-sm text-xs text-text-primary">
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

                <td className="px-4 py-4 lg:text-sm text-xs text-text-primary">
                  {post.views}
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 lg:text-sm text-xs text-green-600">
                      <span>👍</span>
                      <span>{post.reactions.likes}</span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 lg:text-sm text-xs text-red-500">
                      <span>👎</span>
                      <span>{post.reactions.dislikes}</span>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <PostActions post={post} onDeleted={onDeleted} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
