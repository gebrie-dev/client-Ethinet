// src/styles/NavSidebar.styled.js
import styled from 'styled-components';

export const NavSidebarContainer = styled.div`
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: calc(8rem + 3.5rem);
  right: 0;
  width: 80%;
  max-width: 300px;
  height: calc(100% - (8rem + 3.5rem));
  background-color: #ffffff;
  z-index: 50;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  border-bottom-left-radius: 0.75rem;

  &.is-active {
    transform: translateX(0);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;

  &:hover {
    color: #1f2937;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 3rem;
`;

export const NavItem = styled.li`
  a {
    display: block;
    padding: 0.75rem 0;
    color: #1e40af;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #fb923c;
    }
  }
`;

export const DropdownToggle = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  color: #1e40af;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #fb923c;
  }
`;

export const DropdownMenu = styled.ul`
  padding-left: 1rem;
  margin-top: 0.5rem;
  border-left: 2px solid #bfdbfe;
`;

export const DropdownItem = styled.li`
  a {
    display: block;
    padding: 0.5rem 0;
    font-size: 0.9rem;
    color: #3b82f6;

    &:hover {
      color: #fb923c;
    }
  }
`;

export const OrderButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #fb923c;
  color: #ffffff;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    background-color: #f97316;
  }
`;