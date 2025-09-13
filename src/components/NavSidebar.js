// src/components/NavSidebar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaChevronDown } from 'react-icons/fa';
import {
  NavSidebarContainer,
  CloseButton,
  NavList,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  OrderButton,
} from '../styles/NavSidebar.styled';

function NavSidebar({ isOpen, toggleSidebar, openModal }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <NavSidebarContainer className={isOpen ? 'is-active' : ''}>
      <CloseButton onClick={toggleSidebar} aria-label="Close navigation menu">
        <FaTimes />
      </CloseButton>
      <NavList>
        <NavItem>
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <DropdownToggle onClick={toggleDropdown} className={isDropdownOpen ? 'rotate-180' : ''}>
            Services <FaChevronDown className="ml-2 text-sm" />
          </DropdownToggle>
          <DropdownMenu className={isDropdownOpen ? 'show' : ''}>
            <DropdownItem>
              <Link to="/services#translation" onClick={toggleSidebar}>
                Translation
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/services#digital-marketing" onClick={toggleSidebar}>
                Digital Marketing
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/services#tutoring" onClick={toggleSidebar}>
                Tutoring
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <Link to="/products" onClick={toggleSidebar}>
            Products
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/academy" onClick={toggleSidebar}>
            Academy
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/career" onClick={toggleSidebar}>
            Career
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about" onClick={toggleSidebar}>
            About Us
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/institutional-services" onClick={toggleSidebar}>
            Institutional Services
          </Link>
        </NavItem>
       
        <NavItem>
          <Link to="/contact" onClick={toggleSidebar}>
            Contact Us
          </Link>
        </NavItem>
        <NavItem>
          <OrderButton onClick={() => openModal('order')}>Start Order</OrderButton>
        </NavItem>
      </NavList>
    </NavSidebarContainer>
  );
}

export default NavSidebar;