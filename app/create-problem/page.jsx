import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/lib/generated/enums";
import { currentUserRole } from "@/modules/auth/actions";
import CreateProblemForm from "@/modules/problems/components/create-problem-form";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const CreateProblemPage = async () => {
  const user = await currentUser();
  const userRole = await currentUserRole();

  if (userRole !== UserRole.ADMIN) {
    redirect("/");
  }
  return (
    <section className="flex flex-col items-center justify-center  mx-4 my-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Link href={"/"}>
          <Button variant="outline" size="icon">
            <ArrowLeft className="size-4" />
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-amber-400">
          Welcome {user?.firstName}! Create a Problem
        </h1>
        <AnimatedThemeToggler />
      </div>
      <CreateProblemForm />
    </section>
  );
};

export default CreateProblemPage;
