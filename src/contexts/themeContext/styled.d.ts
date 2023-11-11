// @flow
import "styled-components";

interface Sizes {
    readonly normalBorderRadius: string;
    readonly normalBorderSize: string;
    readonly blurRadius: string;
}

interface Colors {
    readonly background: string;
    readonly white: string;
    readonly primary: string;
    readonly borderLight: string;
    readonly shadow: string;
    readonly fontLight: string;
    readonly fontNormal: string;
    readonly lightOnHoverOverlay: string;
    readonly borderOrbit: string;
    readonly defaultColorOrbitBorder: string;
    readonly defaultColorOrbit: string;
    readonly colorOrbit: Record<string, unknown>;
    readonly black: string;
    readonly default: string;
}
declare module "styled-components" {
    export interface DefaultTheme {
        readonly colors: Colors;
        readonly sizes: Sizes;
    }
}
