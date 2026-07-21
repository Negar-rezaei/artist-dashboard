"use client";

import { useState } from "react";

import { Pagination } from "@/components/ui/pagination";
import type { Post } from "@/types/posts.types";

import { PostsTable } from "./posts-table";

interface PostsTableContainerProps {
  posts: Post[];
}

const ITEMS_PER_PAGE = 10;

export function PostsTableContainer({ posts }: PostsTableContainerProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const paginatedPosts = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      <PostsTable posts={paginatedPosts} />

      <div className="flex justify-end">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
