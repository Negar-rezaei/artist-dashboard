"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { useToast } from "@/components/ui/toast";

import { createPost, updatePost } from "@/services/posts.service";
import { PostTags } from "./post-tags";

import type { Post } from "@/types/posts.types";

interface PostFormProps {
  tags: string[];
  post?: Post;
}

export function PostForm({ tags, post }: PostFormProps) {
  const router = useRouter();
  const { showToast } = useToast();

  const [title, setTitle] = useState(post?.title ?? "");
  const [body, setBody] = useState(post?.body ?? "");
  const [selectedTags, setSelectedTags] = useState(post?.tags ?? []);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      if (post) {
        await updatePost(post.id, {
          title,
          body,
          tags: selectedTags,
        });

        showToast({
          variant: "success",
          title: "Post updated successfully",
        });
      } else {
        await createPost({
          title,
          body,
          tags: selectedTags,
        });

        showToast({
          variant: "success",
          title: "Post created successfully",
        });
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      showToast({
        variant: "error",
        title: post ? "Failed to update post" : "Failed to create post",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Section title={post ? "Update Post" : "Create Post"}>
          <div className="space-y-6">
            <Field label="Title">
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </Field>

            <Field label="Body">
              <textarea
                className="min-h-56 w-full rounded-input border border-input-border bg-input-bg p-3 text-input-fg outline-none"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Field>

            <Button type="submit" loading={loading}>
              {post ? "Update Post" : "Create Post"}
            </Button>
          </div>
        </Section>
      </div>

      <Section>
        <PostTags tags={tags} value={selectedTags} onChange={setSelectedTags} />
      </Section>
    </form>
  );
}
