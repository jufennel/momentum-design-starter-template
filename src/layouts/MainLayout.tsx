import React from 'react';
import Header from '../components/header/Header';
import SideNavigation from '../components/sidenav/SideNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-layout">
        <SideNavigation />
        <main>
          {/* NOTE: This is where the main content of the page will be rendered */}
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
