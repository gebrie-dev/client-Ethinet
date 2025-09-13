// src/styles/TrustSection.styled.js
import styled, { keyframes, css } from 'styled-components';

// Keyframes for the continuous logo scroll
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// New wrapper for the infinite carousel
export const LogosCarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
`;

export const TrustContainer = styled.section`
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  padding: 4rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #3b82f6, #fb923c);
  }
`;

export const TrustHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #3b82f6, #fb923c);
    border-radius: 2.5px;
  }
`;

export const LogosCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200%;
  gap: 3rem;
  padding: 2rem 0;
  animation: ${scroll} 25s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

export const LogoImage = styled.img`
  height: clamp(3rem, 6vw, 5rem);
  width: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  filter: grayscale(100%) opacity(0.8);
  min-width: 120px;

  &:hover {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.05);
  }
`;

export const TestimonialSlider = styled.div`
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  .slick-dots {
    bottom: -3rem;
    
    li button:before {
      font-size: 10px;
      color: #94a3b8;
    }
    
    li.slick-active button:before {
      color: #fb923c;
    }
  }
`;

export const TestimonialSlide = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%);
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 1px solid #e2e8f0;
  margin: 0 1rem;
`;

export const QuoteIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-size: 3rem;
  color: #e0e7ff;
  opacity: 0.5;
  z-index: 1;
`;

export const TestimonialText = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-style: italic;
  color: #4b5563;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
  line-height: 1.7;
`;

export const TestimonialCite = styled.cite`
  font-weight: 600;
  color: #1e40af;
  position: relative;
  z-index: 10;
  font-size: 1.1rem;
  display: block;
  text-align: right;
  font-style: normal;
`;

export const KeyFigures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;

export const FigureItem = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #fb923c);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const FigureIcon = styled.div`
  font-size: 2.5rem;
  color: #fb923c;
  margin-right: 0.75rem;
  transition: all 0.3s ease;
  
  ${FigureItem}:hover & {
    transform: scale(1.1);
  }

  ${(props) => props.blue && css`
    color: #2563eb;
  `}
`;

export const FigureNumber = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #fb923c;
  transition: all 0.3s ease;

  ${FigureItem}:hover & {
    transform: scale(1.05);
  }

  ${(props) => props.blue && css`
    color: #2563eb;
  `}
`;

export const FigureText = styled.p`
  font-size: 1.25rem;
  color: #1e40af;
  font-weight: 600;
  margin-top: 0.5rem;
`;

