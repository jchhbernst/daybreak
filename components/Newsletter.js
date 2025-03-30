import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #0066FF;
  color: #FFFFFF;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const NewsletterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 1rem;
  
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
  color: #FFFFFF;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NewsletterInput = styled.input`
  flex-grow: 1;
  padding: 1rem 1.5rem;
  border-radius: 8px 0 0 8px;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #FF5A00;
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const NewsletterButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #FF5A00;
  padding: 1rem 1.5rem;
  border-radius: 0 8px 8px 0;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #FF7A30;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #FFFFFF;
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const PrivacyNote = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
  
  a {
    color: #FFFFFF;
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
`;

const Newsletter = () => {
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    // Reset form
    setEmail('');
    // Show success message or notification
  };
  
  return (
    <SectionContainer>
      <NewsletterContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Stay Updated</SectionTitle>
          <SectionDescription>
            Subscribe to our newsletter to receive the latest news, event announcements, 
            and program updates from the Daybreak Basketball Program.
          </SectionDescription>
          
          <NewsletterForm onSubmit={handleSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
          
          <PrivacyNote>
            By subscribing, you agree to our <a href="/privacy-policy">Privacy Policy</a>. 
            We respect your privacy and will never share your information.
          </PrivacyNote>
        </motion.div>
      </NewsletterContent>
    </SectionContainer>
  );
};

export default Newsletter;
