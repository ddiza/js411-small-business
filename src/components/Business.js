import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import Map from './Map';


const Business = (props) => {
  const id = useParams().id;
  const business = props.businesses[id];
  console.log(business)

  return (
    <Container maxWidth="sm" className="business-container">
      <Paper className="business-paper">

        <h1>{business.name}</h1>
        <p>{business.address}</p>
        <p>{business.hours}</p>
        <p>{business.description}</p>

        <Map business={business}></Map>
      </Paper>
    </Container>
  );
};

export default Business;
