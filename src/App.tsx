import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { ToggleThemeContext } from './context/ToggleThemeContext';
import { dark, ligth } from './theme/theme';




function App() {
  const [theme, setTheme] = useState(true);
  const toggle = () =>{
    setTheme(!theme)
  }

  return (
      <ThemeProvider theme={theme?dark:ligth}>
        <ToggleThemeContext.Provider value={{oper:toggle,theme:theme}}>
        
           
            <Header/>
            <Main/>
        </ToggleThemeContext.Provider>
      </ThemeProvider>    
  );
}

export default App;
