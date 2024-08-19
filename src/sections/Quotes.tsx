/** @jsxImportSource @emotion/react */
import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import Quote from '../components/Quote';
import Text from '../styled_components/Text';

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

    let characterQuote = quotes[8]['quote'].length + quotes[9]['quote'].length + quotes[10]['quote'].length 
    const allQuotes1 = quotes.slice(0, 3).map((quote, key) => (
        <Quote key={key} quoteObject={quote} fontSize={'2.5rem'} />
    ));

    const allQuotes2 = quotes.slice(3, 9).map((quote, key) => (
        <Quote key={key} quoteObject={quote} fontSize={'3.5rem'} />
    ));

    const allQuotes3 = quotes.slice(9).map((quote, key) => (
        <Quote key={key} quoteObject={quote} fontSize={'2rem'}/>
    ));

    const QuotesSection = styled(Section)`
        margin: 5rem 0;
        height: calc(100vh + ${(0.4 * characterQuote).toString()}rem);
        position: relative;
        @media (max-width: 1080px) {
            height: calc(100vh + ${allQuotes2.length * 85}px);
        }
    `;

    const QuotesTitle = styled(Text)`
        color: #FDF4E2;
        font-family: "pf-grand-gothik-variable", sans-serif;
        font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;    
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 900;
        letter-spacing: -2px;
        text-transform: uppercase;
        margin-bottom: 1rem;
        @media (max-width: 1080px) {
            font-size: 64px;
            letter-spacing: -2px;
        }
        @media (max-width: 600px) {
            font-size: 32px;
            letter-spacing: -1px;
        }
    `

    const QuotesDiv = styled(Container)<{ translateX: number, marginLeft: string }>`
        display: flex;
        gap: 4rem;
        transform: translateX(${props => `-${props.translateX}px`});
        transition: transform 2s cubic-bezier(0.25, 0.1, 0.25, 1);
        align-items: flex-start;
        margin-left: ${props => `${props.marginLeft}`};
    `;

    const QuotesContainer = styled(Container)`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        height: 100vh;
        width: 100%;
        position: sticky;
        top: 0;
    `;

    const sectionRef = useRef<HTMLDivElement>(null);
    const [translateX1, setTranslateX1] = useState(0);
    const [translateX2, setTranslateX2] = useState(0);
    const [translateX3, setTranslateX3] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionRect = sectionRef.current.getBoundingClientRect();
                const scrollDistance = window.innerHeight - sectionRect.top;

                // Adjust the multipliers for different speeds
                setTranslateX1(scrollDistance * 2);
                setTranslateX2(scrollDistance * 5.25);
                setTranslateX3(scrollDistance * 1.5);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <QuotesSection ref={sectionRef}>
            <QuotesContainer>
                <QuotesTitle>Happy Kind Words</QuotesTitle>
                <QuotesDiv translateX={translateX1} marginLeft={'100vw'}>
                    {allQuotes1}
                </QuotesDiv>
                <QuotesDiv translateX={translateX2} marginLeft={'250vw'}>
                    {allQuotes2}
                </QuotesDiv>
                <QuotesDiv translateX={translateX3} marginLeft={'100vw'}>
                    {allQuotes3}
                </QuotesDiv>
            </QuotesContainer>
        </QuotesSection>
    );
};

export default Quotes;