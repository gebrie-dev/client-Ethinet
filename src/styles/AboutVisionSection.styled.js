// src/styles/AboutVisionSection.styled.js
import styled, { keyframes, css } from 'styled-components';

// A general fade-in animation for all content
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutVisionContainer = styled.section`
  background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%);
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: 1.5rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px; /* Slightly thicker line */
    background: linear-gradient(90deg, #3b82f6, #f97316); /* Updated gradient colors */
  }

  @media (max-width: 768px) {
    padding: clamp(1.5rem, 4vw, 3rem);
  }
`;

export const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  text-align: center;

  svg {
    color: #f97316; /* Use a consistent accent color */
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-right: 0.75rem;
    animation: ${fadeIn} 0.8s ease-out;
  }
`;

export const Content = styled.p`
  color: #4b5563; /* A more professional gray */
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: clamp(1rem, 2vw, 1.15rem);
`;

export const ExpandableContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(-10px);

  ${(props) =>
    props.$isExpanded &&
    css`
      max-height: 1000px; /* Large enough to handle content */
      opacity: 1;
      transform: translateY(0);
      transition: max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1), 
                  opacity 0.5s ease 0.2s, 
                  transform 0.5s ease 0.2s;
    `}

  p {
    color: #4b5563;
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ToggleButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: #ffffff;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: linear-gradient(135deg, #1e40af, #1d4ed8);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    margin-left: 0.5rem;
    font-size: 0.9em;
    transition: transform 0.3s ease;
  }
`;