import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProdItem from "./ProdItem";
import Category from "./Category";

const ProdList = () => {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:4444/product");
    setData(result.data);
    setDataCopy(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  //   const handleClick=()=>{    ///1
  const handleClick = (item) => {
    const filt = dataCopy.filter((fill) => fill.category === item); //5
    setData(filt);
  };

  return (
    <Grid container spacing={2}>
      {/* <Category  handleClick={handleClick} />    /* 2 */}
      <Category handleClick={handleClick} />
      {data.map((item) => (
        <ProdItem item={item} />
      ))}
    </Grid>
  );
};

export default ProdList;
