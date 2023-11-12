import { CardContent, Card, Grid, Button, Rating } from "@mui/material";
import React from "react";

const ProdItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card align="center">
        <CardContent>
          <h4>{item.name}</h4>
          <img src={item.image} alt="" style={{ height: "150px" }} />
          <h4>{item.category}</h4>
          <Button variant="contained" color="success">
            {item.price}
          </Button>
          <br />
          <Rating value={item.rating} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProdItem;
