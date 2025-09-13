import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1a3680;
  color: #e2e8f0;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 4px solid #3b82f6;
  position: relative; /* Added for positioning of 'PoweredBy' */
`;

export const Logo = styled.img`
  height: auto;
  width: auto;
  max-width: 150px;
  object-fit: contain;
  margin: 0 auto 1.5rem;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    align-items: flex-start;
    text-align: left;
    .description {
      font-size: 0.95rem;
      color: #cbd5e1;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }
`;

export const FooterHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ffffff;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterListItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1rem;
  
  a {
    color: #e2e8f0;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.2s ease;
    display: flex;
    align-items: center;

    &:hover, &:focus {
      color: #fb923c;
    }
    
    svg {
      margin-right: 0.75rem;
      font-size: 1.2rem;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-top: auto;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  color: #e2e8f0;
  font-size: 1.6rem;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover, &:focus {
    color: #fb923c;
    transform: translateY(-5px) scale(1.1);
  }
`;

export const ContactInfo = styled.div`
  font-size: 1rem;
  
  p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  
  svg {
    margin-right: 0.75rem;
    font-size: 1.2rem;
    color: #fb923c;
  }
  
  a {
    color: #e2e8f0;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover, &:focus {
      color: #fb923c;
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }

  @media (max-width: 767px) {
    /* Hide on small screens to avoid clutter */
    display: none;
  }
`;

export const PoweredBy = styled.p`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #94a3b8;
  
  a {
    color: #fb923c; /* A more impressive, vibrant color */
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 800;
    letter-spacing: 0.05em;
    
    &:hover, &:focus {
      color: #ffd166;
      transform: scale(1.05);
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    }
  }
  
  @media (max-width: 767px) {
    position: static;
    margin-top: 1rem;
    text-align: center;
  }
`;