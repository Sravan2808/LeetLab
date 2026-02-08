import { currentUserRole } from "@/modules/auth/actions";
import Navbar from "@/modules/home/components/navbar";
import React from "react";
import { GridPattern } from "@/components/ui/grid-pattern";

const RootLayout = async ({ children }) => {
  const userRole = await currentUserRole();
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      <Navbar userRole={userRole} />
      <div className="flex-1 flex flex-col px-4 pb-4">
        {/* Light mode - show GridPattern */}
        <div className="dark:hidden">
          <GridPattern />
        </div>

        {/* Dark mode - show radial gradient background */}
        <div className="hidden dark:block absolute inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] dark:bg-[size:16px_16px]"></div>

        {children}
      </div>
    </main>
  );
};

export default RootLayout;
