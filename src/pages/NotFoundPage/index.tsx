import React from "react";
import { useHistory } from "react-router-dom";
import { Description, MainContainer, RedirectButton } from "./styled";
import { useCookie } from "contexts/cookieContext";

function NotFoundPage(): React.ReactElement {
    const { getAccessTokenCookie } = useCookie();
    const currentAccessToken = getAccessTokenCookie();
    const history = useHistory();

    return (
        <MainContainer>

            <Description>{"Opps, this page doesnt exist :("}</Description>

            <RedirectButton
                onClick={() => {
                    history.push("/");
                }}
            >
                {currentAccessToken ? "Go to homepage" : "Go to sign in"}
            </RedirectButton>
        </MainContainer>
    );
}

export default NotFoundPage;
