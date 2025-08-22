import React from 'react';
import Header from '../components/header/Header';
import SideNavigation from '../components/sidenav/SideNav';
import { useState } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSideNavCollapsed, setIsSideNavCollapsed] = useState(true)
  return (
    <>
      <Header setIsSideNavCollapsed={setIsSideNavCollapsed} />
      <div className="main-layout">
        <SideNavigation isSideNavCollapsed={isSideNavCollapsed} setIsSideNavCollapsed={setIsSideNavCollapsed}/>
        <main>
          {/* NOTE: This is where the main content of the page will be rendered */}
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
