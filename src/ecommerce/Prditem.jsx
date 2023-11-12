import { Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";

const Prditem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card
        align="center"
        sx={{
          bgcolor: "black",
          borderRadius: "0px 30px 0px 30px",
          color: "white",
          boxShadow: "5px 5px 5px 3px grey",
        }}
      >
        <CardContent>
          <h2>{item.name}</h2>
          <img src={item.image} alt="" style={{ height: "150px" }} />
          <h2>{item.category}</h2>
          <h2>₹ {item.price}</h2>
          <Rating
            value={item.rating}
            sx={{ bgcolor: "aliceblue", borderRadius: "10px", padding: "5px" }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Prditem;
