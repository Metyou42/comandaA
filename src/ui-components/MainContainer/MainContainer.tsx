import React, { ReactChildren, ReactElement, ReactNode, useEffect } from "react";
import { DataContainer, MainContainerStyles } from "./styled";

interface MainContainerType {
    children: ReactChildren | ReactNode | ReactElement
}

export function MainContainer({ children }: MainContainerType): React.ReactElement {
    return (
        <MainContainerStyles>
            <DataContainer>
                {children}
            </DataContainer>
        </MainContainerStyles>
    );
}

