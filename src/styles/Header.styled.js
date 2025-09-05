import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-image: url('/images/header-background.png');
  background-size: cover;
  background-position: center;
  background-color: #1e40af;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Slightly lighter overlay for better contrast */
    z-index: 1;
    border-radius: inherit;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const HeaderCenter = styled.div`
  flex: 2;
  text-align: center;

  h1 {
    font-family: 'Inter', sans-serif; /* Modern font */
    letter-spacing: 0.02em;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const HeaderRight = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
  max-width: 150px;
  object-fit: contain;
  border-radius: 0.25rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    height: 50px;
    max-width: 200px;
  }
`;

export const MenuToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fb923c;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #bfdbfe;
  }
`;