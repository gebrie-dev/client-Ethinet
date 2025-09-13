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
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(59, 130, 246, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const CardIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(251, 146, 60, 0.1));
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(251, 146, 60, 0.2));
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

export const CardText = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1rem;
`;

export const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #fb923c;
  font-weight: 600;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background: rgba(251, 146, 60, 0.1);
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    color: #ffffff;
    background: #fb923c;
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(251, 146, 60, 0.3);
  }

  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;