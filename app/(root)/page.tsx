"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  const storeModal = useStoreModal();

  return (
    <>
      <Button onClick={storeModal.onOpen}>click me</Button>
      <div className="p-4">Root Page</div>
    </>
  );
};

export default SetupPage;
