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

const FeedContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FeedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeedItem = styled(motion.a)`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    .overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.05);
    }
  }
`;

const FeedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const FeedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #FFFFFF;
`;

const FeedStats = styled.div`
  display: flex;
  gap: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const FeedStat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const FeedCaption = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-top: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #F5F5F5;
  transition: background-color 0.3s ease;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    background-color: #E0E0E0;
  }
`;

// Sample Instagram feed data
const instagramFeed = [
  {
    id: 1,
    image: '/images/instagram/post1.jpg',
    caption: 'Incredible skills on display at our Oakland training session today! #DaybreakBasketball #Oakland',
    likes: 245,
    comments: 32,
    link: 'https://instagram.com/p/example1'
  },
  {
    id: 2,
    image: '/images/instagram/post2.jpg',
    caption: 'Our AI technology in action, providing real-time feedback to players. The future of basketball training is here! #BasketballTech',
    likes: 189,
    comments: 27,
    link: 'https://instagram.com/p/example2'
  },
  {
    id: 3,
    image: '/images/instagram/post3.jpg',
    caption: 'Brooklyn players showing incredible teamwork during today\'s scrimmage. #DaybreakBasketball #Brooklyn',
    likes: 312,
    comments: 41,
    link: 'https://instagram.com/p/example3'
  },
  {
    id: 4,
    image: '/images/instagram/post4.jpg',
    caption: 'Coach Marcus breaking down game footage with our Los Angeles players. #GameAnalysis #LosAngeles',
    likes: 276,
    comments: 38,
    link: 'https://instagram.com/p/example4'
  },
  {
    id: 5,
    image: '/images/instagram/post5.jpg',
    caption: 'NYC summer program registration is now open! Limited spots available. #DaybreakBasketball #NYC',
    likes: 198,
    comments: 45,
    link: 'https://instagram.com/p/example5'
  },
  {
    id: 6,
    image: '/images/instagram/post6.jpg',
    caption: 'Sacramento players working on their shooting form with our AI tracking system. #TechTraining #Sacramento',
    likes: 231,
    comments: 29,
    link: 'https://instagram.com/p/example6'
  },
  {
    id: 7,
    image: '/images/instagram/post7.jpg',
    caption: 'Celebrating our players\' academic achievements! Basketball skills and classroom excellence. #StudentAthletes',
    likes: 287,
    comments: 36,
    link: 'https://instagram.com/p/example7'
  },
  {
    id: 8,
    image: '/images/instagram/post8.jpg',
    caption: 'Behind the scenes at our technology development lab. Creating the future of basketball training. #BasketballTech',
    likes: 254,
    comments: 31,
    link: 'https://instagram.com/p/example8'
  }
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

const InstagramFeed = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Follow Our Journey</SectionTitle>
        <SectionSubtitle>
          Stay connected with the Daybreak Basketball Program across all our social channels 
          for the latest updates, stories, and behind-the-scenes content.
        </SectionSubtitle>
      </SectionHeader>
      
      <FeedContainer>
        <FeedGrid>
          {instagramFeed.map((post, index) => (
            <FeedItem 
              key={post.id} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={itemVariants}
            >
              <FeedImage src={post.image} alt={post.caption} />
              <FeedOverlay className="overlay">
                <FeedStats>
                  <FeedStat>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {post.likes}
                  </FeedStat>
                  <FeedStat>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {post.comments}
                  </FeedStat>
                </FeedStats>
                <FeedCaption>{post.caption}</FeedCaption>
              </FeedOverlay>
            </FeedItem>
          ))}
        </FeedGrid>
        
        <SocialLinks>
          <SocialLink href="https://instagram.com/daybreakbasketball" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.5H17.51" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SocialLink>
          <SocialLink href="https://twitter.com/daybreakbball" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SocialLink>
          <SocialLink href="https://facebook.com/daybreakbasketball" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SocialLink>
          <SocialLink href="https://youtube.com/daybreakbasketball" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42V6.42Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SocialLink>
          <SocialLink href="https://tiktok.com/@daybreakbasketball" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9.5V15C19 18.3137 16.3137 21 13 21C9.68629 21 7 18.3137 7 15C7 11.6863 9.68629 9 13 9V12.5C11.3431 12.5 10 13.8431 10 15.5C10 17.1569 11.3431 18.5 13 18.5C14.6569 18.5 16 17.1569 16 15.5V3H19C19 5.20914 20.7909 7 23 7V10C21.5 10 20.1 9.5 19 9.5Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SocialLink>
        </SocialLinks>
      </FeedContainer>
    </SectionContainer>
  );
};

export default InstagramFeed;
