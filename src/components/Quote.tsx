/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import Container from '../styled_components/Container';
import Text from '../styled_components/Text';
import QuoteMark from '../styled_components/QuoteMark';

interface QuoteProps {
    quoteObject: {
        quote: string;
        author: string;
        role: string;
        fontSize: string;
        shift: string;
    };
}

const QuoteBlock = styled(Container)<{ shift: string; }>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    margin: ${props => props.shift === "top" ? '-2rem 0 0 0' :  props.shift === "bottom" ? '0 0 -2rem 0' : 'auto'};
    background: transparent;
`;

const QuoteHolder = styled(Container)`
    display: flex;
    flex-direction: column;
    background: transparent;
`

const QuoteText = styled(Text)<{ fontSize: string; }>`
    white-space: nowrap;
    font-weight: 600;
    margin-top: -7.5px;
    font-size: ${props => props.fontSize};
`;

const Author = styled(Text)`
    font-size: 20px;
    font-weight: 500;
    margin-top: 1rem;
`;

const Role = styled(Text)`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.50);
    margin-top: 4px;
    text-transform: uppercase;
`;

const Quote: React.FC<QuoteProps> = ({ quoteObject }) => {
    return (
        <QuoteBlock shift={quoteObject.shift}>
            <QuoteMark>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43" fill="none">
                    <g clipPath="url(#clip0_1009_1219)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M48.6743 42.0332H27.6256V20.9845C27.6256 15.1895 29.9749 9.9432 33.7712 6.14695C37.5681 2.35008 42.8137 0.00132751 48.6087 0.00132751V8.50008C45.1612 8.50008 42.0393 9.8982 39.7806 12.157C37.5218 14.4157 36.1237 17.5376 36.1237 20.9851H48.6743V42.0332Z" fill="#FF1A35"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.0493 42.0332H0.00056839V20.9845C0.00056839 15.1895 2.34994 9.9432 6.14619 6.14695C9.94307 2.35008 15.1887 0.00132751 20.9837 0.00132751V8.50008C17.5362 8.50008 14.4143 9.8982 12.1556 12.157C9.89682 14.4157 8.50057 17.5376 8.50057 20.9851H21.0493V42.0332Z" fill="#FF1A35"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1009_1219">
                        <rect width="48.6744" height="42.0325" fill="white" transform="matrix(-1 0 0 -1 48.6743 42.0332)"/>
                        </clipPath>
                    </defs>
                </svg>
            </QuoteMark>
            <QuoteHolder>
                <QuoteText fontSize={quoteObject.fontSize}>
                    {quoteObject.quote}
                </QuoteText>
                <Author>
                    {quoteObject.author}
                </Author>
                <Role>
                    {quoteObject.role}
                </Role>
            </QuoteHolder>
        </QuoteBlock>
    );
};

export default Quote;
