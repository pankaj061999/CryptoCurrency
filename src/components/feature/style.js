const style = {
  container: {
    color: "#000",
    "& h1": {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "600",
      lineHeight: "2.5",
    },
  },
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    flexDirection: "column",
    borderRadius: "20px",
    width: "100%",
    cursor: "pointer",
    border: "1px solid #3f51b5",
    padding: "30px 10px 30px 10px",
    background: " #ddd8d8",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "16px",
    gap: "400px",
    color: "#888",
    fontSize: "12px",
    fontWeight: "500",
    "& span": {
      fontSize: "14px",
      fontWeight: "500",
      whiteSpace: "nowrap",
      cursor: "pointer",
      color: "#777",
    },
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  inputBox: {
    "& input": {
      width: "100%",
      fontSize: "24px",
      outline: "none",
      width: "16ch",
      color: "#5E6673",
      backgroundColor: "#e5dada",
      borderStyle: "none",
    },
  },
  exchangeICONCSS: {
    cursor: "pointer",
    textAlign: "center",
    transform: "rotate(90deg)",
    marginTop: "30px",
    marginBottom: "30px",
  },
  currencyICon: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
  iconButton: {
    borderRadius: "50%",
    padding: "8px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  exchangeCSS: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },

  joinWaitListContainer: {
    position: "absolute",
    display: "block",
    maxWidth: "571px",
    background: "#100f12",
    margin: "30px auto",
    borderRadius: "12px",
    border: "0 solid #e2e8f0",
    overflow: "hidden",
    width: "90%",
    left: "50%",
    right: "0",
    top: "40%",
    transform: "translate(-50%, -50%)",
  },
  joinWaitListContainerHeading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    "& h2": {
      color: "#fff",
      fontWeight: "600",
      margin: "0px",
      fontSize: "30px",
      "@media(max-width:767px)": {
        fontSize: "25px",
      },
    },
    "& button": {
      color: "#fff",
      fontSize: "13px",
      padding: "6px 17px",
      marginRight: "5px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      "& svg": {
        fontSize: "15px",
      },
    },
  },
  topHeading: {
    borderBottom: "1px solid #464646",
  },
  LeaderBoardTable: {
    display: "block",
    padding: "10px",
    marginBottom: "10px",
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      padding: "0",
      margin: "0",
      alignItems: "center",
      "& li": {
        listStyle: "none",
        color: "#0C091B",
        width: "25%",
        padding: "0 10px",
        fontSize: "18px",
        fontWeight: "600",
      },
    },

    "@media(max-width:480px)": {
      display: "none",
    },
  },

  JoinWaitListDetails: {
    textAlign: "left",
    padding: "15px",
    "& p": {
      fontWeight: "500",
      color: "#fff",
    },
    "& a": {
      fontWeight: "500",
      color: "blue",
    },
  },

  formgroup: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    gap: "20px",
  },
  formlist: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& label": {
      color: "#b7b9bde6",
      fontSize: "13px",
      color: "#fff",
      marginBottom: "10px",
    },
    "& .required": {
      color: "#e8a137",
      marginLeft: "2px",
    },
    "& input": {
      width: "100%",
      padding: "10px 6px",
      height: "40px",
      border: "1px solid rgba(46,48,57,.5)",
      backgroundColor: "rgba(24,23,26,.5)",
      fontSize: "14px",
      borderRadius: "4px",
      color: "#fff",
    },
    "& select": {
      width: "100%",
      padding: "10px 6px",
      height: "40px",
      border: "1px solid rgba(46,48,57,.5)",
      backgroundColor: "#000",
      fontSize: "14px",
      borderRadius: "4px",
      color: "#fff",
    },
  },

  submitButton: {
    display: "flex",
    background: "rgba(32,30,35,.9)",
    borderRadius: "5px",
    padding: "10px 25px",
    border: "1px solid rgba(46,48,57,.5)",
    color: "#b7b9bde6",
    fontWeight: "700",
    fontSize: "13px",
    margin: "20px 15px",
    textTransform: "none",
    gap: "5px",
    "& svg": {
      fontSize: "18px",
    },
  },

  artistDetailContainer: {
    backgroundColor: "#fff",
    overflowY: "scroll",
    height: "750px",
    padding: "10px 20px 30px 40px",
    marginLeft: "250px",
    marginRight: "250px",
    border: "2px solid gray",
    borderRadius: "20px",
  },
  tblRating: {
    position: "relative",
    display: "table",
    width: "100% !important",
    marginTop: "20px",
    "& tr": {
      color: "rgb(168, 168, 168)",
      borderBottom: "1px solid rgb(101 95 95 / 20%)",
      ":hover": {
        backgroundColor: "#f7f7f8",
      },
    },
    "& td": {
      padding: "10px !important",
      color: "#000",
      border: "none !important",
    },
    "& th": {
      padding: "4px !important",
      color: "rgb(168, 168, 168)",
      fontWeight: "500",
      border: "none !important",
      fontSize: "12px",
    },
    "& tfoot td": {
      padding: "20px 0 !important",
      border: "none",
    },
    "& tfoot tr": {
      border: "none",
    },
    "& td p, & td span, & td a": {
      fontSize: "13px",
      fontWeight: "400",
      color: "#000",
    },
    "& td h1": {
      fontSize: "13px",
      fontWeight: "900",
      color: "#000",
    },
    "& td p.text-ellipsis": {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    "& td a": {
      color: "#E14084",
    },
    "& tr td:first-child img": {
      width: "32px",
      height: "32px",
    },
    "& tfoot .MuiPagination-ul li button, & tfoot .MuiPagination-ul li div": {
      borderColor: "#8E8AA4",
      color: "#8E8AA4",
    },
    "& tfoot .MuiPagination-ul li button.Mui-selected": {
      borderColor: "#8E8AA4",
      backgroundColor: "#8E8AA4",
      color: "#fff",
    },
    "& tfoot .MuiPagination-ul li:first-child button, & tfoot .MuiPagination-ul li:last-child button":
      {
        border: "none",
      },
  },
};

export default style;
