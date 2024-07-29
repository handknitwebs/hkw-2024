/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import Text from '../styled_components/Text';
import TextColorPunct from '../styled_components/TextColorPunct';
import ColoredPunct from '../styled_components/ColoredPunct';
import NavBar from '../components/NavBar';

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  setShowOverlay: (show: boolean) => void;
}

const HeroSection = styled(Section)`
  min-height: 100vh;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

const HeroSansNav = styled(Section)`
  height: 100%;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px 0;
  }
`

const HeroTextContainer = styled(Section)`
  height: 100%;
  @media (max-width: 600px) {
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 56px;
  }
` 

const HeroLeftContainer = styled(Container)`
  grid-column: 1 / 5;
  align-items: flex-start;
`

const HeroRightContainer = styled(Container)`
  grid-column: 6 / 11;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 600px) {
    gap: 16px;
  }
`

const HeroText = styled(Text)`
  font-size: 1.25rem;
  line-height: 115%;
`

const HeroBottomContainer = styled(Container)`
  grid-column: 1 / 11;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 2rem;
`

const HeroHeader = styled(TextColorPunct)`
  color: #FF354D;
  font-size: 8.75rem;
  font-family: "pf-grand-gothik-variable", sans-serif;
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;
  text-transform: uppercase;
  line-height: 6.75rem;
  letter-spacing: -0.4375rem;
  margin-top: 2rem;
  @media (max-width: 600px) {
    font-size: 38px;
    line-height: 29px;
    letter-spacing: -1.9px;
  }
`

const WhitePeriod = styled(ColoredPunct)`
  color: #FDF4E2;
`

const Home: React.FC<HomeProps> = ({ homeRef, servicesRef, contactRef, setShowOverlay }) => {

  return (
    <>
      <HeroSection>
        <NavBar homeRef={homeRef} servicesRef={servicesRef} contactRef={contactRef} setShowOverlay={setShowOverlay} />
        <HeroSansNav>
          <HeroTextContainer>
            <HeroLeftContainer>
              <HeroText>
                We are a digital design and marketing studio based in Spokane, Washington.
              </HeroText>
            </HeroLeftContainer>
            <HeroRightContainer>
              <HeroText>
                We build unique online experiences and engaging campaigns for non-profits and fun brands. We gravitate to the quirky and give it purpose.
              </HeroText>
              <HeroText>
                For those looking to make a statement, we'd like to help you find your voice.
              </HeroText>
            </HeroRightContainer>
          </HeroTextContainer>
          <HeroBottomContainer>
            <HeroHeader>
              We're changing everything<WhitePeriod>.</WhitePeriod>
            </HeroHeader>
          </HeroBottomContainer>
        </HeroSansNav>
      </HeroSection>
    </>
  );
};

export default Home;
