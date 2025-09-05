// src/styles/AboutVisionSection.styled.js
import styled from 'styled-components';

export const AboutVisionContainer = styled.section`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

export const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.875rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Content = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const ExpandableContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.7s ease-in-out;

  &.is-expanded {
    max-height: 1000px;
  }
`;

export const ToggleButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #1d4ed8;
  }
`;