// src/components/HeroImageSection.js
import { Link } from "react-router-dom";
import {
  HeroImageContainer,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  HeroButton,
  HeroImage,
} from "../styles/HeroImageSection.styled";

function HeroImageSection({ openModal }) {
  return (
    <HeroImageContainer>
      <HeroImage
        src="/HeroImage.jpg"
        alt="Ethionet Translation and Digital Services"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <HeroOverlay />
      <HeroContent>
        <HeroTitle>Your Partner for Language & Digital Solutions</HeroTitle>
        <HeroSubtitle>
          Streamline Your Business Operations and Expand Your Global Reach with
          Our All-in-One Digital Hub.
        </HeroSubtitle>
        <HeroButtons>
          <HeroButton onClick={() => openModal("order")} $variant="primary">
            Start Order
          </HeroButton>
          <HeroButton as={Link} to="/contact" $variant="secondary">
            Contact Us
          </HeroButton>
        </HeroButtons>
      </HeroContent>
    </HeroImageContainer>
  );
}

export default HeroImageSection;