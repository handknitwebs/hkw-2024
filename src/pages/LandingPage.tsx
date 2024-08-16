/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Home from "../sections/Home";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Quotes from "../sections/Quotes";

interface LandingPageProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const Overlay = styled.div<{ show: boolean }>`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(23, 23, 23, 0.60);
  backdrop-filter: blur(${props => (props.show ? '2px' : '0px')});
  transition: backdrop-filter 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 1;
  opacity: ${props => (props.show ? '1' : '0')};
  pointer-events: ${props => (props.show ? 'auto' : 'none')};
  @media (max-width: 1080px) {
    display: none;
  }
`;

const LandingPage: React.FC<LandingPageProps> = ({ contactRef }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Overlay show={showOverlay} />
      <div></div>
      <Home contactRef={contactRef} setShowOverlay={setShowOverlay} />
      <div></div>
      <Services />
      <Quotes />
      <div ref={contactRef}></div>
      <Contact />
    </>
  );
};

export default LandingPage;
