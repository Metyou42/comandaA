import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";
import React, { useState, useCallback, useMemo } from "react";
import themes from "./themes";
import { ThemeProvider } from "styled-components";

interface ThemeToggleContextProps {
    toggle: () => void;
}

const ThemeToggleContext = React.createContext<ThemeToggleContextProps>({
    toggle: () => { }
});

export const useTheme = (): ThemeToggleContextProps => React.useContext(ThemeToggleContext);

const MUTheme = createTheme({
    typography: { button: { textTransform: "none" } },
    palette: { primary: { main: "#1e88e5" }, mode: 'dark', },
});

export function StuperThemeProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const [themeState, setThemeState] = useState({
        mode: "dark"
    });

    const toggle = useCallback((): void => {
        const mode = themeState.mode === "light" ? "dark" : "light";
        setThemeState({ mode });
    }, [themeState]);

    const value = useMemo(
        () => ({
            toggle
        }),
        [toggle]
    );

    return (
        <ThemeToggleContext.Provider value={value}>
            <MUIThemeProvider theme={MUTheme}>
                <ThemeProvider theme={themeState.mode === "light" ? themes.lightTheme : themes.darkTheme}>
                    {children}
                </ThemeProvider>
            </MUIThemeProvider>
        </ThemeToggleContext.Provider>
    );
}
