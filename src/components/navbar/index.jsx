import React, { useState } from 'react';
import { FaReact, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './index.css';
const data = [
  {
    label: "HOME",
    to: '/'
  },
  {
    label: "ABOUT ME",
    to: "/about"
  },
  {
    label: "EXPERIENCE",
    to: "/resume"
  },
  {
    label: "PROJECTS",
    to: "/portfolio"
  },
  {
    label: "SKILLS",
    to: "/skills"
  },
  {
    label: "CONTACT",
    to: "/contact"
  }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__container'>
          <Link to={'/'} className='navbar__container__logo'>
            <h2>Kavya</h2>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active':''}`}>
          {
            data.map((item, key) => (
              <li className='navbar__container__menu_item' key={key}>
                <Link to={item.to} className='navbar__container__menu_item__links'>
                  {item.label}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className='nav-icon' onClick={handleToggleIcon}>
          {
            toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
