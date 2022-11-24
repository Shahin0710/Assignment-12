import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const SidebarContext = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const authInfo = {sidebarOpen, handleSidebar}

  return (
       <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
  )
}

export default SidebarContext;
