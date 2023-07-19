import React from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "./Card";

const Widget = ({children}) => {
  return (
    <Container maxWidth="100%" sx={{  marginBottom: "10px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
        <CardComponent>
          {children}
        </CardComponent>
    </Container>
  );
};

export default Widget;
