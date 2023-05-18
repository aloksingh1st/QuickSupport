import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards(props) {
  return (

  <a href = {props.toLink} target="_blank">


    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          hieght="217"
          alt="green iguana"
          // style={{height:"inherit"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quick Support Solves your problem with the {props.name} department.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}