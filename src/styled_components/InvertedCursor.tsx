/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
// https://dev.to/mattmarquise/how-to-create-a-custom-circular-cursor-for-your-website-4i7p
const InvertedCursor = styled.div`
    @media (min-width: 1081px) {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        background: #fff;
        border-radius: 50%;
        top: var(--y, 0);
        left: var(--x, 0);
        transform: translate(-50%, -50%);
        z-index: 999;
        mix-blend-mode: difference;
        transition: transform .2s;
        pointer-events: none;
    }
`;

export default InvertedCursor;