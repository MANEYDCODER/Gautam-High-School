import React from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "sonner";

interface AdminContentLayoutProps {
  children: React.ReactNode;
}

const AdminContentLayout = ({ children }: AdminContentLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4">
            <SidebarTrigger className="text-gray-600 hover:text-sky-600" />
            <div className="flex items-center gap-2 flex-1">
              <Link href="/admin">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-sky-600">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Admin
                </Button>
              </Link>
            </div>
          </header>
          <main className="flex-1 p-6">
            
        <ReduxProvider>
          {children}
          <Toaster/>
        </ReduxProvider>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminContentLayout;