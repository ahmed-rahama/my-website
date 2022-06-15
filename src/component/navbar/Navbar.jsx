import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Sidebar } from './Sidebar';
import { IconContext } from 'react-icons';

export default function Navbar() {
  let [sidebar, setSidebar] = useState(false);

  let showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
    <IconContext.Provider value= {{color: '#fff'}} >
      <div className="navbar">
        <Link to="#" className="menu-bar">
          {' '}
          <AiOutlineMenu onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? 'navbar-menu active' : 'navbar-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
          {' '}
          <Link to="#" className="menu-bar">
            {' '}
            <AiOutlineClose />
          </Link>{' '}
          </li>
    

        {Sidebar.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              {' '}
              <Link to={item.path}>
                {item.icon} <span>{item.title}</span>{' '}
              </Link>
            </li>
          );
        })}
            </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
}
