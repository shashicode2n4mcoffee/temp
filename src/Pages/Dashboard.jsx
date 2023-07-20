import Widget from "../Components/Widget";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsersRequest } from "../Redux/actions/usersActions";
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
import { EventDashboard } from "../Components/EventDashboard";
import { LineCharts } from "../Components/SentimentsChart";
import CategoriesBarChart from "../Components/CategoriesBarChart";
import TimeMove from "../Components/TimeMove";
import ChartDataModal from "../Components/ChartDataModal";
import EventTime from "../Components/EventTime";

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

const events = [
  {
    title: "India is growing",
    status: "ANNOUNCED",
    action: "Summary",
    time: "Fri Dec 10 2023 05:30 GMT+0530",
  },
  {
    title: "India is growing",
    status: "ANNOUNCED",
    action: "Summary",
    time: "Fri Dec 11 2023 05:30 GMT+0530",
  },
];

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <DashboardContainer maxWidth="xl">
        <Grid container>
          <Grid item xs={2}>
            <Navbar />
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            sx={{ marginTop: "60px" }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Grid item>
                <Widget>
                  <TradingViewWidget />
                </Widget>
              </Grid>
              <Grid item>
                <Widget>
                  {/* <BarChart /> */}
                  {/* <TimeMove /> */}
                  <EventTime />
                </Widget>
              </Grid>
              <Grid item>
                <Widget>
                  <LineCharts />
                </Widget>
              </Grid>
              <Grid item>
                <Widget>
                  {/* <TimeComponent /> */}
                  {/* <EventDashboard date={new Date()} events={events} /> */}
                  {/* <LineCharts /> */}
                  <CategoriesBarChart />
                </Widget>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
