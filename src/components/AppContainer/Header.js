import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({ classes }) => (
  <Toolbar className={classes.toolbar}>
    <Typography
      component="h2"
      variant="h5"
      color="inherit"
      align="center"
      noWrap
      className={classes.toolbarTitle}
    >
      Salgo De
    </Typography>
</Toolbar>
);

export default Header;