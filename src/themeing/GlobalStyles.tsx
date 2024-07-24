/** @jsxImportSource @emotion/react */
import React from 'react';
import { Global, css } from '@emotion/react';
import { Theme } from '.';

const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: Theme) => css`
      body {
        margin: 0;
        padding: 16px 32px;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-size: 20px;
        font-family: "Tahoma", sans-serif;
      },
      #root {
        display: grid;
        grid-template-columns: repeat( 12, 1fr);
      }
    `}
  />
);

export default GlobalStyles;