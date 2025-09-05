// src/styles/Header.styled.js
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-image: url('/images/header-background.png');
  background-size: cover;
  background-position: center;
  background-color: #1e40af;
  color: #ffffff;
  padding: 3rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    border-radius: inherit;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderCenter = styled.div`
  flex-grow: 1;
  text-align: center;
`;

export const HeaderRight = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 768px) {
    flex-grow: 0;
  }
`;

export const Logo = styled.img`
  height: 2.5rem;
  border-radius: 0.25rem;
`;

export const MenuToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 9999px;

  &:hover {
    background-color: #1e40af;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #bfdbfe;
  }
`;