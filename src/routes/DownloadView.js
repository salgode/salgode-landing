import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import appstore from '../assets/appstore.svg';
import googleplay from '../assets/google-play.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appstore: {
    width: 264,
    margin: 18,
    // maxWidth: 528,
    height: 'auto',
  },
  googleplay: {
    maxWidth: 300,
    height: 'auto',
  },
  control: {
    padding: theme.spacing(2),
  },
  item: {
    width: '100%',
    // display: "flex"
  },
}));

export default function DownloadView() {
  const classes = useStyles();
  const spacing = 10;

  return (
    <div style={{ paddingBottom: 10 }}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing} direction="column">
          <hr style={{ marginTop: 20 }} />
          <Grid key="a" container item justify="center" className={classes.item} direction="row">
            {/* <div> */}
            <Grid key="c" item spacing={spacing}>
              <Link href="https://salgode.app">
                <img
                  alt="asdf"
                  className={classes.appstore}
                  src={appstore}
                />
              </Link>
            </Grid>
            {/* </div> */}
          </Grid>
          <Grid key="b" container item justify="center" className={classes.item} direction="row">
            <div>
              <Grid key="d" item spacing={spacing}>
                <Link href="https://salgode.app">
                  <img
                    alt="asdf"
                    className={classes.googleplay}
                    src={googleplay}
                  />
                </Link>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
