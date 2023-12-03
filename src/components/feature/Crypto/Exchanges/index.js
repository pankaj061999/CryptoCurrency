import { ModelComponent } from "@/src/components/common/Model";
import { CurrencyBitcoin } from "@mui/icons-material";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import style from "../../style";

const ConvertComponent = () => {
  const [value, setValue] = useState(0.0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={style.root}>
      <Box sx={style.flexContainer}>
        <Typography variant="span">From</Typography>
        <Typography
          variant="span"
          style={{ whiteSpace: "nowrap", cursor: "pointer", color: "#777" }}
        >
          Currency: -- {selectedCurrency}
        </Typography>
      </Box>
      <Box sx={style.inputContainer}>
        <Box sx={style.inputBox}>
          <input value={value} onChange={handleInputChange} />
        </Box>

        <Box sx={style.currencyICon} onClick={() => toggleModal()}>
          <CurrencyBitcoin />
          <Typography>{selectedCurrency || "BitCoin"}</Typography>
        </Box>
      </Box>

      <Modal open={isOpen} onClose={toggleModal} disableScrollLock={true}>
        <ModelComponent
          handleLeaderBoardClose={toggleModal}
          setSelectedCurrency={setSelectedCurrency}
        />
      </Modal>
    </Box>
  );
};

export default ConvertComponent;
