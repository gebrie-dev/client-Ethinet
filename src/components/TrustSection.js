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
  LogosCarouselWrapper,
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
      text: "Ethionet's translation services were exceptional. They delivered accurate, culturally-appropriate translations that helped us successfully enter the Ethiopian market. Their attention to detail and professional approach exceeded our expectations.",
      cite: "Sarah Johnson, International Business Director, TechCorp Global",
    },
    {
      text: "Working with Ethionet transformed our digital presence. Their comprehensive SEO strategy and social media management increased our online visibility by 300%. They truly understand both local and international markets.",
      cite: "Ahmed Hassan, Marketing Manager, East Africa Trading Co.",
    },
    {
      text: "The team's expertise in both translation and digital marketing is unmatched. They helped us localize our entire product suite while building a strong online presence. The ROI has been remarkable.",
      cite: "Dr. Maria Rodriguez, CEO, HealthTech Solutions",
    },
    {
      text: "Ethionet's institutional services are top-notch. They handled our large-scale document translation project with precision and delivered ahead of schedule. Their certified translations are trusted by government agencies.",
      cite: "Prof. Tesfaye Gebre, Director, Ethiopian Research Institute",
    },
  ];

  const clientLogos = [
    { name: 'Ministry of Finance', src: '/logo_ministry_finance.png' },
    { name: 'Addis Ababa University', src: '/aau.png' },
    { name: 'Ethio Telecom', src: '/tele.png' },
    { name: 'Commercial Bank of Ethiopia', src: '/cbe.png' },

  ];

  return (
    <TrustContainer>
      <TrustHeading>Trusted by Industry Leaders</TrustHeading>
      <LogosCarouselWrapper>
        <LogosCarousel>
          {clientLogos.map((logo, index) => (
            <LogoImage key={index} src={logo.src} alt={logo.name} />
          ))}
          {/* Duplicate logos for seamless animation */}
          {clientLogos.map((logo, index) => (
            <LogoImage key={`dup-${index}`} src={logo.src} alt={logo.name} />
          ))}
        </LogosCarousel>
      </LogosCarouselWrapper>
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
            <FigureIcon className="blue">
              <FaProjectDiagram />
            </FigureIcon>
            <FigureNumber className="blue">500+</FigureNumber>
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