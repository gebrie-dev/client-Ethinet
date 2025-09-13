import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt,
  FaBullseye,
  FaUsers,
  FaBriefcase,
  FaLanguage,
  FaLightbulb,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import {
  FooterContainer,
  Logo,
  FooterGrid,
  FooterColumn,
  FooterHeading,
  FooterList,
  FooterListItem,
  SocialIcons,
  SocialIcon,
  ContactInfo,
  FooterBottom,
  PoweredBy,
} from '../styles/Footer.styled';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterGrid>
        {/* Ethionet Logo and Socials Column */}
        <FooterColumn>
          <Logo src="/logo.png" alt="Ethionet Logo" />
          <p className="description">
            Your partner for language and digital solutions.
          </p>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>

        {/* About & Services Links Column */}
        <FooterColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterList>
            <FooterListItem>
              <Link to="/about">
                <FaBullseye /> About Us
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/services">
                <FaLanguage /> Our Services
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/career">
                <FaBriefcase /> Careers
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/contact">
                <FaUsers /> Contact Us
              </Link>
            </FooterListItem>
          </FooterList>
        </FooterColumn>

        {/* Legal & Policy Links Column */}
        <FooterColumn>
          <FooterHeading>Resources</FooterHeading>
          <FooterList>
            <FooterListItem>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/terms-of-service">Terms of Service</Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/faq">FAQ</Link>
            </FooterListItem>
          </FooterList>
        </FooterColumn>

        {/* Contact Info Column */}
        <FooterColumn>
          <FooterHeading>Get in Touch</FooterHeading>
          <ContactInfo>
            <p>
              <FaMapMarkerAlt /> Addis Ababa, Ethiopia
            </p>
            <p>
              <FaEnvelope /> <a href="mailto:info@ethionet.et">info@ethionet.et</a>
            </p>
            <p>
              <FaPhone /> <a href="tel:+251914696509">+251914696509</a>
            </p>
          </ContactInfo>
        </FooterColumn>
      </FooterGrid>

      <FooterBottom>
        <p>&copy; {currentYear} Ethionet Translation and Digital Service. All Rights Reserved.</p>
        <PoweredBy>
          Powered by <a href="https://gebrie.netlify.app" target="_blank" rel="noopener noreferrer">Gebrie</a>
        </PoweredBy>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;