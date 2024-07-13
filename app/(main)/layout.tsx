"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import SearchCommand from "@/components/search-command";
import Spinner from "@/components/spinner";
import Navigation from "./_components/navigation";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="flex h-full dark:bg-[#1f1f1f] ">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
