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

const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const EventsGrid = styled.div`
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

const EventCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

const EventImage = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${EventCard}:hover & img {
    transform: scale(1.05);
  }
`;

const EventDate = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #FF5A00;
  color: #FFFFFF;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

const EventContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const EventCity = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #0066FF;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const EventTitle = styled.h3`
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #2D2D2D;
  margin-bottom: 1rem;
`;

const EventDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2D2D2D;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #6E6E6E;
  
  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const EventButton = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #0066FF;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0052CC;
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

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    city: 'Oakland',
    title: 'Summer Program Registration',
    description: 'Registration opens for our flagship summer program. Limited spots available across all age groups.',
    image: '/images/events/oakland-registration.jpg',
    date: 'May 15, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Oakland Community Center',
    link: '/events/oakland-summer-registration'
  },
  {
    id: 2,
    city: 'NYC',
    title: 'College Showcase Event',
    description: 'High school players demonstrate their skills in front of college recruiters and coaches.',
    image: '/images/events/nyc-showcase.jpg',
    date: 'June 5, 2025',
    time: '1:00 PM - 6:00 PM',
    location: 'Manhattan Sports Complex',
    link: '/events/nyc-college-showcase'
  },
  {
    id: 3,
    city: 'Los Angeles',
    title: 'Technology Demo Day',
    description: 'Experience our cutting-edge basketball technology with hands-on demonstrations and personalized analysis.',
    image: '/images/events/la-tech-demo.jpg',
    date: 'May 22, 2025',
    time: '10:00 AM - 3:00 PM',
    location: 'LA Sports Academy',
    link: '/events/la-tech-demo'
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

const UpcomingEvents = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Upcoming Events</SectionTitle>
        <SectionSubtitle>
          Join us for upcoming events across our five cities, from program registrations 
          to showcases, demonstrations, and community gatherings.
        </SectionSubtitle>
      </SectionHeader>
      
      <EventsContainer>
        <EventsGrid>
          {upcomingEvents.map((event, index) => (
            <EventCard 
              key={event.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <EventImage>
                <img src={event.image} alt={event.title} />
                <EventDate>{event.date}</EventDate>
              </EventImage>
              <EventContent>
                <EventCity>{event.city}</EventCity>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
                <EventDetails>
                  <EventDetail>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {event.time}
                  </EventDetail>
                  <EventDetail>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {event.location}
                  </EventDetail>
                </EventDetails>
                <EventButton href={event.link}>Register Now</EventButton>
              </EventContent>
            </EventCard>
          ))}
        </EventsGrid>
        
        <ViewAllButton href="/events">View All Events</ViewAllButton>
      </EventsContainer>
    </SectionContainer>
  );
};

export default UpcomingEvents;
