import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

// Components will be imported here
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProgramHighlights from '../components/ProgramHighlights';
import TechnologyShowcase from '../components/TechnologyShowcase';
import SuccessStories from '../components/SuccessStories';
import UpcomingEvents from '../components/UpcomingEvents';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Main = styled.main`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Daybreak Basketball Program | Elevate Your Game</title>
        <meta name="description" content="A revolutionary basketball development program powered by AI technology across Oakland, NYC, Brooklyn, Los Angeles, and Sacramento." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <Main>
        <Hero 
          title="ELEVATE YOUR GAME"
          subtitle="A revolutionary basketball development program powered by AI technology"
          ctaText="JOIN THE PROGRAM"
          ctaLink="/apply"
          secondaryCtaText="EXPLORE OUR APPROACH"
          secondaryCtaLink="/program"
        />
        
        <ProgramHighlights />
        
        <TechnologyShowcase />
        
        <SuccessStories />
        
        <UpcomingEvents />
        
        <InstagramFeed />
        
        <Newsletter />
      </Main>
      
      <Footer />
    </>
  );
}
