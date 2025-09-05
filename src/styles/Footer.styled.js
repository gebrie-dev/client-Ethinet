// src/styles/Footer.styled.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1e3a8a;
  color: #ffffff;
  padding: 3rem 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fb923c;
  margin-bottom: 1rem;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterListItem = styled.li`
  a {
    color: #ffffff;
    transition: color 0.2s;

    &:hover {
      color: #fb923c;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.25rem;
  transition: color 0.2s;

  &:hover {
    color: #fb923c;
  }
`;

export const ContactInfo = styled.div`
  color: #d1d5db;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: #d1d5db;
    transition: color 0.2s;

    &:hover {
      color: #fb923c;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  color: #9ca3af;
  border-top: 1px solid #1e40af;
  padding-top: 2rem;
`;