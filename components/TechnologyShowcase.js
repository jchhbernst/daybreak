import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #F5F8FF;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.15);
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  color: #2D2D2D;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const SectionDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #2D2D2D;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const TechFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TechFeature = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h3`
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #2D2D2D;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #2D2D2D;
`;

const ExploreButton = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #0066FF;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0052CC;
  }
`;

// Sample technology features data
const techFeatures = [
  {
    id: 1,
    icon: '/images/icons/ai-tracking.svg',
    title: 'AI Player Tracking',
    description: 'Advanced computer vision analyzes movement and technique in real-time.'
  },
  {
    id: 2,
    icon: '/images/icons/game-analysis.svg',
    title: 'Game Analysis',
    description: 'Comprehensive breakdown of game performance with actionable insights.'
  },
  {
    id: 3,
    icon: '/images/icons/mobile-app.svg',
    title: 'Mobile Application',
    description: 'Personalized development plans and progress tracking in your pocket.'
  },
  {
    id: 4,
    icon: '/images/icons/health-tracking.svg',
    title: 'Health Monitoring',
    description: 'Integrated wellness tracking for optimal performance and recovery.'
  }
];

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const TechnologyShowcase = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <VideoContainer>
          <Video autoPlay muted loop playsInline>
            <source src="/videos/technology-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
        
        <ContentContainer>
          <SectionTitle>Technology-Driven Development</SectionTitle>
          <SectionDescription>
            Our proprietary technology platform combines AI-powered tracking, game analysis, 
            and personalized development tools to accelerate player growth and provide 
            unprecedented insights into performance.
          </SectionDescription>
          
          <TechFeatures>
            {techFeatures.map((feature, index) => (
              <TechFeature 
                key={feature.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={featureVariants}
              >
                <FeatureIcon>
                  <img src={feature.icon} alt={feature.title} />
                </FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
              </TechFeature>
            ))}
          </TechFeatures>
          
          <ExploreButton href="/technology">Explore Our Technology</ExploreButton>
        </ContentContainer>
      </SectionContent>
    </SectionContainer>
  );
};

export default TechnologyShowcase;
