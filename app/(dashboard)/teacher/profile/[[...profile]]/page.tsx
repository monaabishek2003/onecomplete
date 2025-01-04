import React from "react";
import { UserProfile } from "@clerk/nextjs";
import Header from "@/components/Header";

const page = () => {
  return (
    <div>
      <Header title="Profile" subtitle="View your profile"/>
      <UserProfile/>
    </div>
  )
}

export default page
