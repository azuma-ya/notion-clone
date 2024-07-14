"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/next.svg"
        height="300"
        width="300"
        alt="Error"
        className="dark:invert"
      />
      <h2 className="text-xl font-medium">Something went wrong</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
