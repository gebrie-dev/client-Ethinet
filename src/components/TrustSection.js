// src/components/TrustSection.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaBriefcase, FaProjectDiagram, FaHandshake } from 'react-icons/fa';
import {
  TrustContainer,
  TrustHeading,
  LogosCarousel,
  LogoImage,
  TestimonialSlider,
  TestimonialSlide,
  QuoteIcon,
  TestimonialText,
  TestimonialCite,
  KeyFigures,
  FigureItem,
  FigureIcon,
  FigureNumber,
  FigureText,
} from '../styles/TrustSection.styled';

function TrustSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    {
      text: "Ethionet's service was reliable and professional. They exceeded our expectations.",
      cite: "John Doe, CEO of ABC Corp",
    },
    {
      text: "Their translation services helped us expand to new markets seamlessly.",
      cite: "Jane Smith, Marketing Director",
    },
    {
      text: "The digital marketing strategies were a game-changer for our brand.",
      cite: "Mike Johnson, Entrepreneur",
    },
  ];

  return (
    <TrustContainer>
      <TrustHeading>Trusted by Industry Leaders</TrustHeading>
      <LogosCarousel>
        <LogoImage
          src="https://placehold.co/120x60/dbeafe/1e40af?text=Client+1"
          alt="Client Logo 1"
          onError={(e) => { e.target.src = 'https://placehold.co/120x60/dbeafe/1e40af?text=Client+1'; }}
        />
        <LogoImage
          src="https://placehold.co/120x60/dbeafe/1e40af?text=Client+2"
          alt="Client Logo 2"
          onError={(e) => { e.target.src = 'https://placehold.co/120x60/dbeafe/1e40af?text=Client+2'; }}
        />
        <LogoImage
          src="https://placehold.co/120x60/dbeafe/1e40af?text=Client+3"
          alt="Client Logo 3"
          onError={(e) => { e.target.src = 'https://placehold.co/120x60/dbeafe/1e40af?text=Client+3'; }}
        />
      </LogosCarousel>
      <TestimonialSlider>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide key={index}>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialCite>{testimonial.cite}</TestimonialCite>
            </TestimonialSlide>
          ))}
        </Slider>
      </TestimonialSlider>
      <KeyFigures>
        <FigureItem>
          <div className="flex items-center mb-2">
            <FigureIcon>
              <FaBriefcase />
            </FigureIcon>
            <FigureNumber>10+</FigureNumber>
          </div>
          <FigureText>Years in Business</FigureText>
        </FigureItem>
        <FigureItem>
          <div className="flex items-center mb-2">
            <FigureIcon>
              <FaProjectDiagram />
            </FigureIcon>
            <FigureNumber>500+</FigureNumber>
          </div>
          <FigureText>Projects Completed</FigureText>
        </FigureItem>
        <FigureItem>
          <div className="flex items-center mb-2">
            <FigureIcon>
              <FaHandshake />
            </FigureIcon>
            <FigureNumber>100+</FigureNumber>
          </div>
          <FigureText>Partner Organizations</FigureText>
        </FigureItem>
      </KeyFigures>
    </TrustContainer>
  );
}

export default TrustSection;