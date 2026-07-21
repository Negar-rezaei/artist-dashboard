"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { DropdownItem } from "@/components/ui/dropdown-item";
import { Icon } from "@/components/ui/icon";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";

import { deletePost } from "@/services/posts.service";
import type { Post } from "@/types/posts.types";
import { useRouter } from "next/navigation";

interface PostActionsProps {
  post: Post;
  onDeleted?: () => void;
}

export function PostActions({ post, onDeleted }: PostActionsProps) {
  const { showToast } = useToast();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    try {
      setLoading(true);

      await deletePost(post.id);

      setDeleteModalOpen(false);
      setDropdownOpen(false);

      showToast({
        variant: "success",
        title: "Post deleted successfully",
      });

      onDeleted?.();
    } catch {
      showToast({
        variant: "error",
        title: "Delete failed",
        description: "Unable to delete this post.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="relative">
        <Button
          variant="secondary"
          icon={<Icon name="ellipsis" size={18} />}
          aria-label="post actions"
          onClick={() => setDropdownOpen((prev) => !prev)}
        />

        {dropdownOpen && (
          <div
            className="
              absolute
              right-0
              z-10
              mt-2
              w-40
              rounded-lg
              border
              border-border-primary
              bg-section-bg
              p-1
              shadow-dropdown
            "
          >
            <DropdownItem
              onClick={() => {
                router.push(`/dashboard/posts/${post.id}/edit`);
                setDropdownOpen(false);
              }}
            >
              Edit
            </DropdownItem>

            <DropdownItem
              onClick={() => {
                setDeleteModalOpen(true);
                setDropdownOpen(false);
              }}
            >
              Delete
            </DropdownItem>
          </div>
        )}
      </div>

      <Modal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        size="sm"
        variant="danger"
      >
        <ModalHeader title="Delete post" />

        <ModalBody
          icon={
            <div className="rounded-full bg-toast-error-bg p-3">
              <Icon
                name="warning"
                className="text-modal-danger-icon"
                size={40}
              />
            </div>
          }
        >
          Are you sure you want to delete this post?
        </ModalBody>

        <ModalFooter>
          <Button variant="danger" loading={loading} onClick={handleDelete}>
            Delete
          </Button>

          <Button
            variant="secondary"
            disabled={loading}
            onClick={() => setDeleteModalOpen(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
