// src/styles/HeroImageSection.styled.js
import styled, { keyframes, css } from "styled-components";

// Keyframes for professional animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroImageContainer = styled.section`
  position: relative;
  height: 80vh; /* Increased height for more visual presence */
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0 0 2rem 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 70vh;
    min-height: 450px;
    border-radius: 0 0 1rem 1rem;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.8) 0%, /* A bold blue start */
    rgba(30, 64, 175, 0.7) 50%, /* A deeper blue middle */
    rgba(249, 115, 22, 0.6) 100% /* A warm orange end */
  );
  backdrop-filter: blur(4px); /* A subtle blur effect for depth */
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
  color: #ffffff;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${slideInUp} 1s ease-out forwards;
  animation-delay: 0.2s; /* Delay for a staggered effect */

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  opacity: 0.95;
  animation: ${slideInUp} 1s ease-out forwards;
  animation-delay: 0.4s;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: ${slideInUp} 1s ease-out forwards;
  animation-delay: 0.6s;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const HeroButton = styled.button`
  padding: 1rem 2.5rem;
  font-weight: 700;
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;
  min-width: 180px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  ${(props) =>
    props.$variant === "primary" &&
    css`
      background: linear-gradient(135deg, #f97316, #ea580c);
      color: #ffffff;

      &:hover {
        background: linear-gradient(135deg, #ea580c, #f97316);
        transform: translateY(-3px);
        box-shadow: 0 12px 32px rgba(249, 115, 22, 0.4);
      }
    `}

  ${(props) =>
    props.$variant === "secondary" &&
    css`
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border: 2px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-3px);
        box-shadow: 0 12px 32px rgba(255, 255, 255, 0.2);
      }
    `}

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 280px;
  }
`;