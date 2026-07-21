"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";

import { useLocalStorageUser } from "@/hooks/useLocalStorage";
import { useLogout } from "@/hooks/useLogout";
import { Icon } from "@/components/ui/icon";

export function DashboardHeader() {
  const { logout } = useLogout();

  const user = useLocalStorageUser();

  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  return (
    <>
      <Header
        leading={
          <span className="lg:body-md">
            Welcome{" "}
            <span className="body-md-strong">{user?.username ?? "User"}</span>{" "}
            👋
          </span>
        }
        title="ArvanCloud Challenge"
        trailing={
          <>
            {/* Desktop */}
            <Button
              variant="secondary"
              onClick={() => setLogoutModalOpen(true)}
              className="hidden sm:flex"
            >
              Logout
            </Button>

            {/* Mobile */}
            <Button
              variant="secondary"
              onClick={() => setLogoutModalOpen(true)}
              className="flex sm:hidden"
              aria-label="Logout"
            >
              <Icon name="logout" size={24} />
            </Button>
          </>
        }
      />

      <Modal
        open={logoutModalOpen}
        onOpenChange={setLogoutModalOpen}
        size="sm"
        variant="danger"
      >
        <ModalHeader title="Logout" />

        <ModalBody>Are you sure you want to logout?</ModalBody>

        <ModalFooter>
          <Button
            variant="danger"
            onClick={() => {
              logout();
              setLogoutModalOpen(false);
            }}
          >
            Logout
          </Button>

          <Button variant="secondary" onClick={() => setLogoutModalOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
