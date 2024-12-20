import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import TextColoredPunct from '../styled_components/TextColorPunct';
import ColoredPunct from '../styled_components/ColoredPunct';
import Text from '../styled_components/Text';
import ContactForm from '../components/ContactForm';
import SentMessage from '../styled_components/SentMessage';

const ContactSection = styled(Section)`
  padding: 5rem 0 3rem 0;
  @media (max-width: 600px) {
    padding: 48px 0;
  }
`;

const FormHeaderContainer = styled(Container)`
  grid-column: 1 / 6;
  @media (max-width: 1080px) {
    grid-column: 1 / 13;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
  opacity: 0;
`;

const FormTitleTexts = styled(Container)`
  height: fit-content;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1080px) {
    position: sticky;
    top: 6rem;
  }
`;

const FormContainer = styled(Container)<{ isFormSubmitted: boolean }>`
  background-color: #1F1F1F;
  grid-column: 6 / 13;
  border-radius: 2.5rem;
  padding: 2.5rem;
  gap: 2.5rem;
  flex-direction: column;
  @media (max-width: 1080px) {
    grid-column: 1 / 13;
    padding: 40px 20px;
  }
  max-height: ${({ isFormSubmitted }) => (isFormSubmitted ? '8rem' : '100rem')};
  height: 100%;
  overflow: hidden;
  opacity: ${({ isFormSubmitted }) => (isFormSubmitted ? '1' : '0')};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  position: relative; /* Ensure children are positioned relative to this container */
`;

const LetsTalk = styled(TextColoredPunct)`
  color: #FDF4E2;
  font-family: "pf-grand-gothik-variable", sans-serif;
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;
  line-height: 100%;
  letter-spacing: -0.2px;
  text-transform: uppercase;
  font-size: 3.2rem;
  @media (max-width: 1080px) {
    font-size: 64px;
    letter-spacing: -0.22rem;
  }
  @media (max-width: 600px) {
    font-size: 32px;
    letter-spacing: -1.6px;
  }
  ::before, ::after {
    content: '';
    display: block;
    height: 0;
  }
  ::before {
    margin-top: -0.075em;
  }
  ::after {
    margin-bottom: -0.25em;
  }
`;

const FormSubHeader = styled(Text)`
  font-size: 1.625rem;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 16px;
    font-weight: 500;
  }
  @media (max-width: 1080px) {
    .mobile-only {
      display: none;
    }
  }
`;

const SentMessageText = styled(Text)`
  color: #fff;
  font-size: 1.75rem;
  margin: 2rem;
  font-weight: 500;
  text-align: center;
`

const FooterSection = styled(Container)`
  display: grid;
  grid-column: 1 / 13;
  font-size: 0.75rem;
  justify-content: end;
`;

const FooterText = styled(Container)`
  padding: 1rem 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;
  

const Contact: React.FC = () => {
  const formHeaderRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedHeader, setHasAnimatedHeader] = useState(false);
  const [hasAnimatedForm, setHasAnimatedForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showSentMessage, setShowSentMessage] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === formHeaderRef.current && !hasAnimatedHeader) {
            entry.target.classList.add('slide-in');
            setHasAnimatedHeader(true);
            observer.unobserve(entry.target);
          } else if (entry.target === formContainerRef.current && !hasAnimatedForm) {
            entry.target.classList.add('slide-in-delay');
            setHasAnimatedForm(true);
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    if (formHeaderRef.current) {
      observer.observe(formHeaderRef.current);
    }

    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }

    return () => {
      if (formHeaderRef.current) {
        observer.unobserve(formHeaderRef.current);
      }
      if (formContainerRef.current) {
        observer.unobserve(formContainerRef.current);
      }
    };
  }, [hasAnimatedHeader, hasAnimatedForm]);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
    setTimeout(() => {
      setShowSentMessage(true);
    }, 750);
  };

  return (
    <>
      <ContactSection>
        <FormHeaderContainer ref={formHeaderRef}>
          <FormTitleTexts>
            <LetsTalk>
              Let's talk<ColoredPunct>.</ColoredPunct>
            </LetsTalk>
            <FormSubHeader>The world changes one conversation<br className="mobile-only"></br>at a time.</FormSubHeader>
          </FormTitleTexts>
        </FormHeaderContainer>
        <FormContainer ref={formContainerRef} isFormSubmitted={isFormSubmitted}>
          <ContactForm onFormSubmit={handleFormSubmit} isFormSubmitted={isFormSubmitted} />
          <SentMessage className={showSentMessage ? 'visible' : ''}><SentMessageText>
            Thanks for reaching out, we’ll get back to you soon.</SentMessageText>
          </SentMessage>
        </FormContainer>
      </ContactSection>
			<FooterSection>
				<FooterText>Copyright 2024 HKW | <FooterLink href="/policy/">Policies</FooterLink></FooterText>
			</FooterSection>
    </>
  );
};

export default Contact;
