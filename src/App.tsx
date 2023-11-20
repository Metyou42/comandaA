import { useCookie } from "contexts/cookieContext";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import Routes from "Routes";
import "./i18n";
import { StuperThemeProvider } from "contexts/themeContext";

function App(): React.ReactElement {
    const { getAccessTokenCookie } = useCookie();
    const currentAccessToken = getAccessTokenCookie();

    useEffect(() => {
        const forceLogout = (): void => {
            // window.location.href = `${REACT_APP_URL}/login`
        }

        if (!getAccessTokenCookie) {
            return forceLogout()
        }
    }, [currentAccessToken]);

    return (
        <StuperThemeProvider>
            <Routes />
        </StuperThemeProvider>
    );
}

export default App;
