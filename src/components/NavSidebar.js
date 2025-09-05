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
          <Link to="/" onClick={toggleSidebar} className="text-blue-700 hover:text-orange-500 text-lg font-medium">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <DropdownToggle onClick={toggleDropdown} className="flex items-center justify-between">
            Services <FaChevronDown className={`ml-2 text-sm ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </DropdownToggle>
          <DropdownMenu className={isDropdownOpen ? '' : 'hidden'}>
            <DropdownItem>
              <Link to="/services#translation" onClick={toggleSidebar} className="text-blue-600 hover:text-orange-400">
                Translation
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/services#digital-marketing" onClick={toggleSidebar} className="text-blue-600 hover:text-orange-400">
                Digital Marketing
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/services#tutoring" onClick={toggleSidebar} className="text-blue-600 hover:text-orange-400">
                Tutoring
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <Link to="/products" onClick={toggleSidebar} className="text-blue-700 hover:text-orange-500 text-lg font-medium">
            Products
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/academy" onClick={toggleSidebar} className="text-blue-700 hover:text-orange-500 text-lg font-medium">
            Academy
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/career" onClick={toggleSidebar} className="text-blue-700 hover:text-orange-500 text-lg font-medium">
            Career
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about" onClick={toggleSidebar} className="text-blue-700 hover:text-orange-500 text-lg font-medium">
            About Us
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/institutional-services" onClick={toggleSidebar} className="text-blue-700 hover:text-orange-500 text-lg font-medium">
            Institutional Services
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/booking-payment" onClick={toggleSidebar} className="text-blue-700 hover:text-orange-500 text-lg font-medium">
            Booking & Payments
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" onClick={toggleSidebar} className="text-blue-700 hover:text-orange-500 text-lg font-medium">
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