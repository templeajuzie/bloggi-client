'use client';
import React, { useState } from 'react';
import NavbarV2 from '@/Components/Navbar/NavbarV2';
import logo from '../../app//Resources/Images/bloggilogo.png';
import SideBarComponent from '@/Components/Sidebar/SideBarComponent';
import Dashboard3 from '@/Components/Home/TopVoice';
import PostHome2 from '@/Components/Home/PostHome2';
import BottomNav from '@/Components/BottomNavigation/BottomNav';

function Layout({ children }) {
  const [nav, setNav] = useState(false);

  const navOpen = () => {
    setNav(true);
    document.body.style.overflow = 'hidden';
  };

  const navClose = () => {
    setNav(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='relative'>
      {/* {nav && (
        <div className='h-screen w-screen fixed top-0 z-50 bg-gray-400 bg-opacity-40'>
          <SideBarComponent nav={nav} navClose={navClose} />
        </div>
      )} */}
      <main className='flex flex-row relative'>
        <SideBarComponent nav={nav} />
        <div className='w-[100%]  flex flex-col'>
          <NavbarV2 navOpen={navOpen} />
          {children}
        </div>
        <BottomNav />
      </main>
    </div>
  );
}

export default Layout;
