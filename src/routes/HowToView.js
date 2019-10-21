import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';



const useStyles = makeStyles(theme => ({
  cardMedia: {
    width: '100%',
    height: 550
  },
}));

export default function HowToView(){
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <CardMedia
            className={classes.cardMedia}
            image={require('../assets/infografias/passenger.jpg')}
            title="Image title"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <CardMedia
            className={classes.cardMedia}
            image={require('../assets/infografias/driver.jpg')}
            title="Image title"
          />
        </Grid>
      </Grid>
    </div>
  )
};