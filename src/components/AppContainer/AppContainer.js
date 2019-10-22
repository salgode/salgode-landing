import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Links from './Links';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  toolbar: {
    borderBottom: '1px solid blue',
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
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    // backgroundColor: 'red',
    bottom: 0,
    padding: theme.spacing(6, 0),
  },
}));


export default function AppContainer({ children }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Header classes={classes} />
        <Links classes={classes} />
        {children}
        <Footer classes={classes} />
      </Container>
    </>
  );
}
