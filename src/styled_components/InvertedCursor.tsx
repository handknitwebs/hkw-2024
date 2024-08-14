/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const InvertedCursor = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    top: var(--y, 0);
    left: var(--x, 0);
    transform: translate(-50%, -50%);
    z-index: 999;
    mix-blend-mode: difference;
    transition: transform .2s;
    pointer-events: none;
`;

export default InvertedCursor;