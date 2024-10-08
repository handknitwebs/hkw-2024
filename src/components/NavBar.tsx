/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import MainNav from '../styled_components/MainNav';
import SlideInContainer from '../styled_components/SlideInContainer';
import SlideOnHover from '../styled_components/SlideOnHover';
import TextColoredPunct from '../styled_components/TextColorPunct';
import ColoredPunct from '../styled_components/ColoredPunct';
import RotateMe from '../styled_components/RotateMe';
import Button from '../styled_components/Button';
import HKWLogo from '../styled_components/HKWLogo';

interface NavBarProps {
  contactRef: React.RefObject<HTMLDivElement>;
  setShowOverlay: (show: boolean) => void;
}

const ContactButton = styled(Button)`
  position: relative;
  z-index: 999;
`
const ContactButtonSlideInContainer = styled(SlideInContainer)`
  @media (min-width: 1081px) {
    height: 1.25rem;
    overflow: hidden;
  }
`
const LetsTalk1 = styled(TextColoredPunct)`
  color: #fff;
  font-family: 'PFGrandGothik', sans-serif;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 100%;
  @media (min-width: 1440px) {
    font-size: 1.389vw;
  }
  @media (max-width: 1080px) {
    font-size: 16px;
  }
  opacity: 0;
  transform: translateY(5px);
  animation: slideInOpacityHero 1s forwards;
  animation-delay: 0.5s;
  @media (min-width: 1081px) {
    transform-origin: right center;
  }
`
const LetsTalk2 = styled(LetsTalk1)`
  display: none;
  padding: 0.75rem 0;
  @media (min-width: 1081px) {
    display: flex;
    transform-origin: left center;
    transform: rotate(0);
  }
  @media (min-width: 1440px) {
    padding: 1rem;
  }
`
const RotateMe1 = styled(RotateMe)`
  @media (min-width: 1081px) {
    .slide-on-hover:hover & {
        transform: rotate(20deg);
    } 
  }
`
const RotateMe2 = styled(RotateMe1)`
  display: none;
  @media (min-width: 1081px) {
  display: flex;
    transform: rotate(20deg);
    .slide-on-hover:hover & {
        transform: rotate(0deg);
    }
  } 
`

const NavBar: React.FC<NavBarProps> = ({ contactRef, setShowOverlay }) => {

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    let offset = 0;

    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <MainNav>
      <nav>
        <ul>
          <li>
            <SlideInContainer>
              <HKWLogo>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 35" fill="none">
                  <path d="M62.6354 0H1.36462C0.613689 0 0 0.666923 0 1.48231V33.1323C0 33.9485 0.613689 34.6154 1.36462 34.6154H62.6361C63.3863 34.6154 64 33.9485 64 33.1331V1.48231C64 0.666923 63.3863 0 62.6354 0ZM57.632 7.39461L53.1143 27.0792C53.014 27.5154 52.5803 27.8838 52.1664 27.8838H49.7444C49.3291 27.8838 48.8889 27.5154 48.7829 27.0792L45.8894 15.1715C45.8126 14.8785 45.6064 14.6885 45.3646 14.6885C45.115 14.6885 44.9102 14.8862 44.8427 15.1946L42.3339 27.0808C42.2421 27.5162 41.8169 27.8846 41.4052 27.8846H38.8992C38.4839 27.8846 38.043 27.5162 37.9371 27.08L34.016 10.9815C33.9044 10.5215 33.6114 10.2362 33.253 10.2362C33.0318 10.2362 32.8107 10.3446 32.6123 10.5492L30.1305 13.1115C29.7294 13.5262 29.3141 13.9546 29.6782 15.1508L33.5616 27.1531L33.5815 27.2138C33.605 27.2831 33.6149 27.3354 33.6149 27.3831C33.6149 27.6592 33.408 27.8838 33.1534 27.8838H30.198C29.7764 27.8838 29.3092 27.5154 29.1783 27.08L26.6368 18.6208C26.4476 17.9692 26.1284 17.8331 25.8937 17.8331C25.6676 17.8331 25.435 17.9592 25.1833 18.2192L23.882 19.5631C23.2683 20.1962 23.0912 20.6454 23.0912 21.5646V27.1185C23.0912 27.54 22.7755 27.8831 22.3872 27.8831H19.9253C19.5371 27.8831 19.2213 27.54 19.2213 27.1185V19.8585C19.2213 19.1123 18.6624 18.5054 17.9762 18.5054H11.451C10.7641 18.5054 10.2059 19.1123 10.2059 19.8585V27.1185C10.2059 27.54 9.89013 27.8831 9.50187 27.8831H7.05209C6.66382 27.8831 6.34809 27.54 6.34809 27.1185V7.49692C6.34809 7.07538 6.66382 6.73231 7.05209 6.73231H9.50187C9.89013 6.73231 10.2059 7.07538 10.2059 7.49692V13.7215C10.2059 14.4677 10.7648 15.0746 11.451 15.0746H17.9762C18.6631 15.0746 19.2213 14.4677 19.2213 13.7215V7.49692C19.2213 7.07538 19.5371 6.73231 19.9253 6.73231H22.3872C22.7755 6.73231 23.0912 7.07538 23.0912 7.49692V13.7215C23.0912 14.3538 23.4091 14.5777 23.6814 14.5777C23.872 14.5777 24.0676 14.4792 24.2645 14.2838L31.2462 7.36769C31.6622 6.95538 32.0988 6.73077 32.2069 6.73077H33.6043H36.074C36.4857 6.73077 36.9116 7.09923 37.0041 7.53385L39.6992 20.4508C39.7547 20.6992 39.9545 20.8731 40.1856 20.8731C40.416 20.8731 40.6087 20.7031 40.6649 20.4469L43.3806 7.53538C43.4731 7.09923 43.899 6.73154 44.3108 6.73154H46.4796C46.8935 6.73154 47.3287 7.1 47.4297 7.53615L50.4277 20.4615C50.4818 20.6962 50.6816 20.8608 50.9134 20.8608C51.1538 20.8608 51.3465 20.6915 51.3934 20.4415L53.8816 7.53462C53.9655 7.09923 54.3822 6.73154 54.7911 6.73154H57.157C57.3312 6.73154 57.4748 6.79846 57.5623 6.92C57.6491 7.04231 57.674 7.21077 57.632 7.39461Z" fill="white"/>
                </svg>
              </HKWLogo>
            </SlideInContainer>
          </li>
          <li>
            <ContactButton 
              onMouseEnter={() => setShowOverlay(true)} 
              onMouseLeave={() => setShowOverlay(false)} 
              onClick={() => handleScroll(contactRef)}>
              <ContactButtonSlideInContainer>
                <SlideOnHover className="slide-on-hover action">
                  <LetsTalk1 className="letstalk-1">
                    <RotateMe1>
                      Let's Talk<ColoredPunct>.</ColoredPunct>
                    </RotateMe1>
                  </LetsTalk1>
                  <LetsTalk2 className="letstalk-2">
                    <RotateMe2>
                    Let's Talk<ColoredPunct>.</ColoredPunct>
                    </RotateMe2>
                  </LetsTalk2>
                </SlideOnHover>
              </ContactButtonSlideInContainer>
            </ContactButton>
          </li>
        </ul>
      </nav>
    </MainNav>
  );
};

export default NavBar;
