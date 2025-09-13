// src/components/FinalCtaSection.js
import { Link } from "react-router-dom";
import {
  CtaContainer,
  CtaHeading,
  CtaText,
  CtaButtons,
  Button,
} from "../styles/FinalCtaSection.styled";

function FinalCtaSection({ openModal }) {
  return (
    <CtaContainer>
      <CtaHeading>Ready to Start Your Next Project?</CtaHeading>
      <CtaText>
        Partner with a full-spectrum digital solutions hub dedicated to your
        growth.
      </CtaText>
      <CtaButtons>
        <Button onClick={() => openModal("order")} className="bg-orange-500">
          Start Order
        </Button>
        <Button as={Link} to="/contact" className="bg-white">
          Contact Us
        </Button>
      </CtaButtons>
    </CtaContainer>
  );
}

export default FinalCtaSection;
