import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 'auto',
    padding: theme.spacing(6, 0),
  },
  fab: {
    margin: theme.spacing(1),
  },
  image: {
    width: '50px',
    heigth: '50px'
  },
  gh: {
    width: '60px',
    heigth: '60px'
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
      <Grid
       container
       direction="row"
       justify="space-evenly"
       alignItems="center"
      >
        <Typography variant="h6" align="center" gutterBottom>

        <a href="https://www.facebook.com/SalgoDe-112132566873573/"><img src={require('../../assets/fb.png')} alt="fb" className={classes.image} /></a>
        </Typography>

        <Typography variant="h6" align="center" gutterBottom>

        <a href="https://www.instagram.com/salgodecl/"> <img src={require('../../assets/ig.png')} alt="ig" className={classes.image} /></a>
        </Typography>

        <Typography variant="h6" align="center" gutterBottom>
          <a href="https://github.com/Varuscl/salgode"><img src={require('../../assets/gh.png')} alt="gh" className={classes.gh} /></a>
        </Typography>
      </Grid>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Ayuda compartiendo tu viaje!
          </Typography>
        </Container>
  </footer>
  );
}