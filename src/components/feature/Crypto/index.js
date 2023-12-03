import { Box } from "@mui/material";
import Image from "next/image";
import style from "../style";
import ConvertComponent from "./Exchanges";
import ConvertComponentTO from "./Exchanges/ExchangeTo";

export const CryptoExChangeComponent = () => {
  return (
    <Box>
      <ConvertComponent />
      <Box sx={style.exchangeICONCSS}>
        <Image width={25} height={25} src="/Images/change.png" />
      </Box>
      <ConvertComponentTO />
    </Box>
  );
};
