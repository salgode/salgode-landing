import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 600,
    width: 300,
    backgroundColor: 'red'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function HowToView(){
  const classes = useStyles();
  const spacing = 10;
  return (
    <div style={{ paddingBottom: 10}}>
      <Grid item xs={12}>
       <Typography component="h1"  ariant="h5">
          <Box fontWeight="fontWeightBold" fontSize={24} m={1}>
              Usuario
          </Box>
       </Typography>
        <Grid container justify="center" spacing={spacing}>

            <Grid key={"a"} item>
              <Paper className={classes.paper} />
            </Grid>

            <Grid key={"b"} item>
              <Paper className={classes.paper} />
            </Grid>

<             Grid key={"c"} item>
              <Paper className={classes.paper} />
            </Grid>

        </Grid>
      </Grid>

    <hr style={{ marginTop: 10 }}/>
      <Grid item xs={12}>
      <Typography component="h1"  ariant="h5">
          <Box fontWeight="fontWeightBold" fontSize={24} m={1}>
              Conductor
          </Box>
       </Typography>
        <Grid container justify="center" spacing={spacing}>
          <Grid key={"a"} item>
            <Paper className={classes.paper} />
          </Grid>

          <Grid key={"b"} item>
            <Paper className={classes.paper} />
          </Grid>

          <Grid key={"c"} item>
            <Paper className={classes.paper} />
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
};