import React from "react";
import Header from "@/components/Header";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="dashboard">
      {/* sidebar */}
      <h1>Sidebar</h1>
      <div className="dashboard__content">
        {/* courseSideBar */}
        course
        <div className="dashboard__main">
          {/* navbar */}
          navbar
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout;
