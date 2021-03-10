import React from "react";
import { Button, ButtonGroup, Checkbox, FormControlLabel, makeStyles, ThemeProvider, createMuiTheme, Typography, Container, Grid, Paper, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { orange, green } from "@material-ui/core/colors";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";


import logo from './logo.svg';
import './App.css';

/**
 * Custom Style
 */
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: "15px",
    color: "white",
    padding: "0 30px"
  }
});

/**
 * Custom Theme
 */
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 5
    }
  }
  // palette: {
  //   primary: {
  //     main: orange[500],
  //   },
  //   secondary: {
  //     main: green[400],
  //   }
  // }
});

/** 
 * @returns Custom Button
 */
function ButtonStyles() {
  const classes = useStyles();
  return <Button className={classes.root} onClick={(e) => handleButton(e)}>Styled Button</Button>;
}

/**
 * @returns Checkbox Example
 */
function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);

  return (
    <FormControlLabel control={<Checkbox
      checked={checked}
      icon={<DeleteIcon />}
      checkedIcon={<SaveIcon />}
      onChange={(e) => setChecked(e.target.checked)}
      inputProps={{ "aria-label": "secondary checkbox" }} />}
      label="Testing Checkbox" />
  );
}

/**
 * Creates an Alert
 */
function handleButton(e) {
  e.preventDefault();
  console.log(e);
  alert(`${e.target.outerText} Clicked!`);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">

        <div className="App">
          <header className="App-header">

            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button onClick={(e) => handleButton(e)}>
                  Login
                </Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h2">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>

            <ButtonStyles />

            {/**
             * xs, sm are the view ports.
             */}
            <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>

            <CheckboxExample />

            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />} onClick={(e) => handleButton(e)} >
                Save
              </Button>
              <Button startIcon={<DeleteIcon />} color="secondary" onClick={(e) => handleButton(e)}>
                Discard
              </Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />

          </header>
        </div>

      </Container>
    </ThemeProvider>
  );
}

export default App;
