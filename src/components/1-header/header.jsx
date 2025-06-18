import React, { useEffect, useState } from 'react';
import './header.css'; // Assuming your CSS is here

export default function Header() {
  const [showMenu, setshowMenu] = useState(false);
  const [Swich, Setswich] = useState(window.localStorage.getItem("mode") ?? "dark");

  useEffect(() => {
    if (Swich === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [Swich]);

  // Function to handle scrolling
  const handleNavLinkClick = (targetScrollY) => {
    if (targetScrollY === 'end') {
      // Scroll to the very bottom of the document
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      // Scroll to a specific Y position
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
    // Close the mobile menu if it's open
    setshowMenu(false);
  };

  return (
    <header className='flex'>

      <button className='minu icon-menu' onClick={() => {
        setshowMenu(true);
      }} />

      <div /> {/* This div seems to be an empty spacer, you might want to review its purpose */}

      <nav>
        <ul className='flex'>
          {/* Use onClick to trigger scrolling */}
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavLinkClick(0); }}>About</a></li>
          <li><a href="#project" onClick={(e) => { e.preventDefault(); handleNavLinkClick(304); }}>Project</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick('end'); }}>Contact</a></li>
        </ul>
      </nav>

      <button
        onClick={() => {
          window.localStorage.setItem("mode", Swich === "dark" ? "light" : "dark");
          Setswich(Swich === "dark" ? "light" : "dark");
        }}
        className={Swich === "dark" ? 'd&n icon-moon-o' : 'd&n icon-sun'}
      />

      {showMenu && (
        <div className="fixed ">
          <ul className='modal testing'>
            <li>
              <button className='icon-cross' onClick={() => {
                setshowMenu(false);
              }} />
            </li>
            {/* Links for the mobile menu - also trigger scrolling */}
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavLinkClick(0); }}>About</a></li>
            <li><a href="#project" onClick={(e) => { e.preventDefault(); handleNavLinkClick(304); }}>Project</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick('end'); }}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}