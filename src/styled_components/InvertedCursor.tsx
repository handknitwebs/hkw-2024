/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface InvertedCursorProps {
  isHovered: boolean;
}

const InvertedCursor = styled.div<InvertedCursorProps>`
  @media (min-width: 1081px) {
    position: absolute;
    width: ${({ isHovered }) => (isHovered ? '40px' : '24px')};
    height: ${({ isHovered }) => (isHovered ? '40px' : '24px')};
    background: #fff;
    border-radius: 50%;
    top: var(--y, 0);
    left: var(--x, 0);
    transform: translate(-50%, -50%);
    z-index: 999;
    mix-blend-mode: difference;
    transition: transform 0.1s, width 0.3s, height 0.3s;
    pointer-events: none;
  }
`;

export default InvertedCursor;
