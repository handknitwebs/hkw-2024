/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import Container from '../styled_components/Container';
import TextColoredPunct from '../styled_components/TextColorPunct';
import Text from '../styled_components/Text';
import ColoredPunct from '../styled_components/ColoredPunct';

interface QuoteProps {
    quoteObject: {
        quote: string;
        author: string;
        role: string;
    };
    offset: number;
}

const QuoteBlock = styled(Container)<{ offset: number }>`
    margin-left: ${props => `${props.offset}%`};
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const QuoteText = styled(TextColoredPunct)`
    font-size: 80px;
    white-space: nowrap;
    font-weight: 500;
`;

const Author = styled(Text)`
    font-size: 20px;
    font-weight: 500;
    margin-left: 25px;
`;

const Role = styled(Text)`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.50);
    margin-top: 4px;
    margin-left: 25px;
    text-transform: uppercase;
`;

const Quote: React.FC<QuoteProps> = ({ quoteObject, offset }) => {
    return (
        <QuoteBlock offset={offset}>
            <QuoteText>
                <ColoredPunct>"</ColoredPunct>
                {quoteObject.quote}
                <ColoredPunct>"</ColoredPunct>
            </QuoteText>
            <Author>
                {quoteObject.author}
            </Author>
            <Role>
                {quoteObject.role}
            </Role>
        </QuoteBlock>
    );
};

export default Quote;
