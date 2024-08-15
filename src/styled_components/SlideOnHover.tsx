/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const SlideOnHover = styled.div`
  @media (min-width: 1081px) {
    transition: transform 0.5s ease;
    transform: translateY(0) rotate(0);
    &:hover { transform: translateY(-2rem); }
  }
  @media (max-width: 1440px) {
      &:hover {
        transform: translateY(-2.25rem);
      }
    }
`;


export default SlideOnHover;