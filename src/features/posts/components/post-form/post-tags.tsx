"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface PostTagsProps {
  tags: string[];
  value: string[];
  onChange: (tags: string[]) => void;
}

export function PostTags({ tags, value, onChange }: PostTagsProps) {
  const [availableTags, setAvailableTags] = useState(tags);
  const [newTag, setNewTag] = useState("");

  function toggleTag(tag: string) {
    if (value.includes(tag)) {
      onChange(value.filter((item) => item !== tag));
      return;
    }

    onChange([...value, tag]);
  }

  function handleAddTag() {
    const tag = newTag.trim();

    if (!tag || availableTags.includes(tag)) {
      return;
    }

    setAvailableTags((prev) => [tag, ...prev]);
    onChange([...value, tag]);
    setNewTag("");
  }

  return (
    <div className="space-y-6">
      <Field label="Tags">
        <div className="flex gap-2">
          <Input
            value={newTag}
            placeholder="New tag"
            onChange={(e) => setNewTag(e.target.value)}
          />

          <Button type="button" variant="secondary" onClick={handleAddTag}>
            Add
          </Button>
        </div>
      </Field>

      <div className="border border-border-primary flex flex-col items-start p-3 rounded-lg space-y-3">
        {availableTags.slice(0, 12).map((tag) => (
          <Checkbox
            key={tag}
            label={tag}
            checked={value.includes(tag)}
            onCheckedChange={() => toggleTag(tag)}
          />
        ))}
      </div>
    </div>
  );
}
