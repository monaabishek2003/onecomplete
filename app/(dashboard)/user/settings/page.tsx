import React from "react";
import SharedNotificationSettings from "@/components/SharedNotificationSettings";
const UserSettings = () => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings 
        title="User Settings" 
        subtitle="Manage Your Notification Settings"
      />
    </div>
  )
}

export default UserSettings;
