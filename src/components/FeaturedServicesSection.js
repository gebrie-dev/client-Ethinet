// src/components/FeaturedServicesSection.js
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { ServicesContainer, ServiceCard, CardIcon, CardTitle, CardText, CardLink } from '../styles/FeaturedServicesSection.styled';

function FeaturedServicesSection() {
  return (
    <ServicesContainer>
      <ServiceCard>
        <CardIcon>
          <FaGlobeAmericas className="text-blue-600" />
        </CardIcon>
        <CardTitle>Certified & Technical Translation</CardTitle>
        <CardText>
          From legal and medical documents to large-scale localization projects, we provide accurate, certified translations to help your business operate globally.
        </CardText>
        <CardLink to="/services#translation">
          Learn More <FaArrowRight className="ml-2" />
        </CardLink>
      </ServiceCard>
      <ServiceCard>
        <CardIcon>
          <FaChartLine className="text-orange-500" />
        </CardIcon>
        <CardTitle>Strategic Digital & Marketing Solutions</CardTitle>
        <CardText>
          Drive growth and build a strong online presence with our full suite of content creation, SEO, social media management, and advertising services.
        </CardText>
        <CardLink to="/services#digital-marketing">
          Learn More <FaArrowRight className="ml-2" />
        </CardLink>
      </ServiceCard>
    </ServicesContainer>
  );
}

export default FeaturedServicesSection;