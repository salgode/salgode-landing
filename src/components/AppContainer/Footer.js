import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </Container>
  </footer>
  )
}

export default Footer;