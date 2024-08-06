import React, { useState, useRef } from 'react';
import { ThemeProvider } from '@emotion/react'; // allows for theme change
import LandingPage from "./pages/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { darkTheme, lightTheme, Theme } from './themeing'; // our defined themes
import GlobalStyles from './themeing/GlobalStyles';  // controls things like global padding, font size, and general themeing

const themeMap: { [key: string]: Theme } = {
  dark: darkTheme,
  light: lightTheme,
};

const App: React.FC = () => {

  const [theme] = useState<string>('dark');

  const contactRef = useRef<HTMLDivElement | null >(null);

  return (
    <ThemeProvider theme={themeMap[theme]}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage contactRef={contactRef} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
