'use client'
import React from "react";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import Loading from "@/components/Loading";

const layout = ({children}: {children: React.ReactNode}) => {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return <Loading />;
  return (
    <SidebarProvider>
      <div className="dashboard">
        <AppSidebar/>
        <div className="dashboard__content">
          <div className="dashboard__main">
            <Navbar/>
            <main className="dashboard__body">{children}</main>
            
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default layout;
