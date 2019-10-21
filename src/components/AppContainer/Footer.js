import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
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
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        facebook

        instagram

        github

      </Grid>
    </Container>
  </footer>
  );
}