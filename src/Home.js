import React, { useState, useEffect, useRef } from 'react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const orangeContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        orangeContainerRef.current &&
        !orangeContainerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <div className="menu-container bg-orange-300 fixed top-0 left-0 w-full h-[60px] flex justify-center z-50" ref={orangeContainerRef}>
        <div className="menu-icon absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleMenu}>
          <div className="bar h-[3px] w-5 bg-gray-800 my-1"></div>
          <div className="bar h-[3px] w-5 bg-gray-800 my-1"></div>
          <div className="bar h-[3px] w-5 bg-gray-800 my-1"></div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
      )}
      {isMenuOpen && (
        <nav className="navigation-menu bg-green-950 fixed top-[60px] left-0 w-60 h-[calc(100%-60px)] p-2 overflow-y-auto transition-all duration-300 z-50" ref={menuRef}>
          <ul>
            <li><a href="#" className="block py-2 px-4 text-white">Home</a></li>
            <li><a href="#" className="block py-2 px-4 text-white">About</a></li>
            <li className="parent-menu">
              <a href="#" className="block py-2 px-4 text-white">Services</a>
              <ul className="submenu">
                <li><a href="#" className="block py-2 px-4 text-white">Service 1</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Service 2</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Service 3</a></li>
                {/* Add more submenu items as needed */}
              </ul>
            </li>
            <li className="parent-menu">
              <a href="#" className="block py-2 px-4 text-white">Services</a>
              <ul className="submenu">
                <li><a href="#" className="block py-2 px-4 text-white">Service 1</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Service 2</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Service 3</a></li>
                {/* Add more submenu items as needed */}
              </ul>
            </li>
            <li className="parent-menu">
              <a href="#" className="block py-2 px-4 text-white">Services</a>
              <ul className="submenu">
                <li><a href="#" className="block py-2 px-4 text-white">Service 1</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Service 2</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Service 3</a></li>
                {/* Add more submenu items as needed */}
              </ul>
            </li>
            <li className="parent-menu">
              <a href="#" className="block py-2 px-4 text-white">Services</a>
              <ul className="submenu">
                <li><a href="#" className="block py-2 px-4 text-white">Service 1</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Service 2</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Service 3</a></li>
                {/* Add more submenu items as needed */}
              </ul>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      )}
      <div className="content ml-60 p-4">
        {/* Main content */}
      </div>
    </div>
  );
}

export default Home;
