import React from 'react';
import { Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';


const CardComponent = ({children}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card style={{ width: "100%", minHeight: isMobile ? "50vh" : "100%", backgroundColor:"#1B2439", borderRadius:"1rem", margin:"1rem" }}>
      <CardContent>
        {children}
      </CardContent>
    </Card> 
  );
};

export default CardComponent;
