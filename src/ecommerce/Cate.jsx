import { Button, Grid } from "@mui/material";
import React from "react";

const Cate = ({ item, handleClick }) => {
  return (
    <Grid item xs={3}>
      <Button onClick={() => handleClick(item)} fullWidth variant="contained">
        {item}
      </Button>
    </Grid>
  );
};

export default Cate;
