import { Post, PostsResponse } from "@/types/posts.types";

const POSTS_API_URL = "https://dummyjson.com/posts";
const POSTS_TAGS_URL = "https://dummyjson.com/posts/tag-list";

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

export async function getPost(id: number): Promise<Post | null> {
  const response = await fetch(`${POSTS_API_URL}/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Unable to fetch post");
  }

  return response.json();
}

export async function getPostTags(): Promise<string[]> {
  const response = await fetch(POSTS_TAGS_URL, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch post tags");
  }

  return response.json();
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

export async function updatePost(
  id: number,
  data: {
    title: string;
    body: string;
    tags: string[];
  },
): Promise<Post> {
  const response = await fetch(`${POSTS_API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update post");
  }

  return response.json();
}
