'use client'

import { createContext, useState } from "react";
import { themeCtx } from "@/types/allTypes";

export const ThemeContext = createContext<themeCtx|null>(null);

export const ThemeProvider = ({children}:{children: React.ReactNode}) => {
    const [mode,setMode] = useState<'dark'|'light'>('dark');
    const toggle=()=>{
        setMode((pre)=>(pre==='dark'?'light':'dark'))
    }
    return(
    <ThemeContext.Provider value={{
        mode,
        toggle
    }}>
        <div className={`theme ${mode}`}>
            {children}
        </div>
    </ThemeContext.Provider>
    );
}