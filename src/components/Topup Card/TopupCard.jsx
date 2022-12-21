import {
  Box,
  Button,
  Checkbox,
  Container,
  InputLabel,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Arrow from "./doubleArrow.png";
import "./TopupCard.css";

const useStyles = makeStyles((theme) => ({
  space: {
  
    width: "350px",
  },
  formButton: {
    right: theme.spacing(8),
    position: "absolute",
    marginTop: "10px",
  },
  FormHeader: {
    fontSize: "20px",
    fontWeight: "bold",
  
  },
  Form: {
    backgroundColor: "white",
    paddingBottom: "80px",
   
    marginTop: "50px",
  },
  buttons: {
    backgroundColor: "#4263EB",
    color: "white",
    width: "200px",
    height: "40px",
    marginLeft: "10px",
    marginTop: "20px",
  },
}));

const TopupCard = () => {
  const classes = useStyles();

  return (
    <Container>
    <div className="topcard_container">
      <Box component="form" className={classes.Form}>
        <Box>
          <Typography className={classes.FormHeader}>
            Please fill in the fields below
          </Typography>
        </Box>
        <div className="none">
          <InputLabel className={classes.space}>RFID Passnummer</InputLabel>
          <TextField
            required
            placeholder="ex. 0006621998659862"
            id="outlined-required"
            className={classes.space}
            variant="outlined"
          />
        </div>
        <div className="textfields">
          <div>
            <InputLabel className={classes.space}>Euro</InputLabel>
            <TextField
              required
              placeholder="0"
              id="outlined-required"
              type="password"
              className={classes.space}
              variant="outlined"
            />
          </div>
          <img
            src={Arrow}
            alt=""
            style={{ height: "50px", paddingTop: "30px" }}
          />
          <div>
            <InputLabel className={classes.space}>Credit</InputLabel>
            <TextField
              required
              placeholder="0"
              id="outlined-required"
              type="password"
              className={classes.space}
              variant="outlined"
            />
          </div>
        </div>
        <div>
          <Checkbox style={{ color: "#4263EB", fontWeight: "bold" }}/>
          <p style={{ display: "inline" }}>
            I accept to agree with the <a href=".#">Terms & Conditions</a>
          </p>
        </div>
        <Button className={classes.buttons}>Pay</Button>
      </Box>
    </div>
    </Container>
  );
};

export default TopupCard;
