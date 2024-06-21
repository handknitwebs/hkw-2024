/** @jsxImportSource @emotion/react */
import React from 'react';
import StyledSelect from '../styled_components/StyledSelect';
import StyledContainer from '../styled_components/StyledContainer';

interface ThemeSelectorProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ setTheme }) => {
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledSelect onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="bright">Bright</option>
      </StyledSelect>
      <p>FONT TEST font test</p>
    </StyledContainer>
  );
};

export default ThemeSelector;