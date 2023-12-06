/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-multi-comp */
import { useCookie } from "contexts/cookieContext";
import { Login } from "pages/Login";
import { Archive } from "pages/Archive";
import { Register } from "pages/Register";
import { NewPassword } from "pages/NewPassword";
import { ForgotPassword } from "pages/ForgotPassword";
// import NotFoundPage from "pages/NotFoundPage";
import React from "react";
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
import { EditSubject } from "pages/EditingSubject";
import { GroupStudents } from "pages/GroupStudents";
import { CreateGroup } from "pages/CreateGroup";
import { TechnicalSupport } from "pages/TechnicalSupport";
import { Search } from "pages/Search";
import { Settings } from "./pages/Settings";
import NotFoundPage from "pages/NotFoundPage";
import {GroupSubjects} from "./pages/GroupSubjects";
import {CreateLecturer} from "./pages/CreateLecturer";
import {CreateSubject} from "./pages/CreateSubject";
// import { toastError } from "components/Toastify";

function SwitchRoutes(): React.ReactElement {
    const { getAccessTokenCookie } = useCookie();
    const currentAccessToken = getAccessTokenCookie();

    const { t } = useTranslation();
    const history = useHistory();
    const location = useLocation();

    if (!["/login", "/registration", "/newpassword", "/forgotpassword"].includes(location.pathname) && !currentAccessToken) {
        // toastError(t("validations:session.expired"));
        history.push("/login")
    }

    if (!currentAccessToken) {
        return (
            <Switch>
                <Route component={Login} path="/" exact />

                <Route component={Login} path="/login" exact />

                <Route component={Register} path="/registration" exact />

                <Route component={NewPassword} path="/newpassword" exact />

                <Route component={ForgotPassword} path="/forgotpassword" exact />

                <Route path="*" component={NotFoundPage} />
            </Switch >
        );
    }

    return (
        <Switch>
            <Switch>
                <Route component={Profile} path="/" exact />

                <Route component={Archive} path="/archive" exact />

                <Route component={Deadlines} path="/deadlines" exact />

                <Route component={Notes} path="/notes" exact />

                <Route component={CreateNotes} path="/create/note" exact />

                <Route component={Profile} path="/profile" exact />

                <Route component={TimeTable} path="/TimeTable" exact />

                <Route component={Lecturer} path="/Lecturer" exact />

                <Route component={Subject} path="/subject" exact />

                <Route component={EditLecturer} path="/edit/lecturer" exact />

                <Route component={EditSubject} path="/edit/subject" exact />

                <Route component={CreateLecturer} path="/create/lecturer" exact />

                <Route component={CreateSubject} path="/create/subject" exact />

                <Route component={GroupStudents} path="/group/students" exact />
                
                <Route component={GroupSubjects} path="/group/subjects" exact />

                <Route component={CreateGroup} path="/create/group" exact />

                <Route component={TechnicalSupport} path="/technicalsupport" exact />

                <Route component={Search} path="/search" exact />

                <Route component={Settings} path="/settings" />

                <Route path="*" component={NotFoundPage} />
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