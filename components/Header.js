import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  position: relative;
`;

const NavLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #2D2D2D;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0066FF;
  }
  
  ${props => props.active && `
    color: #0066FF;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #0066FF;
    }
  `}
`;

const UtilityNav = styled.div`
  display: flex;
  align-items: center;
`;

const CitySelector = styled.select`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 0.5rem;
  margin-right: 1rem;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  background-color: #FFFFFF;
  cursor: pointer;
`;

const CTAButton = styled.a`
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

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const Header = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const isActive = (path) => {
    return router.pathname === path;
  };
  
  return (
    <HeaderContainer>
      <Logo>
        <a href="/">
          <LogoImage src="/images/daybreak-logo.svg" alt="Daybreak Basketball Program" />
        </a>
      </Logo>
      
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink href="/" active={isActive('/')}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/program" active={isActive('/program')}>Program</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cities" active={isActive('/cities')}>Cities</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/players" active={isActive('/players')}>Players</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/technology" active={isActive('/technology')}>Technology</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/get-involved" active={isActive('/get-involved')}>Get Involved</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/news" active={isActive('/news')}>News & Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about" active={isActive('/about')}>About</NavLink>
          </NavItem>
        </NavList>
      </Navigation>
      
      <UtilityNav>
        <CitySelector>
          <option value="all">Select City</option>
          <option value="oakland">Oakland</option>
          <option value="nyc">NYC</option>
          <option value="brooklyn">Brooklyn</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="sacramento">Sacramento</option>
        </CitySelector>
        
        <CTAButton href="/apply">Apply Now</CTAButton>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </UtilityNav>
      
      {/* Mobile menu would be implemented here */}
    </HeaderContainer>
  );
};

export default Header;
