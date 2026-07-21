import { Post, PostsResponse } from "@/types/posts.types";

const POSTS_API_URL = "https://dummyjson.com/posts";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(POSTS_API_URL, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch posts");
  }

  const data: PostsResponse = await response.json();

  return data.posts;
}

export async function deletePost(id: number): Promise<Post> {
  const response = await fetch(`${POSTS_API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }

  return response.json();
}
