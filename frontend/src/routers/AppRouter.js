import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createHistory from "history/createBrowserHistory"
import Landing from "../components/Landing";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Login from "../components/Login";
import AddVehicles from "../components/AddVehicles";
import EditVehicle from "../components/EditVehicle";
import JourneyDashboard from "../components/JourneyDashboard";
import AddJourneys from "../components/AddJourneys";
import EditJourney from "../components/EditJourney";
import PassengersDashboard from "../components/PassengersDashboard";
import ViewPassengerDetails from "../components/ViewPassengerDetails";
import UserJourneyDetails from "../components/UserJourneyDetails";

const history = createHistory();

const AppRouter = ()=>{
    return(
        <Router history={history}>
            <Header history={history}/>
            <Switch>
                <Route path="/" component={Landing} exact={true}/>
                <Route path="/login" component={Login} exact={true} />
                <Route path="/register" component={Register} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} exact={true}/>
                <PrivateRoute path="/vehicles/add" component={AddVehicles} exact={true}/>
                <PrivateRoute path="/vehicles/edit/:id" component={EditVehicle} exact={true}/>
                <PrivateRoute path="/vehicles/:id/journeys/" component={JourneyDashboard} exact={true}/>
                <PrivateRoute path="/vehicles/:id/journeys/add" component={AddJourneys} exact={true}/>
                <PrivateRoute path="/journeys/edit/:id" component={EditJourney} exact={true}/>
                <PrivateRoute path="/vehicles/:id1/journeys/:id2/passengers" component={PassengersDashboard} exact={true}/>
                <PrivateRoute path="/vehicles/:id1/journeys/:id2/passengers/:id3" component={ViewPassengerDetails} exact={true}/>
                <PrivateRoute path="/journey/:id" component={UserJourneyDetails} exact={true}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;