import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Links from './Links';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  main: {
   //backgroundColor: 'blue',
  },
  footer: {
    //backgroundColor: 'red',
    bottom: 0,
    padding: theme.spacing(6, 0),
  },
}));


export default function AppContainer({ children }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header classes={classes} />
        <Links classes={classes}/>
        <Paper className={classes.main}>
          { children }
          </Paper>
        <Footer classes={classes} />
      </Container>
    </React.Fragment>
  );
}