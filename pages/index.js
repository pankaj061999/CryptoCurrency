import { CryProCUrrencyChangesComponent } from "@/src/components/feature/HomePage";
import style from "@/src/components/feature/style";
import { setCryptoCurrencyValue } from "@/src/redux/actions";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
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
      <Typography component="h1">HomePage CryptoCurrency</Typography>
      <CryProCUrrencyChangesComponent />
    </Box>
  );
}
