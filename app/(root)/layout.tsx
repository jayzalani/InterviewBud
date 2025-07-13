import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="bg-gradient-to-r from-black to-blue-900 bg-clip-text text-transparent">PrepBud</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;