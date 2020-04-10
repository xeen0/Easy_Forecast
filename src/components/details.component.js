import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    maxheight:350,
    width:700,
    height:350
  },
  media: {
    height: 360,
    width:450,
    maxheight: 360,
    maxwidth:450
  }
});

export default function DetailedComponent({ 
  latitude,
  longitude,
  timezone,
  summary,
  pressure,
  icon,
  temperature
}) {
  const classes = useStyles();
  const wther_icon = require(`../assests/animated/${icon}.svg`)
  return (
    <div style={{paddingLeft:20}}>
    <Card className={classes.root} >
      <CardActionArea style={{"display":"flex"}}>
      <div> 
      <CardMedia
          className={classes.media}
          component="img"
          src={wther_icon}
          title="Contemplative Reptile"
        />
        </div>
        <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Timezone : {timezone }{console.log(timezone)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Latitude : {latitude}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Longitude : {longitude}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Summary: {summary}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Temperature : {temperature} F
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Pressure : {pressure} hPa
          </Typography>
        </CardContent>
        </div>
      </CardActionArea>
    </Card>
    </div>
  );
}
