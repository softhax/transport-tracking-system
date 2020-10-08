import React, { useEffect } from "react";
import {connect} from "react-redux";
import LoadingPage from "./LoadingPage";
import { Link } from "react-router-dom";
import VehiclesList from "./VehiclesList";
import {getVehicles} from "../actions/vehicles";

const Dashboard = ({user,vehicles,getVehicles})=>{
    useEffect(()=>{
        getVehicles();
    },[getVehicles]);
    return (
        user==null ? <LoadingPage/>        
    :(
        <div>
            <h1>Logged in welcome to Dashboard</h1>
            {user.isUpdater===1 &&  <Link to="/vehicles/add">Add Vehicle</Link>}
            {user.isUpdater===1 && <h2>Vehicles List</h2>}
            {user.isUpdater===1 && <VehiclesList />}
        </div>
    )
      )
}

const mapStateToProps = (state)=>({
    user:state.auth.user,
    vehicles:state.vehicles
})

export default connect(mapStateToProps,{getVehicles})(Dashboard);