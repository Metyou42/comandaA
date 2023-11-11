import merge from "lodash.merge";
import { DefaultTheme } from "styled-components";
import darkThemeValues from "./darkThemeValues";
import lightThemeValues from "./lightThemeValues";

const defaultTheme: DefaultTheme = {
    colors: {
        background: "#fafafa",
        white: "#ffffff",
        primary: "#1e88e5",
        default: "#F5F5F5",
        black: "#000000",
        borderLight: "#0000001f",
        shadow: "#00000014",
        fontLight: "#707070",
        fontNormal: "#000000DE",
        lightOnHoverOverlay: "#0000000a",
        borderOrbit: "#6D4C4121",
        defaultColorOrbitBorder: "#A5A5A5",
        defaultColorOrbit: "#F5F5F5",
        colorOrbit: {

            /*
             * NiamObject: "#ff0000",
             *     NiamInterface: "#00ff00",
             *     NiamScript: "#AAAAAA",
             *     NiamCustomMutation: "#ffff00",
             *     NiamNodeRelationship: "#0000ff",
             *     NiamTag: "#964B00",
             */
        }
    },
    sizes: {
        normalBorderRadius: "6px",
        normalBorderSize: "0.5px",
        blurRadius: "4px"
    }
};

const lightTheme: DefaultTheme = { ...defaultTheme };
merge(lightTheme, lightThemeValues);

const darkTheme: DefaultTheme = { ...defaultTheme };
merge(darkTheme, darkThemeValues);

export default { lightTheme, darkTheme };
