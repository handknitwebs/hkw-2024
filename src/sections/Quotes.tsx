/** @jsxImportSource @emotion/react */
import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import Quote from '../components/Quote';

const Quotes: React.FC = () => {
    const quotes = [
        {
            quote: "We can’t recommend HKW highly enough.",
            author: "Melissa Huggins",
            role: "Executive Director at Spokane Arts",
        },
        {
            quote: "HKW understood our needs better than we did.",
            author: "Blaise Yen",
            role: "Digital Marketing Manager at Thermo Fisher",
        },
        {
            quote: "HKW was a real pleasure to work with.",
            author: "Paul Sebastien",
            role: "CEO AT SQORD",
        },
        {
            quote: "HKW has done wonders for my business.",
            author: "Eben Cole",
            role: "Cole Music Co.",
        },
        {
            quote: "HKW has been an incredibly thoughtful partner.",
            author: "Julia Cohen Sebastien",
            role: "Co-Founder and CEO at Grayce",
        },
        {
            quote: "They were extremely quick and put out an incredible product.",
            author: "Ryan Kerrigan",
            role: "FOUNDER & EXECUTIVE DIRECTOR AT PEAK7",
        },
        {
            quote: "We are grateful we selected HKW...",
            author: "Nancy Janzen",
            role: "CEO AT MAPLEWOOD",
        },
        {
            quote: "HKW felt like full-fledged members of my team.",
            author: "Paula Mantle",
            role: "Marketing Director at Conviva",
        },
        {
            quote: "The whole HKW team was fantastic to work with!",
            author: "Jonathan Birnbaum",
            role: "EXECUTIVE DIRECTOR AT ISL",
        },
        {
            quote: "We communicate for a living, but HKW helped us crystalize our brand message.",
            author: "Kevin Pedraja",
            role: "Partner at Voxus PR",
        },
        {
            quote: "Working with HKW was an incredible experience.",
            author: "Shomya Tripathy",
            role: "Director of Policy and Civic Engagement at Asian Counseling and Referral Service",
        }
    ];

    let offset = 0;
    const allQuotes = quotes.map((quote, key) => {
        offset += key === 0 ? 0 : 15;
        return (
            <Quote key={key} quoteObject={quote} offset={offset} />
        );
    });

    const QuotesSection = styled(Section)`
        margin: 5rem 0;
        height: calc(100vh + ${quotes.length * 200}px);
        position: relative;
        @media (max-width: 1080px) {
            height: calc(100vh + ${quotes.length * 85}px);
        }
    `;

    const QuotesContainer = styled(Container)<{ translateX: number, isSticky: boolean }>`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start; /* Ensure left alignment */
        height: 100vh;
        transform: translateX(${props => `-${props.translateX}px`}); /* Scroll left as you scroll down */
        transition: transform 0.1s ease-out; /* Smooth transition */
        width: 100%;
        margin-left: 100vw;
        position: ${props => (props.isSticky ? 'sticky' : 'relative')};
        top: ${props => (props.isSticky ? '0' : 'auto')}; /* Sticky at the top */
    `;

    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current && containerRef.current) {
                const sectionRect = sectionRef.current.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const scrollDistance = window.innerHeight - sectionRect.top; // Calculate scroll distance

                // Ensure the text moves left as you scroll down
                setTranslateX(scrollDistance * 1.5); // Adjust the multiplier to control speed

                // Check if the container has reached the top of the viewport
                setIsSticky(containerRect.top <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <QuotesSection ref={sectionRef}>
            <QuotesContainer ref={containerRef} translateX={translateX} isSticky={isSticky}>
                {allQuotes}
            </QuotesContainer>
        </QuotesSection>
    );
};

export default Quotes;
