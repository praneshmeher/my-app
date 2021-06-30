import React from 'react'
import DemoComponent from './Playground/use-willmount'
import { useState } from 'react';

export const ThemeContext = React.createContext()

function App() {
  const[theme, setTheme] = useState(true)
  
  function toggle(){
    setTheme(prevTheme=>!prevTheme)
  }
  
  return (
    <div className="App">
      {/* <ThemeContext.Provider value={theme}>
        <button onClick={()=>toggle()}>Change Theme</button>
        <Hooks />
      </ThemeContext.Provider> */}

      {/* <DemoComponent loading={false} list={['Pranesh, Ganesh']}/> */}

      {/* <DemoComponent func={()=>{console.log('willmount')}} /> */}

      <DemoComponent/>
    </div>
  );
}

export default App;
