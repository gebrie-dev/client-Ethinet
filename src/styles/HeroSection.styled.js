// src/styles/HeroSection.styled.js
import styled from 'styled-components';

export const HeroContainer = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  margin-bottom: 3rem;
`;

export const HeroContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 700;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;

  &.bg-orange-500 {
    background-color: #fb923c;
  }

  &.bg-orange-500:hover {
    background-color: #f97316;
  }

  &.bg-blue-600 {
    background-color: #2563eb;
  }

  &.bg-blue-600:hover {
    background-color: #1d4ed8;
  }

  color: #ffffff;
`;