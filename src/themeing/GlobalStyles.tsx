/** @jsxImportSource @emotion/react */
import React from 'react';
import { Global, css } from '@emotion/react';
import { Theme } from '.';

const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: Theme) => css`
      html {
        font-size: 24px;
        @media (min-width: 1441px) {
          font-size: 1.389vw;
        }
        @media (max-width: 1440px) {
          font-size: 16px;
        }
        @media (max-width: 600px) {
          font-size: 12px;
        }
      }
      body {
        margin: 0;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: "neue-haas-grotesk-display", sans-serif;
        font-weight: 400;
        font-style: normal;
        overflow-x: hidden;

      },
      #root {
        display: grid;
        gap: ${theme.root.gap};
        grid-template-columns: ${theme.root.gridTemplateColumns};
        padding: ${theme.root.padding};
        @media (max-width: 1080px) {
            padding: ${theme.root.tabletPadding};
        }
        @media (max-width: 600px) {
            padding: ${theme.root.mobilePadding};
        }
      }
      p {
        margin: 0;
      }
      div {
        box-sizing: border-box;
      }
      @keyframes slideInTranslate {
        from {
          transform: translateY(6rem);
        }
        to {
          transform: translateY(0);
        }
      }
      @keyframes slideInOpacity {
        from {
          transform: translateY(6rem);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes slideInOpacityHero {
        from {
          transform: translateY(1rem);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      .slide-in {
        animation: slideInOpacity 1s forwards;
      }
      .slide-in-delay {
        animation: slideInOpacity 1s forwards;
        animation-delay: 0.25s;
      }
    `}
  />
);

export default GlobalStyles;
