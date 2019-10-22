import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const Header = ({ classes }) => (
  <Toolbar className={classes.toolbar}>
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <img src={require('../../assets/_salgode.png')} style={{ width: 200 }} alt="Salgo De" />
    </Grid>
  </Toolbar>
);

export default Header;
