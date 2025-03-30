import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #FFFFFF;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  color: #2D2D2D;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #2D2D2D;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FeatureTitle = styled.h3`
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #2D2D2D;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2D2D2D;
  margin-bottom: 1.5rem;
`;

const LearnMoreLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #0066FF;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

// Sample program features data
const programFeatures = [
  {
    id: 1,
    icon: '/images/icons/basketball-skill.svg',
    title: 'Elite Skill Development',
    description: 'Advanced training methodology combining traditional coaching with AI-powered analysis for accelerated skill acquisition.',
    link: '/program/skill-development'
  },
  {
    id: 2,
    icon: '/images/icons/technology.svg',
    title: 'Cutting-Edge Technology',
    description: 'Proprietary AI tracking system provides personalized feedback and development pathways for each athlete.',
    link: '/technology'
  },
  {
    id: 3,
    icon: '/images/icons/personal-growth.svg',
    title: 'Holistic Development',
    description: 'Comprehensive approach addressing athletic excellence, mental mastery, character formation, and social integration.',
    link: '/program/holistic-approach'
  },
  {
    id: 4,
    icon: '/images/icons/college.svg',
    title: 'College Pathway',
    description: 'Structured program creating clear pathways to college opportunities through development, exposure, and guidance.',
    link: '/players/college-pathway'
  },
  {
    id: 5,
    icon: '/images/icons/community.svg',
    title: 'Community Connection',
    description: 'Deep integration with local communities across all five cities, creating authentic engagement and support.',
    link: '/about/community'
  },
  {
    id: 6,
    icon: '/images/icons/coaching.svg',
    title: 'Expert Coaching',
    description: 'Elite coaching staff with professional experience, enhanced by technology tools for precise development.',
    link: '/about/coaches'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ProgramHighlights = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Program Highlights</SectionTitle>
        <SectionSubtitle>
          The Daybreak Basketball Program combines elite athletic training, cutting-edge technology, 
          and holistic personal development to create a revolutionary approach to youth basketball.
        </SectionSubtitle>
      </SectionHeader>
      
      <FeaturesGrid>
        {programFeatures.map((feature, index) => (
          <FeatureCard 
            key={feature.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <FeatureIcon>
              <img src={feature.icon} alt={feature.title} />
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <LearnMoreLink href={feature.link}>
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#0066FF"/>
              </svg>
            </LearnMoreLink>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </SectionContainer>
  );
};

export default ProgramHighlights;
