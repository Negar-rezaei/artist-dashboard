"use client";

import { Button } from "@/components/ui/button/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownItem } from "@/components/ui/dropdown-item";
import { Field } from "@/components/ui/field";
import { Header } from "@/components/ui/header";
import { Icon } from "@/components/ui/icon/Icon";
import { Input } from "@/components/ui/input";
import { LinkButton } from "@/components/ui/link-button";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { Pagination } from "@/components/ui/pagination";
import { SidebarMenuItem } from "@/components/ui/sidebar-menu-item";
import { Toast } from "@/components/ui/toast";
import { useState } from "react";

const states = [
  {
    title: "Primary",
    variant: "primary" as const,
  },
  {
    title: "Secondary",
    variant: "secondary" as const,
  },
  {
    title: "Danger",
    variant: "danger" as const,
  },
];

export default function Home() {
  const [defaultModalOpen, setDefaultModalOpen] = useState(false);

  const [dangerModalOpen, setDangerModalOpen] = useState(false);

  const [largeModalOpen, setLargeModalOpen] = useState(false);

  const [checked, setChecked] = useState(true);

  const [page, setPage] = useState(10);

  return (
    <main className="min-h-screen bg-modal-bg p-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        {states.map(({ title, variant }) => (
          <section key={variant}>
            <h2 className="mb-6 heading-md">{title}</h2>

            <div className="flex flex-wrap items-center gap-6">
              {/* Default Text */}

              <Button variant={variant}>button</Button>

              {/* Default Icon */}

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                aria-label="check"
              />

              {/* Hover */}

              <Button variant={variant} className="pointer-events-none">
                Hover
              </Button>

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                className="pointer-events-none"
              />

              {/* Press */}

              <Button variant={variant} className="pointer-events-none">
                Press
              </Button>

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                className="pointer-events-none"
              />

              {/* Loading */}

              <Button variant={variant} loading>
                button
              </Button>

              <Button
                variant={variant}
                loading
                icon={<Icon name="checkCircle" size={18} />}
                aria-label="loading"
              />

              {/* Disabled */}

              <Button variant={variant} disabled>
                button
              </Button>

              <Button
                variant={variant}
                disabled
                icon={<Icon name="checkCircle" size={18} />}
                aria-label="disabled"
              />
            </div>
          </section>
        ))}
      </div>

      <section>
        <h2 className="mb-6 heading-md">Input</h2>

        <div className="flex flex-col gap-6 max-w-md">
          {/* Default */}

          <Input placeholder="Default" />

          {/* Filled */}

          <Input defaultValue="Filled value" />

          {/* Hover */}

          <Input
            placeholder="Hover"
            className="pointer-events-none border-input-border-hover"
          />

          {/* Active */}

          <Input
            placeholder="Active"
            className="border-input-border-active ring-1 ring-input-border-active"
          />

          {/* Readonly */}

          <Input defaultValue="Readonly" readOnly />

          {/* Disabled */}

          <Input placeholder="Disabled" disabled />

          {/* Error */}

          <Input placeholder="Error" error />

          {/* Left Icon */}

          <Input
            placeholder="Search..."
            leftAdornment={<Icon name="warning" size={18} />}
          />

          {/* Right Icon */}

          <Input
            placeholder="Password"
            rightAdornment={<Icon name="warning" size={18} />}
          />

          {/* Large */}

          <Input size="lg" placeholder="Large" />

          {/* Medium */}

          <Input size="md" placeholder="Medium" />

          {/* Small */}

          <Input size="sm" placeholder="Small" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 heading-md">Field</h2>

        <div className="flex max-w-md flex-col gap-8">
          {/* Default */}

          <Field label="Email" helperText="We will never share your email">
            <Input placeholder="Enter your email" />
          </Field>

          {/* Required */}

          <Field label="Username" required>
            <Input placeholder="Username" />
          </Field>

          {/* Filled */}

          <Field label="Full name" helperText="Your public display name">
            <Input defaultValue="Negar Rezaei" />
          </Field>

          {/* Error */}

          <Field
            label="Email"
            error
            errorMessage="Please enter a valid email address"
          >
            <Input placeholder="example@mail.com" error />
          </Field>

          {/* Required + Error */}

          <Field
            label="Password"
            required
            error
            errorMessage="Password is required"
          >
            <Input type="password" error />
          </Field>

          {/* Disabled */}

          <Field label="Disabled field" helperText="This field is disabled">
            <Input placeholder="Disabled" disabled />
          </Field>

          {/* Readonly */}

          <Field
            label="Readonly field"
            helperText="This value cannot be edited"
          >
            <Input defaultValue="Readonly value" readOnly />
          </Field>

          {/* With Left Adornment */}

          <Field label="Search">
            <Input
              placeholder="Search..."
              leftAdornment={<Icon name="warning" size={18} />}
            />
          </Field>

          {/* With Right Adornment */}

          <Field label="Password">
            <Input
              placeholder="Password"
              type="password"
              rightAdornment={<Icon name="warning" size={18} />}
            />
          </Field>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 heading-md">Modal</h2>

        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setDefaultModalOpen(true)}>
            Open Default Modal
          </Button>

          <Button variant="danger" onClick={() => setDangerModalOpen(true)}>
            Open Danger Modal
          </Button>

          <Button variant="secondary" onClick={() => setLargeModalOpen(true)}>
            Open Large Modal
          </Button>
        </div>

        {/* Default Modal */}

        <Modal
          open={defaultModalOpen}
          onOpenChange={setDefaultModalOpen}
          size="sm"
        >
          <ModalHeader
            title="Create project"
            description="Add a new project to workspace"
          />

          <ModalBody>This is default modal content.</ModalBody>

          <ModalFooter>
            <Button
              variant="secondary"
              onClick={() => setDefaultModalOpen(false)}
            >
              Cancel
            </Button>

            <Button>Confirm</Button>
          </ModalFooter>
        </Modal>

        {/* Danger Modal */}

        <Modal
          open={dangerModalOpen}
          onOpenChange={setDangerModalOpen}
          size="sm"
          variant="danger"
        >
          <ModalHeader
            title="Delete item"
            description="This action cannot be undone"
          />

          <ModalBody icon={<Icon name="warning" size={56} />}>
            Are you sure you want to delete this item?
          </ModalBody>

          <ModalFooter>
            <Button
              variant="secondary"
              onClick={() => setDangerModalOpen(false)}
            >
              Cancel
            </Button>

            <Button variant="danger">Delete</Button>
          </ModalFooter>
        </Modal>

        {/* Large Modal */}

        <Modal open={largeModalOpen} onOpenChange={setLargeModalOpen} size="lg">
          <ModalHeader title="Large Modal" description="Large content area" />

          <ModalBody>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              Large modal content
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="secondary"
              onClick={() => setLargeModalOpen(false)}
            >
              Close
            </Button>

            <Button>Save</Button>
          </ModalFooter>
        </Modal>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 heading-md">Checkbox</h2>

        <div className="flex flex-col gap-8">
          {/* Checked */}
          <div className="flex items-center gap-6">
            <Checkbox checked={checked} onCheckedChange={setChecked} />

            <Checkbox defaultChecked className="pointer-events-none" />

            <Checkbox defaultChecked className="pointer-events-none" />

            <Checkbox defaultChecked disabled />
          </div>

          {/* Unchecked */}
          <div className="flex items-center gap-6">
            <Checkbox />

            <Checkbox className="pointer-events-none" />

            <Checkbox className="pointer-events-none" />

            <Checkbox disabled />
          </div>

          {/* Indeterminate */}
          <div className="flex items-center gap-6">
            <Checkbox indeterminate />

            <Checkbox indeterminate className="pointer-events-none" />

            <Checkbox indeterminate className="pointer-events-none" />

            <Checkbox indeterminate disabled />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 heading-md">Toast</h2>
        <Toast
          variant="success"
          title="Saved"
          description="Successfully"
          className="mx-4"
          icon={<Icon name="check" size={16} />}
        />
        <Toast
          variant="error"
          title="Failed"
          description="Try again"
          icon={<Icon name="warning" size={16} />}
        />
      </section>

      <section className="mt-12">
        <h2 className="mb-6 heading-md">Link Button</h2>

        <div className="flex items-center gap-12">
          <LinkButton href="#">Label</LinkButton>

          <LinkButton
            href="#"
            className="pointer-events-none text-link-button-hover"
          >
            Label
          </LinkButton>

          <LinkButton
            href="#"
            className="pointer-events-none text-link-button-active"
          >
            Label
          </LinkButton>

          <LinkButton href="#" disabled>
            Label
          </LinkButton>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 heading-md">Dropdown Item</h2>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem className="pointer-events-none bg-dropdown-item-bg-hover text-dropdown-item-text-hover">
          Item
        </DropdownItem>
        <DropdownItem className="pointer-events-none bg-dropdown-item-bg-active text-dropdown-item-text-active">
          Item
        </DropdownItem>
        <DropdownItem loading>Saving...</DropdownItem>
        <DropdownItem disabled>Item</DropdownItem>{" "}
      </section>

      <section className="mt-12">
        <h2 className="mb-6 heading-md">Pagination</h2>

        <div className="flex flex-col gap-8">
          {/* Default */}

          <Pagination page={page} totalPages={20} onPageChange={setPage} />

          {/* Disabled */}

          <Pagination page={10} totalPages={20} disabled />
        </div>
      </section>

      <section className="mt-12 ">
        <h2 className="mb-6 heading-md">Sidebar Menu Item</h2>
        <div className="flex w-64 flex-col gap-3 border border-dashed border-violet-400 p-5">
          <SidebarMenuItem title="Title" />

          <SidebarMenuItem
            title="Title"
            className="pointer-events-none bg-sidebar-menu-bg-hover text-sidebar-menu-text-hover"
          />

          <SidebarMenuItem
            title="Title"
            className="pointer-events-none bg-sidebar-menu-bg-pressed text-sidebar-menu-text-hover"
          />

          <SidebarMenuItem title="Title" selected />

          <SidebarMenuItem
            title="Title"
            selected
            className="pointer-events-none bg-sidebar-menu-bg-selected-hover text-sidebar-menu-text-hover"
          />
        </div>

        <div className="border-l border-border-primary pl-4 mt-5">
          <div className="flex w-64 flex-col gap-1">
            <SidebarMenuItem title="Title" selected />
            <SidebarMenuItem title="Title" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 heading-md">Header</h2>
        <Header
          title={<span className="body-md">Artist</span>}
          value={<span className="body-md-strong">Dashboard</span>}
          leading={
            <div className="rounded bg-header-preview-bg body-md-strong px-3 py-2">
              Preview
            </div>
          }
          trailing={
            <>
              <Button variant="secondary">Log out</Button>
            </>
          }
        />
      </section>
    </main>
  );
}
