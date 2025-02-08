/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavBar from '../components/PolicyNavBar';
import PolicyNav from '../sections/PolicyNav';
import Terms from "../sections/Terms";

interface PolicyPageProps {
  contactRef: React.RefObject<HTMLDivElement>;
  setShowOverlay: (show: boolean) => void;
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

const PolicyPage: React.FC<PolicyPageProps> = ({ contactRef }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Overlay show={showOverlay} />
      <PolicyNav></PolicyNav>
      <NavBar contactRef={contactRef} setShowOverlay={setShowOverlay} />
      <Terms />
    </>
  );
};

export default PolicyPage;
