import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1e40af;
  color: #ffffff;
  padding: 3rem 2rem;
  text-align: center;
`;

export const FooterLogo = styled.img`
  height: 50px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
  margin: 0 auto 2rem;
`;

export const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterListItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 1rem;

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fb923c;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fb923c;
  }
`;

export const ContactInfo = styled.div`
  font-size: 1rem;

  p {
    margin-bottom: 0.75rem;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fb923c;
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
`;