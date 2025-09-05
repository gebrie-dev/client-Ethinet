// src/styles/TrustSection.styled.js
import styled from 'styled-components';

export const TrustContainer = styled.section`
  background-color: #eff6ff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  text-align: center;
`;

export const TrustHeading = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 2rem;
`;

export const LogosCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const LogoImage = styled.img`
  height: 4rem;
  width: auto;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TestimonialSlider = styled.div`
  margin-bottom: 3rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

export const TestimonialSlide = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const QuoteIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -1rem;
  margin-left: -1rem;
  font-size: 3rem;
  color: #dbeafe;
  opacity: 0.5;
`;

export const TestimonialText = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  color: #4b5563;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
`;

export const TestimonialCite = styled.cite`
  font-weight: 600;
  color: #1e40af;
  position: relative;
  z-index: 10;
`;

export const KeyFigures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FigureItem = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FigureIcon = styled.div`
  font-size: 1.875rem;
  color: #fb923c; /* Adjust based on icon */
  margin-right: 0.5rem;

  &.blue {
    color: #2563eb;
  }
`;

export const FigureNumber = styled.span`
  font-size: 2.25rem;
  font-weight: 700;
  color: #fb923c; /* Adjust based on icon */
`;

export const FigureText = styled.p`
  font-size: 1.125rem;
  color: #1e40af;
`;