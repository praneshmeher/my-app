import React from 'react'
import Hooks from './Playground/use-context-func'
import { useState } from 'react';

export const ThemeContext = React.createContext()

function App() {
  const[theme, setTheme] = useState(true)
  
  function toggle(){
    setTheme(prevTheme=>!prevTheme)
  }
  
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <button onClick={()=>toggle()}>Change Theme</button>
        <Hooks />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
