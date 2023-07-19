import Widget from "../Components/Widget";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsersRequest } from '../Redux/actions/usersActions';
import { styled } from "@mui/system";
import { Container, Grid, Paper, Typography } from "@mui/material";
import LineGraph from "../Components/LineGraph";
import BarChart from "../Components/BarChart";
import TradingViewWidget from "../Components/TradingViewWidget";
import Navbar from "../Components/Navbar";
import TimeComponent from "../Components/TimeComponent";
import WidgetItems from "../Components/WidgetItems";
import Sidebar from "../Components/Sidebar";
import { useSelector, useDispatch } from "react-redux";

const DashboardContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: "#45454D",
}));

const DashboardPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
}));

const Dashboard = ({ users, loading, error, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
    // <div style={{ display: "flex" }}>
    //   {/* <div
    //     style={{
    //       width: "5rem",
    //       backgroundColor: "white",
    //       height: "100vh",
    //       zIndex: "10",
    //       backgroundColor: "#7B7A7A",
    //       position:"fixed"
    //     }}
    //   ></div>
    //    <div
    //     style={{
    //       width: "5rem",
    //       backgroundColor: "white",
    //       height: "100vh",
    //       zIndex: "10",
    //       backgroundColor: "#7B7A7A",
    //     }}
    //   ></div> */}
    //   <DashboardContainer maxWidth="xl">
    //     <Grid container>
    //       <Grid item xs={2}>
    //         <Navbar />
    //       </Grid>
    //       <Grid
    //         container
    //         direction="row"
    //         spacing={1}
    //         sx={{ marginTop: "60px" }}
    //       >
    //         <Grid item xs={12} sm={12} md={12}>
    //           <Widget>
    //             <TradingViewWidget />
    //           </Widget>
    //           <Grid item>
    //             <Widget>
    //               <BarChart />
    //             </Widget>
    //           </Grid>
    //           <Grid item>
    //             <Widget>
    //               <LineGraph />
    //             </Widget>
    //           </Grid>
    //           <Grid item>
    //             <Widget>
    //               {/* <TimeComponent /> */}
    //               <WidgetItems />
    //             </Widget>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </DashboardContainer>
    // </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = {
  fetchUsers: fetchUsersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
