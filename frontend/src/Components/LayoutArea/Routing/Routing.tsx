import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AddNewMeeting from "../../MeetingsArea/AddNewMeeting/AddNewMeeting";
import MeetingsList from "../../MeetingsArea/MeetingsList/MeetingsList";
import Page404 from "../Page404/Page404";
function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Switch>
                <Route path="/meetings" component={MeetingsList} exact />
                <Route path="/add-meeting" component={AddNewMeeting} exact />
                <Redirect from="/" to="/meetings" exact />
                <Route component={Page404} />
            </Switch>
        </div>
    );
}

export default Routing;
