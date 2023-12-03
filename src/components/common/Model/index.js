import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import style from "../../feature/style";
import { useSelector } from "react-redux";
import Image from "next/image";

export const ModelComponent = ({
  handleLeaderBoardClose,
  setSelectedCurrency,
}) => {
  const { cryptoCurrencyValue } = useSelector((state) => state.homepage);

  const options = cryptoCurrencyValue?.data || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(true);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filtered = options.filter((option) =>
      option?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
    setIsOpen(true);
  };

  const handleMenuItemClick = (item) => {
    setIsOpen(false);
    setSelectedCurrency(item?.name);
    handleLeaderBoardClose();
  };

  return (
    <Box sx={style.joinWaitListContainer}>
      <Box sx={style.topHeading}>
        <Box sx={style.joinWaitListContainerHeading}>
          <h2>Select Currency</h2>
        </Box>
      </Box>

      <Box sx={style.formgroup}>
        <Box sx={style.formlist}>
          <input
            type="text"
            label="Search Currency"
            placeholder="Search currency"
            value={searchTerm}
            onChange={handleSearch}
            style={{ marginBottom: "30px" }}
          />
          <Box style={{ overflowY: "scroll", maxHeight: "300px" }}>
            {isOpen &&
              filteredOptions?.map((option, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={option}
                    onClick={() => handleMenuItemClick(option)}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "50px",
                        alignItems: "center",
                      }}
                    >
                      <Box>
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
                      </Box>
                      <Box>
                        <Typography component="h1">{option?.symbol}</Typography>
                        <Typography component="p">{option?.name}</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                );
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
