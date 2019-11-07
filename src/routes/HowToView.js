import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import pass1info from '../assets/infografias/passenger1.jpg';
import pass2info from '../assets/infografias/passenger2.jpg';
import pass3info from '../assets/infografias/passenger3.jpg';
import driv1info from '../assets/infografias/driver1.jpg';
import driv2info from '../assets/infografias/driver2.jpg';
import driv3info from '../assets/infografias/driver3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: 600,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    fontFamily: 'Kepler296',
  },
}));

export default function HowToView() {
  const classes = useStyles();
  const spacing = 10;
  return (
    <div style={{ paddingBottom: 10 }}>
      <Grid item xs={12}>
        <Typography
          align="center"
          component="h1"
          variant="h5"
          className={classes.title}
        >
          <Box fontWeight="fontWeightBold" fontSize={24} m={1}>
            Pasajero
          </Box>
        </Typography>
        <Grid container justify="center" spacing={spacing}>
          <Grid key="a" item>
            <img
              alt="asdf"
              className={classes.img}
              src={pass1info}
            />
          </Grid>

          <Grid key="b" item>
            <img
              alt="asdf"
              className={classes.img}
              src={pass2info}
            />
          </Grid>

          <Grid key="c" item>
            <img
              alt="asdf"
              className={classes.img}
              src={pass3info}
            />
          </Grid>
        </Grid>
      </Grid>

      <hr style={{ marginTop: 10 }} />
      <Grid item xs={12}>
        <Typography align="center" component="h1" ariant="h5">
          <Box fontWeight="fontWeightBold" fontSize={24} m={1}>
            Conductor
          </Box>
        </Typography>
        <Grid container justify="center" spacing={spacing}>
          <Grid key="a" item>
            <img
              alt="asdf"
              className={classes.img}
              src={driv1info}
            />
          </Grid>

          <Grid key="b" item>
            <img
              alt="asdf"
              className={classes.img}
              src={driv2info}
            />
          </Grid>

          <Grid key="c" item>
            <img
              alt="asdf"
              className={classes.img}
              src={driv3info}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
