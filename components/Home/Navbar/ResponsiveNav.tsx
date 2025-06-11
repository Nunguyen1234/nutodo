
"use client";
// import Nav from './Nav'
import MobileNav from './MobileNav'
import { useState,useEffect } from 'react';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  // const handNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  // const [user, setUser] = useState<{ email: string } | null>(null);



  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
        {/* <Nav openNav={handNavShow} user={user}/> */}
        <MobileNav showNav={showNav} closeNav={handleCloseNav}/>
    </div>
  )
}

export default ResponsiveNav
