// src/components/FinalCtaSection.js
import { Link } from 'react-router-dom';
import { CtaContainer, CtaHeading, CtaText, CtaButtons, Button } from '../styles/FinalCtaSection.styled';

function FinalCtaSection({ openModal }) {
  return (
    <CtaContainer>
      <CtaHeading>Ready to Start Your Next Project?</CtaHeading>
      <CtaText>Partner with a full-spectrum digital solutions hub dedicated to your growth.</CtaText>
      <CtaButtons>
        <Button onClick={() => openModal('order')} className="bg-orange-500 hover:bg-orange-600 text-white">
          Start Order
        </Button>
        <Link to="/contact" className="bg-white hover:bg-gray-100 text-blue-800">
          <Button>Contact Us</Button>
        </Link>
      </CtaButtons>
    </CtaContainer>
  );
}

export default FinalCtaSection;