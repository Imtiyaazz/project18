import { Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const Category = ({ handleClick }) => {     ///3
const Category = ({ handleClick }) => {
  const [cate, setCate] = useState([]);
  const getApi = async () => {
    const result = await axios.get("http://localhost:4444/cate/");
    setCate(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid item xs={12}>
      {cate.map((item) => (
        <Button
          onClick={() => {
            // handleClick(item);   //4
            handleClick(item);
          }}
          sx={{ marginRight: 4 }}
          variant="contained"
        >
          {item}
        </Button>
      ))}
    </Grid>
  );
};

export default Category;
