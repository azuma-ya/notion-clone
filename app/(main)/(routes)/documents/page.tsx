"use client";

import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    }).then((documentId) => router.push(`/documents/${documentId}`));

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New node created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/next.svg"
        height="300"
        width="300"
        alt="enpty"
        className="dark:invert"
      />
      <h2 className="text-lg font-medium">
        Welecome to {user?.firstName}&apos;s Azmotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 size-4" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
