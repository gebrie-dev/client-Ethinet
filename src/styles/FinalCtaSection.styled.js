// src/styles/FinalCtaSection.styled.js
import styled from "styled-components";

export const CtaContainer = styled.section`
  background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
  color: #ffffff;
  padding: 4rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(30, 64, 175, 0.3);
  text-align: center;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #fb923c);
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const CtaHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CtaText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CtaButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  padding: 1.25rem 2.5rem;
  font-weight: 700;
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
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

  &.bg-orange-500 {
    background: linear-gradient(135deg, #fb923c, #f97316);
    color: #ffffff;
  }

  &.bg-orange-500:hover {
    background: linear-gradient(135deg, #f97316, #ea580c);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(251, 146, 60, 0.4);
  }

  &.bg-white {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  &.bg-white:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 280px;
  }
`;
