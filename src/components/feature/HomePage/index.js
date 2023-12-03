import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import style from "../style";

export const CryProCUrrencyChangesComponent = () => {
  const { cryptoCurrencyValue } = useSelector((state) => state.homepage);

  return (
    <Box sx={style.artistDetailContainer}>
      <Box style={{ width: "100%", display: "grid", padding: "0px 24px 8px" }}>
        <Box sx={style.pageScroll}>
          <Table sx={style.tblRating} style={{ margin: "0" }}>
            <TableHead>
              <TableRow>
                <TableCell>Coin Name (Code)</TableCell>
                <TableCell>Code </TableCell>
                <TableCell>Change (24h)</TableCell>
                <TableCell>Market Cap (24h)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cryptoCurrencyValue?.data?.length > 0 &&
                cryptoCurrencyValue?.data?.flat(1).map((item, index) => {
                  return (
                    <TableRow key={item?.id}>
                      <TableCell>
                        <Typography
                          component="h1"
                          style={{ display: "flex", gap: "20px" }}
                        >
                          <Image
                            src="/Images/bitcoin.png"
                            width={50}
                            height={50}
                            style={{
                              backgroundColor: "#fff",
                              borderRadius: "50%",
                            }}
                            alt="coin image"
                          />
                          {item?.name}
                        </Typography>
                      </TableCell>
                      <TableCell>{item?.symbol}</TableCell>
                      <TableCell>
                        <Typography
                          component="span"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          {item?.id % 2 === 0 ? (
                            <Image
                              src="/Images/up-arrow.png"
                              width={20}
                              height={20}
                              style={{
                                backgroundColor: "#fff",
                                borderRadius: "50%",
                              }}
                              alt="coin image"
                            />
                          ) : (
                            <Image
                              src="/Images/down.png"
                              width={20}
                              height={20}
                              style={{
                                backgroundColor: "#fff",
                                borderRadius: "50%",
                              }}
                              alt="coin image"
                            />
                          )}
                          123
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography component="span">₹ 63.1T</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            <TableFooter></TableFooter>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};
