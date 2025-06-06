import type { Metadata } from "next";
import { SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(protected)/components/app-sidebar";

import DynamicBreadcrumb from "./components/breadcrumb";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <DynamicBreadcrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col">
        {children}
        </div>
          </SidebarInset>
      
        </SidebarProvider>
  );
}
