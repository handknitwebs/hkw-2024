export interface Theme {
    root: {
      padding: string;
      mobilePadding: string;
      tabletPadding: string;
      gridTemplateColumns: string;
      gap: string;
    },
    colors: {
      background: string;
      text: string;
      selectBackground: string;
      selectText: string;
      border: string;
      mainNavBackground: string;
      mainNavText: string;
    };
    nav: {
      padding: string;
      mobilePadding: string;
      tabletPadding: string;
      buttonBackground: string;
      buttonColor: string;
      buttonPadding: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    }
    li: {
      listStyle: string;
    }
  }
  
  export { default as darkTheme } from './1darkTheme';
  export { default as lightTheme } from './1lightTheme';
  export { default as baseTheme } from './baseTheme'
  
