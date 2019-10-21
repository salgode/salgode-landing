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
    borderTop: '1px solid blue',
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h6" align="center" gutterBottom>
        <a href="https://www.facebook.com/SalgoDe-112132566873573/">Facebook</a>
        </Typography>

        <Typography variant="h6" align="center" gutterBottom>
        <a href="https://www.instagram.com/salgodecl/">Instagram</a>
        </Typography>

        <Typography variant="h6" align="center" gutterBottom>
          <a href="https://github.com/Varuscl/salgode">Github</a>
        </Typography>
      </Grid>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Ayuda compartiendo tu viaje!
          </Typography>
        </Container>
  </footer>
  );
}