/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const RotateMe = styled.div`
    @media (min-width: 1081px) {
        transition: transform 0.5s ease;
        transform: none;
    }
    @media (min-width: 1440px) {
        margin-bottom: 0.25rem;
    }
`;

export default RotateMe;