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

const StoriesCarousel = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 2rem;
  padding: 1rem 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const StoryCard = styled(motion.div)`
  flex: 0 0 calc(33.333% - 1.33rem);
  scroll-snap-align: start;
  background-color: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 1rem);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const StoryImage = styled.div`
  height: 240px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${StoryCard}:hover & img {
    transform: scale(1.05);
  }
`;

const StoryContent = styled.div`
  padding: 1.5rem;
`;

const StoryCity = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #0066FF;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const StoryTitle = styled.h3`
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #2D2D2D;
  margin-bottom: 1rem;
`;

const StoryQuote = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2D2D2D;
  font-style: italic;
  margin-bottom: 1rem;
  
  &:before {
    content: '"';
  }
  
  &:after {
    content: '"';
  }
`;

const StoryPerson = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PersonAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PersonInfo = styled.div``;

const PersonName = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #2D2D2D;
`;

const PersonRole = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #6E6E6E;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const CarouselButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #F5F5F5;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0066FF;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ViewAllButton = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #0066FF;
  text-decoration: none;
  display: block;
  text-align: center;
  margin-top: 2rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Sample success stories data
const successStories = [
  {
    id: 1,
    city: 'Oakland',
    title: 'From Local Courts to College Scholarship',
    quote: 'The technology showed me exactly what I needed to improve. My shooting percentage went up 15% in just three months.',
    image: '/images/stories/oakland-story.jpg',
    person: {
      name: 'Marcus Johnson',
      role: 'Program Participant, Age 17',
      avatar: '/images/avatars/marcus.jpg'
    }
  },
  {
    id: 2,
    city: 'Brooklyn',
    title: 'Building Confidence On and Off the Court',
    quote: 'Daybreak didn\'t just make me a better player, it made me a better student and leader in my community.',
    image: '/images/stories/brooklyn-story.jpg',
    person: {
      name: 'Zoe Williams',
      role: 'Program Participant, Age 16',
      avatar: '/images/avatars/zoe.jpg'
    }
  },
  {
    id: 3,
    city: 'Los Angeles',
    title: 'Technology-Driven Development Journey',
    quote: 'Seeing my progress visualized in the app kept me motivated. I could literally see myself getting better every week.',
    image: '/images/stories/la-story.jpg',
    person: {
      name: 'Tyler Rodriguez',
      role: 'Program Participant, Age 15',
      avatar: '/images/avatars/tyler.jpg'
    }
  },
  {
    id: 4,
    city: 'NYC',
    title: 'From Beginner to Team Captain',
    quote: 'I never thought I\'d be leading my school team. The coaches at Daybreak saw potential in me that I didn\'t see in myself.',
    image: '/images/stories/nyc-story.jpg',
    person: {
      name: 'Aisha Thompson',
      role: 'Program Participant, Age 16',
      avatar: '/images/avatars/aisha.jpg'
    }
  },
  {
    id: 5,
    city: 'Sacramento',
    title: 'Finding My Path Through Basketball',
    quote: 'The college pathway program opened doors I never knew existed. Now I\'m heading to college with a clear plan.',
    image: '/images/stories/sacramento-story.jpg',
    person: {
      name: 'David Chen',
      role: 'Program Participant, Age 18',
      avatar: '/images/avatars/david.jpg'
    }
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

const SuccessStories = () => {
  const carouselRef = React.useRef(null);
  
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Success Stories</SectionTitle>
        <SectionSubtitle>
          Hear from participants across our five cities who have transformed their game 
          and their lives through the Daybreak Basketball Program.
        </SectionSubtitle>
      </SectionHeader>
      
      <StoriesCarousel>
        <CarouselContainer ref={carouselRef}>
          {successStories.map((story, index) => (
            <StoryCard 
              key={story.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <StoryImage>
                <img src={story.image} alt={story.title} />
              </StoryImage>
              <StoryContent>
                <StoryCity>{story.city}</StoryCity>
                <StoryTitle>{story.title}</StoryTitle>
                <StoryQuote>{story.quote}</StoryQuote>
                <StoryPerson>
                  <PersonAvatar>
                    <img src={story.person.avatar} alt={story.person.name} />
                  </PersonAvatar>
                  <PersonInfo>
                    <PersonName>{story.person.name}</PersonName>
                    <PersonRole>{story.person.role}</PersonRole>
                  </PersonInfo>
                </StoryPerson>
              </StoryContent>
            </StoryCard>
          ))}
        </CarouselContainer>
        
        <CarouselControls>
          <CarouselButton onClick={scrollLeft} aria-label="Previous stories">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </CarouselButton>
          <CarouselButton onClick={scrollRight} aria-label="Next stories">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </CarouselButton>
        </CarouselControls>
      </StoriesCarousel>
      
      <ViewAllButton href="/players/success-stories">View All Success Stories</ViewAllButton>
    </SectionContainer>
  );
};

export default SuccessStories;
