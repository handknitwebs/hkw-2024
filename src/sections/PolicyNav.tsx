import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Container from '../styled_components/Container';

interface PolicyNavProps {
  contactRef: React.RefObject<HTMLDivElement>;
  setShowOverlay: (show: boolean) => void;
}

const SectionLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 0.7rem;
  display:block;
  margin: 0.3rem;
  padding: 0.3rem;
  border-radius: 0.5rem;
  color: #fff;
  -moz-transition:all 0.2s ease-in;
  -o-transition:all 0.2s ease-in;
  -webkit-transition:all 0.2s ease-in;
  &:hover {
    background: rgba(255, 26, 53, 0.1);
    color: rgba(255, 26, 53, 1);
  }
`

const PolicyNav: React.FC<PolicyNavProps> = () => {
  const [topOffset, setTopOffset] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current vertical scroll position
      const scrollY = window.scrollY;
      // Calculate a new offset:
      // For example: subtract scrollY from 100, but don't let it go below 10px.
      const newOffset = Math.max(100 - scrollY, 10);
      setTopOffset(newOffset);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const PolicyNavItems = styled.ul`
    position: fixed;
    top: ${topOffset}px;
    left: 0;
    list-style-type: none;
  `;

  return (
    <PolicyNavItems>
      <li><SectionLink href="#fulfillmentPolicy">Fulfillment Policy</SectionLink></li>
      <li><SectionLink href="#paymentPolicy">Payment Policy</SectionLink></li>
      <li><SectionLink href="#deliveryTimelines">Delivery Timelines</SectionLink></li>
      <li><SectionLink href="#contactInformation">Contact Information</SectionLink></li>
    </PolicyNavItems>
  )
}

export default PolicyNav;
