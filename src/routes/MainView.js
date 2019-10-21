import React from 'react';
import { Grid, Paper, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    // minWidth: 350,
    // minHeight: 150, 
  },
  content: {
    textAlign: "center",
  }
}));


export default function MainView(){

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={4}>
          <img className={classes.img} src={require("../assets/car.png")} alt="rr"></img>
        </Grid>
        <Grid item xs={8}>
          <Grid container justify="center" spacing={spacing}>
            <Grid className={classes.content} key="1" item>
            <p>Si tenemos el mismo fin, ¡compartamos el viaje!</p>
            <br/>
            <p>
          SALGO DE es una aplicación para traslados solidarios en momentos
          de emergencia nacional y crisis de transporte.
            </p>
          <br/>
          <p>Con el fin de lograr que todos lleguen sanos y salvos a su destino, coordinamos
            a conductores con espacio en su automóvil y personas sin medio de transporte para que viajen juntos.</p>
          <br/>       
          <p>Todos podemos generar el cambio, ¡COMPARTE TU AUTO!</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}