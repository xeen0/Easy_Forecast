import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxheight:350,
    width:140,
    height:350,

  },
  media: {
    maxheight: 350,
    maxWidth:140
  }
});

export default function DailyComponent({
  summary,
  icon,
  day
}) {
  const classes = useStyles();
  console.log(icon)
  const wther_icon = require(`../assests/animated/${icon}.svg`)
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={wther_icon}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Day: {day}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
