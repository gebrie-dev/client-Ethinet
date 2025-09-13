// src/styles/HorizontalNav.styled.js
import styled, { keyframes, css } from "styled-components";
import { NavLink as RouterNavLink, Link } from "react-router-dom";

// Keyframes for animations
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavContainer = styled.nav`
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 3px solid #f97316;
  transition: all 0.3s ease-in-out;
`;

export const NavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: relative;

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

// Using RouterNavLink to get the 'active' class
export const NavLink = styled(RouterNavLink)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #f97316;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  // Active state style for the current page link
  &.active {
    color: #f97316;
    background: rgba(255, 255, 255, 0.1);
    font-weight: 700;
    border-bottom: 2px solid #f97316;
    padding-bottom: calc(0.75rem - 2px); // Adjust padding to maintain layout
  }
`;

export const DropdownToggle = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #f97316;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  svg.rotated {
    transform: rotate(180deg);
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: #f8fafc;
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 1rem 0;
  min-width: 200px;
  list-style: none;
  margin: 0;
  z-index: 1001;
  border: 1px solid rgba(59, 130, 246, 0.1);
  animation: ${slideDown} 0.3s ease;
`;

export const DropdownItem = styled.li`
  a {
    display: block;
    padding: 0.75rem 1.5rem;
    color: #374151;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;

    &:hover {
      color: #f97316;
      background: rgba(249, 115, 22, 0.1);
      border-left-color: #f97316;
      transform: translateX(4px);
    }
  }
`;

export const OrderButton = styled.button`
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);

  &:hover {
    background: linear-gradient(135deg, #ea580c, #f97316);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(249, 115, 22, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f97316;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileNav = styled.div`
  display: none;
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  animation: ${slideDown} 0.3s ease;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileNavItem = styled.div`
  margin-bottom: 0.5rem;
`;

export const MobileNavLink = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #f97316;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MobileDropdownToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #ffffff;
  background: none;
  border: none;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #f97316;
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    transition: transform 0.3s ease;
  }

  svg.rotated {
    transform: rotate(180deg);
  }
`;

export const MobileDropdownMenu = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  animation: ${slideDown} 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 200px;
    }
  }
`;

export const MobileDropdownItem = styled.div`
  a {
    display: block;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 2rem;
    transition: all 0.3s ease;

    &:hover {
      color: #f97316;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;