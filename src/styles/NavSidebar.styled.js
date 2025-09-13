// src/styles/NavSidebar.styled.js
import styled from 'styled-components';

export const NavSidebarContainer = styled.div`
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 350px;
  height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  z-index: 1000;
  padding: 2rem;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #fb923c);
  }

  &.is-active {
    transform: translateX(0);
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #3b82f6, #fb923c);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #1d4ed8, #f97316);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(107, 114, 128, 0.1);
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: rgba(107, 114, 128, 0.2);
    transform: scale(1.1);
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 4rem;
  list-style: none;
`;

export const NavItem = styled.li`
  a {
    display: block;
    padding: 1rem 1.5rem;
    color: #1e40af;
    font-weight: 600;
    transition: all 0.3s ease;
    border-radius: 0.75rem;
    text-decoration: none;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
      transition: left 0.5s;
    }

    &:hover {
      color: #fb923c;
      background: rgba(59, 130, 246, 0.05);
      transform: translateX(8px);

      &::before {
        left: 100%;
      }
    }
  }
`;

export const DropdownToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  color: #1e40af;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 0.75rem;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover {
    color: #fb923c;
    background: rgba(59, 130, 246, 0.05);
    transform: translateX(8px);

    &::before {
      left: 100%;
    }
  }

  svg {
    transition: transform 0.3s ease;
  }

  &.rotate-180 svg {
    transform: rotate(180deg);
  }
`;

export const DropdownMenu = styled.ul`
  padding-left: 2rem;
  margin-top: 0.5rem;
  border-left: 3px solid #bfdbfe;
  list-style: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.show {
    max-height: 200px;
  }
`;

export const DropdownItem = styled.li`
  a {
    display: block;
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    color: #3b82f6;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    margin-bottom: 0.25rem;

    &:hover {
      color: #fb923c;
      background: rgba(251, 146, 60, 0.1);
      transform: translateX(4px);
    }
  }
`;

export const OrderButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #fb923c, #f97316);
  color: #ffffff;
  font-weight: 700;
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(251, 146, 60, 0.3);
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, #f97316, #ea580c);
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(251, 146, 60, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;