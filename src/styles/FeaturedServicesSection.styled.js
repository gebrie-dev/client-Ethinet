// src/styles/FeaturedServicesSection.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServicesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ServiceCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 0.75rem;
`;

export const CardText = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

export const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fb923c;
  font-weight: 600;

  &:hover {
    color: #f97316;
  }
`;