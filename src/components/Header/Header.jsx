import { Box, Button, TextField, Typography,Grid, Container } from "@material-ui/core";
import "./Header.css";
import Plus from "./VectorPlus.png";
import Star from "./Star.png";

const currencies = [
  {
    value: "USD",
    label: "ENGLISH",
  },
];

const Header = () => {
  return (
 
 <Grid  className="container">
     <Container>
      <Box className="header">
        <Box className="left">
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Magisch
          </Typography>
          <Typography
            variant="h4"
            style={{ color: "#9B2423", fontWeight: "bold" }}
          >
            Maastricht
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h4"
              style={{
                fontWeight: "bold",
                display: "inline",
                marginRight: "3px",
              }}
            >
              Vrijthof
            </Typography>
            <img src={Star} alt="" height="30px" />
          </div>
        </Box>
        <Box className="right">
          <TextField
            id="outlined-select-currency-native"
            select
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            color="white"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box className="debitBalance">
        <Typography>Debit Balance</Typography>
        <div>
          <img src={Plus} alt="" height="15px" />
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              fontFamily: "Manrope",
              fontStyle: "normal",
              display: "inline",
              marginLeft: "10px",
            }}
          >
            2500
          </Typography>
        </div>
      </Box>
      <Box className="buttons">
        <Button className="buttons_left">TopUp Card</Button>
        <Button className="buttons_right">Request Refund</Button>
      </Box>
      </Container>
      </Grid>
     
  );
};

export default Header;
