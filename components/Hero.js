import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 60vh;
    min-height: 500px;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #0066FF;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
  }
`;

const HeroVideo = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0066FF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const HeroContent = styled.div`
  text-align: center;
  color: #FFFFFF;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-family: 'Exo 2', sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 52px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #FFFFFF;
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #FF5A00;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #FF7A30;
  }
`;

const SecondaryButton = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 2px solid #FFFFFF;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const CitySelector = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const CityList = styled.div`
  display: flex;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 8px;
  }
`;

const CityItem = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  ${props => props.active && `
    background-color: #FF5A00;
    
    &:hover {
      background-color: #FF7A30;
    }
  `}
`;

const Hero = ({ title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }) => {
  return (
    <HeroContainer>
      <HeroBackground>
        <HeroVideo>
          Basketball Video Background
        </HeroVideo>
      </HeroBackground>
      
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <ButtonContainer>
          <PrimaryButton href={ctaLink}>{ctaText}</PrimaryButton>
          <SecondaryButton href={secondaryCtaLink}>{secondaryCtaText}</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
      
      <CitySelector>
        <CityList>
          <CityItem href="/cities/oakland">Oakland</CityItem>
          <CityItem href="/cities/nyc">NYC</CityItem>
          <CityItem href="/cities/brooklyn">Brooklyn</CityItem>
          <CityItem href="/cities/los-angeles">Los Angeles</CityItem>
          <CityItem href="/cities/sacramento">Sacramento</CityItem>
        </CityList>
      </CitySelector>
    </HeroContainer>
  );
};

export default Hero;
