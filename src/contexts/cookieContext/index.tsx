import { REACT_APP_ACCESS_TOKEN_COOKIE_NAME, REACT_APP_ID_TOKEN_COOKIE_NAME, REACT_APP_NONCE_COOKIE_NAME, REACT_APP_PKEY_COOKIE_NAME } from "environmentVariables";
import Cookies from "js-cookie";
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { getCookieDomain } from "utils";
interface IContextProps {
    cookies: Record<string, string>[];
    getCookie: (key: string) => string;
    setCookie: (key: string, value: any, minutes?: number) => void;
    removeCookie: (value: string) => void;
    removeAllCookies: () => void;
    getAccessTokenCookie: () => string;
    getIDTokenCookie: () => string;
    getNonceCookie: () => string;
}

const CookieContext = createContext({} as IContextProps);
const cookiesUI = new Set([REACT_APP_ACCESS_TOKEN_COOKIE_NAME, REACT_APP_ID_TOKEN_COOKIE_NAME, REACT_APP_NONCE_COOKIE_NAME, REACT_APP_PKEY_COOKIE_NAME])

export const getCookie = (key: string): string => {
    const nameEQ = `${key}=`;
    const ca = document.cookie.split(";");

    for (let c of ca) {
        while (c.startsWith(" ")) {
            c = c.slice(1, c.length);
        }
        if (c.startsWith(nameEQ)) {
            return c.slice(nameEQ.length, c.length);
        }
    }

    return null;
};

const getAccessTokenCookie = (): string => {
    const value = getCookie(REACT_APP_ACCESS_TOKEN_COOKIE_NAME)

    if (value) {
        return decodeURIComponent(value).replace(/"/ug, "");
    }

    return null
}

const getNonceCookie = (): string => {
    const value = getCookie(REACT_APP_NONCE_COOKIE_NAME)

    if (value) {
        return decodeURIComponent(value).replace(/"/ug, "");
    }

    return null
}

const getIDTokenCookie = (): string => {
    const value = getCookie(REACT_APP_ID_TOKEN_COOKIE_NAME)

    if (value) {
        return decodeURIComponent(value).replace(/"/ug, "");
    }

    return null
}

interface IProps {
    children: ReactNode;
}

export function CookieProvider({ children }: IProps): React.ReactElement {
    const [cookies, setCookies] = useState<Record<string, string>[]>([]);

    useEffect(() => {
        if (document.cookie) {
            const newCookies = document.cookie.split(";").map((c) => {
                const [k, v] = c.split("=");
                return { key: k.trim(), value: v.trim() };
            });

            setCookies([...newCookies]);
        }
    }, []);

    const setCookie = (keyName: string, valueStr: any, minutes = 60): void => {
        const key = keyName.trim();
        let value;

        if (typeof value !== "string") {
            value = JSON.stringify(valueStr);
        }

        value = value.trim();

        const now = new Date();
        now.setTime(now.getTime() + minutes * 60 * 1000);

        Cookies.set(key, value, {
            path: "/",
            expires: now,
            domain: getCookieDomain(),
            secure: window.location.protocol === 'https:' ? true : false,
            sameSite: 'strict',
        });

        setCookies([...cookies.filter((c) => c.key !== key), { key, value }]);
    };

    const removeCookie = (key: string): void => {
        Cookies.remove(key.trim(), {
            path: "/",
            domain: getCookieDomain()
        });

        setCookies([...cookies.filter((c) => c.key !== key)]);
    };

    const removeAllCookies = (): void => {
        const cookies = document.cookie.split(";");
        const domain = getCookieDomain()

        for (const cookie of cookies)
        {
            const eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.slice(0, Math.max(0, eqPos)) : cookie;
            name = name.trim()

            if (!cookiesUI.has(name)) {
                continue
            }

            // eslint-disable-next-line unicorn/no-document-cookie
            document.cookie = `${name}=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;

            removeCookie(name)
        }
    };

    const value = useMemo(
        () => ({
            cookies,
            getCookie,
            setCookie,
            removeCookie,
            getIDTokenCookie,
            getNonceCookie,
            removeAllCookies,
            getAccessTokenCookie
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [cookies]
    );

    return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
}

export function useCookie(): IContextProps {
    return useContext(CookieContext);
}
