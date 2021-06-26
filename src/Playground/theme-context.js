import React from 'react'

export const ThemeContext = React.createContext()
export const ThemeUpdateContext = Reaact.createContext()

export function ThemeProvider({ children }){
    const[theme, setTheme] = useState(true)
  
    function toggle(){
      setTheme(prevTheme=>!prevTheme)
    }

    return(
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toggle}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

