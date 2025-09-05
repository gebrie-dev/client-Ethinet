// src/components/AboutVisionSection.js
import { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import {
  AboutVisionContainer,
  Heading,
  Content,
  ExpandableContent,
  ToggleButton,
} from '../styles/AboutVisionSection.styled';

function AboutVisionSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AboutVisionContainer>
      <Heading>
        <FaLightbulb className="text-orange-500 mr-3" />
        Our Vision for a Connected World
      </Heading>
      <Content>
        At Ethionet, we envision a future where language barriers are non-existent and businesses can thrive globally with seamless digital integration. We are committed to providing cutting-edge translation and digital marketing solutions that empower our clients to reach diverse audiences and achieve their strategic goals.
      </Content>
      <ExpandableContent className={isExpanded ? 'is-expanded' : ''}>
        <p className="text-gray-600 mb-4">
          Our dedicated team of certified linguists and digital strategists works tirelessly to deliver exceptional quality and measurable results. We leverage the latest technologies and industry best practices to ensure accuracy, efficiency, and cultural relevance in every project we undertake. From meticulous document translation to comprehensive SEO campaigns and engaging social media strategies, we cover all aspects of your digital presence.
        </p>
        <p className="text-gray-600">
          We believe in fostering long-term partnerships, built on trust, transparency, and a shared commitment to excellence. Our client-centric approach means we take the time to understand your unique needs and tailor our services to provide bespoke solutions that drive real impact. Join us on our journey to connect the world, one word and one digital strategy at a time.
        </p>
      </ExpandableContent>
      <ToggleButton onClick={toggleContent}>
        {isExpanded ? 'Read Less' : 'Read More'} <FaLightbulb className={`ml-2 text-sm ${isExpanded ? 'rotate-180' : ''}`} />
      </ToggleButton>
    </AboutVisionContainer>
  );
}

export default AboutVisionSection;