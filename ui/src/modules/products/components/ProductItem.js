import React from 'react'
import {
  Grid,
  Chip,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useRouteMatch } from 'react-router-dom'

import currencyFormat from 'utils/currencyFormat'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}))

export default function ProductItem({
  id,
  image,
  name,
  desc,
  category,
  price,
}) {
  const classes = useStyles()
  const history = useHistory()
  const { path } = useRouteMatch()

  const navigateToDetails = () => history.push(`${path}/${id}`)

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card onClick={navigateToDetails}>
        <CardActionArea>
          <CardMedia image={image} title={name} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {desc}
            </Typography>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <span>{currencyFormat(price)}</span>
              <Chip label={category} size="small"></Chip>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
