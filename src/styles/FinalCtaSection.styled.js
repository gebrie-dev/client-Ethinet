// src/styles/FinalCtaSection.styled.js
import styled from 'styled-components';

export const CtaContainer = styled.section`
  background-color: #1e40af;
  color: #ffffff;
  padding: 3rem 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 3rem 0;
`;

export const CtaHeading = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CtaText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const CtaButtons = styled.div`
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

  &.bg-white {
    background-color: #ffffff;
    color: #1e40af;
  }

  &.bg-white:hover {
    background-color: #f3f4f6;
  }
`;