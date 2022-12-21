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
import "./RequestRefund.css";

const useStyles = makeStyles((theme) => ({
  space: {
    margin: "0px 20px 0 10px",
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
    margin: "10px 0px 10px 20px",
  },
  Form: {
    backgroundColor: "white",
    paddingBottom: "80px",
    marginLeft: "10px",
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
  buttons: {
    backgroundColor: "#4263EB",
    color: "white",
    width: "200px",
    height: "40px",
    marginLeft: "10px",
    marginTop: "20px",
  },
}));

const RequestRefund = () => {
  const classes = useStyles();

  return (
 <Container>
      <Box component="form" className={classes.Form}>
        <Box>
          <Typography className={classes.FormHeader}>
            Please fill in the fields below
          </Typography>
        </Box>
        <div className="firstTextFields">
          <div>
            <InputLabel className={classes.space}>Name</InputLabel>
            <TextField
              required
              placeholder="ex. John Doe"
              id="outlined-required"
              className={classes.space}
              variant="outlined"
            />
          </div>
          <div>
            <InputLabel className={classes.space}>Phone</InputLabel>
            <TextField
              required
              placeholder="ex. +31716778672"
              id="outlined-required"
              className={classes.space}
              variant="outlined"
            />
          </div>
          <div>
            <InputLabel className={classes.space}>Email</InputLabel>
            <TextField
              required
              placeholder="ex. johndoe@gmail.com"
              id="outlined-required"
              className={classes.space}
              variant="outlined"
            />
          </div>
          
        </div>
        <div className="secondTextFields">
          <div>
            <InputLabel className={classes.space}>IBAN</InputLabel>
            <TextField
              required
              placeholder="ex. NL81NGB1091926204"
              id="outlined-required"
              type="password"
              className={classes.space}
              variant="outlined"
            />
          </div>
          <div>
            <InputLabel className={classes.space}>RFID Passnummer</InputLabel>
            <TextField
              required
              placeholder="ex. 0006621998659862"
              id="outlined-required"
              type="password"
              className={classes.space}
              variant="outlined"
            />
          </div>
          <div>
            <InputLabel className={classes.space}>RFID CVC</InputLabel>
            <TextField
              required
              placeholder="ex. 703"
              id="outlined-required"
              type="password"
              className={classes.space}
              variant="outlined"
            />
          </div>
        </div>
        <div>
        <Checkbox style={{ color: "#4263EB", fontWeight: "bold" }}/>          <p style={{ display: "inline" }} className={classes.terms}>
            I accept to agree with the <a href=".#">Terms & Conditions</a>
          </p>
        </div>
        <Button className={classes.buttons}>Send Request</Button>
      </Box>
      
      </Container>
  );
};

export default RequestRefund;
