import React, { createContext, useState } from 'react'
export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [themeColor,setThemeColor] = useState('red');
    const toggleTheme =(data)=>{
        setThemeColor(data);
    }
  return (

    <ThemeContext.Provider value={{themeColor,toggleTheme}} >
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;