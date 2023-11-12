import React, { useEffect, useState } from "react";
import Cate from "./Cate";
import { Grid } from "@mui/material";
import axios from "axios";
import Prditem from "./Prditem";

const PrdList = () => {
  const [btn, setBtn] = useState([]);
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:4444/cate");
    const result1 = await axios.get("http://localhost:4444/product");
    setBtn(result.data);
    setDataCopy(result1.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleClick = (item) => {
    const filt = dataCopy.filter((filtdata) => filtdata.category == item);
    setData(filt);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {btn.map((item) => (
          <Cate handleClick={handleClick} item={item} />
        ))}

        {data.map((item) => (
          <Prditem item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default PrdList;
