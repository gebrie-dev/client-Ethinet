// src/components/Footer.js
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaEnvelope, 
  FaPhone,
  FaBullseye,
  FaUsers,
  FaBriefcase,
  FaLanguage,
  FaLightbulb,
  FaChalkboardTeacher 
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterColumns,
  FooterColumn,
  FooterHeading,
  FooterList,
  FooterListItem,
  SocialIcons,
  SocialIcon,
  ContactInfo,
  FooterBottom,
} from '../styles/Footer.styled';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterColumns>
        <FooterColumn>
          <FooterHeading>About</FooterHeading>
          <FooterList>
            <FooterListItem>
              <Link to="/about#mission" className="hover:text-orange-400 flex items-center">
                <FaBullseye className="mr-2" /> Mission
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/about#team" className="hover:text-orange-400 flex items-center">
                <FaUsers className="mr-2" /> Team
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/career" className="hover:text-orange-400 flex items-center">
                <FaBriefcase className="mr-2" /> Careers
              </Link>
            </FooterListItem>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Services</FooterHeading>
          <FooterList>
            <FooterListItem>
              <Link to="/services#translation" className="hover:text-orange-400 flex items-center">
                <FaLanguage className="mr-2" /> Translation
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/services#digital-marketing" className="hover:text-orange-400 flex items-center">
                <FaLightbulb className="mr-2" /> Digital Marketing
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link to="/services#tutoring" className="hover:text-orange-400 flex items-center">
                <FaChalkboardTeacher className="mr-2" /> Tutoring
              </Link>
            </FooterListItem>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Connect</FooterHeading>
          <SocialIcons>
            <SocialIcon href="#">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="#">
              <FaYoutube />
            </SocialIcon>
          </SocialIcons>
          <ContactInfo>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> Email: <a href="mailto:info@ethionet.et" className="hover:text-orange-400 ml-1">info@ethionet.et</a>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" /> Phone: <a href="tel:+251914696509" className="hover:text-orange-400 ml-1">+251914696509</a>
            </p>
          </ContactInfo>
        </FooterColumn>
      </FooterColumns>
      <FooterBottom>
        <p>&copy; {currentYear} Ethionet Translation and Digital Service. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;