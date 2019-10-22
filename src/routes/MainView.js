import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  img: {
    width: '50%',
    height: '58%',
  },
  content: {
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundColor: 'blue',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 250,
    height: 250,
  },
  title: {
    fontFamily: 'Kepler296',
  },
}));

export default function MainView() {
  const classes = useStyles();

  return (
    <div>
      <main>
        <Paper className={classes.mainFeaturedPost}>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                  className={classes.title}
                >
                  #SalgoDe
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  App social creada para poder ayudar a transportarse entre
                  nosotros. Comparte tu viaje!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </main>

      {/* CARD */}
      <Grid container spacing={4}>
        <Grid item key="SalgoDe" xs={12} md={12}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h1" variant="h5">
                    <Box fontWeight="fontWeightBold" fontSize={24} m={1}>
                      SalgoDe
                    </Box>
                  </Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                    App social
                  </Typography>

                  <Typography variant="subtitle1" paragraph>
                    Si tenemos el mismo fin, ¡compartamos el viaje!
                    <br />
                    SALGO DE es una aplicación para traslados solidarios en
                    momentos de emergencia nacional y crisis de transporte.
                    <br />
                    Con el fin de lograr que todos lleguen sanos y salvos a su
                    destino, coordinamos a conductores con espacio en su
                    automóvil y personas sin medio de transporte para que viajen
                    juntos.
                    <br />
                    Todos podemos generar el cambio,
                    {' '}
                    <em>¡COMPARTE TU AUTO!</em>
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={require('../assets/car.png')}
                  title="Image title"
                />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </div>
  );
}
