/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-multi-comp */
import { useCookie } from "contexts/cookieContext";
import { Login } from "pages/Login";
import { Archive } from "pages/Archive";
import { Register } from "pages/Register";
// import NotFoundPage from "pages/NotFoundPage";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Deadlines } from "pages/Deadlines";
import { Notes } from "pages/Notes";
import { CreateNotes } from "pages/CreateNotes";
import { TimeTable } from "pages/TimeTable";
import { Lecturer } from "pages/Lecturer";
import { Profile } from "pages/Profile";
import { Subject } from "pages/Subject";
import { EditLecturer } from "pages/EditLecturer";
import { EditingSubjectProfile } from "pages/EditingSubjectProfile";
import { GroupList } from "pages/GroupList";
import { CreateGroup } from "pages/CreateGroup";
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

                <Route component={Profile} path="/profile" exact />

                <Route component={TimeTable} path="/timeTable" exact />

                <Route component={Lecturer} path="/lecturer" exact />

                <Route component={Subject} path="/subject" exact />

                <Route component={EditLecturer} path="/edit/lecturer" exact />

                <Route component={EditingSubjectProfile} path="/edit/subject" exact />

                <Route component={GroupList} path="/grouplist" exact />

                <Route component={CreateGroup} path="/CreateGroup" exact />
            </Switch >
        );
    }

    return (
        <Switch>
            <Switch>
                <Route component={Login} path="/" exact />

                <Route component={Login} path="/login" exact />

                <Route component={Register} path="/registration" exact />

                <Route component={Archive} path="/archive" exact />

                <Route component={Deadlines} path="/deadlines" exact />

                <Route component={Notes} path="/notes" exact />

                <Route component={CreateNotes} path="/createnotes" exact />

                <Route component={Profile} path="/profile" exact />

                <Route component={TimeTable} path="/TimeTable" exact />

                <Route component={Lecturer} path="/Lecturer" exact />

                <Route component={Subject} path="/subject" exact />

                <Route component={EditLecturer} path="/edit/lecturer" exact />

                <Route component={EditingSubjectProfile} path="/edit/subject" exact />

                <Route component={GroupList} path="/grouplist" exact />

                <Route component={CreateGroup} path="/CreateGroup" exact />
            </Switch >
        </Switch >
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