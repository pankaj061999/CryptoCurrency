import { CryptoExChangeComponent } from "@/src/components/feature/Crypto";
import style from "@/src/components/feature/style";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch("/api/getCryptos");
        const data = await response.json();
        dispatch(setCryptoCurrencyValue(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptos();
  }, []);
  return (
    <Box sx={style.container}>
      <Typography component="h1">Crypto-Currency Convert</Typography>
      <Box sx={style.exchangeCSS}>
        <CryptoExChangeComponent />
      </Box>
    </Box>
  );
}
