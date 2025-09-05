// src/components/HeroSection.js
import { Link } from 'react-router-dom';
import { HeroContainer, HeroContent, HeroButtons, Button } from '../styles/HeroSection.styled';

function HeroSection({ openModal }) {
  return (
    <HeroContainer>
      <HeroContent>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Your Partner for Language & Digital Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Streamline Your Business Operations and Expand Your Global Reach with Our All-in-One Digital Hub.
        </p>
        <HeroButtons>
          <Button onClick={() => openModal('order')} className="bg-orange-500 hover:bg-orange-600 text-white">
            Start Order
          </Button>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Button>Contact Us</Button>
          </Link>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;