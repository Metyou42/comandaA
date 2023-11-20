/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-multi-comp */
import { useCookie } from "contexts/cookieContext";
import { Login } from "pages/Login";
import { Archive } from "pages/Archive";
import { Register } from "pages/Register";
// import NotFoundPage from "pages/NotFoundPage";
import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Deadlines } from "pages/Deadlines";
import { Notes } from "pages/Notes";
import { PagesProfile } from "pages/PagesProfile";
import { CreateNotes } from "pages/CreateNotes";
import { TimeTable } from "pages/TimeTable";
import { TechnicalSupport } from "pages/TechnicalSupport";
import { Search } from "pages/Search";
import { Settings } from "./pages/Settings";
// import { toastError } from "components/Toastify";

function SwitchRoutes(): React.ReactElement {
    const { getAccessTokenCookie } = useCookie();
    const currentAccessToken = getAccessTokenCookie();

    const { t } = useTranslation();
    const history = useHistory();
    const location = useLocation();

    // if (!["/login"].includes(location.pathname) && !currentAccessToken) {
    //     // toastError(t("validations:session.expired"));
    //     history.push("/login")
    // }

    if (!currentAccessToken) {
        return (
            <Switch>
                <Route component={Login} path="/" exact />

                <Route component={Login} path="/login" exact />

                <Route component={Register} path="/registration" exact />

                <Route component={Archive} path="/archive" exact />

                <Route component={Deadlines} path="/deadlines" exact />

                <Route component={Notes} path="/notes" exact />

                <Route component={CreateNotes} path="/createnotes" exact />

                <Route component={PagesProfile} path="/pagesProfile" exact />

                <Route component={TimeTable} path="/TimeTable" exact />

                <Route component={TechnicalSupport} path="/technicalsupport" exact />

                <Route component={Search} path="/search" exact />

                <Route component={Settings} path="/settings" />
            </Switch>
        );
    }

    return (
        <Switch>
            {/* <Route render={(props) => <LoadDataPage {...props} apiServerUrl={apiServerUrl} setApiServerUrl={setApiServerUrl} isApiServerConnected={isApiServerConnected} setIsApiServerConnected={setIsApiServerConnected} />} path="/" exact />

            <Route render={(props) => <LoadDataPage {...props} apiServerUrl={apiServerUrl} setApiServerUrl={setApiServerUrl} isApiServerConnected={isApiServerConnected} setIsApiServerConnected={setIsApiServerConnected} />} path="/load" exact />

            <Route render={(props) => <Logs {...props} apiServerUrl={apiServerUrl} isApiServerConnected={isApiServerConnected} />} path="/logs" exact />

            <Route component={Login} path="/login" exact />

            <Route path="*" component={() => <NotFoundPage isAuth />} /> */}

            {/* <Route component={Login} path="/" exact /> */}

            <Route component={TechnicalSupport} path="/technicalsupport" exact />

            <Route component={Search} path="/search" exact />

            <Route component={Settings} path="/settings" />
        </Switch>
    );
}

function Routes(): React.ReactElement {
    return (
        <BrowserRouter>
            <SwitchRoutes />
        </BrowserRouter>
    );
}

export default Routes;
