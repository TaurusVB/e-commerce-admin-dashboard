"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { useEffect } from "react";

export default function SetupPage() {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className=" p-4">Root Page</div>;
}
