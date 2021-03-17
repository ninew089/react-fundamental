import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AppBar,
  Toolbar,
  Link,
  FormControlLabel,
  Switch,
  Badge,
  IconButton,
} from '@material-ui/core'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { ShoppingCart } from '@material-ui/icons'

import logo from 'assets/images/logo.png'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
  },
  logoLink: {
    marginRight: theme.spacing(2),
  },
  logoImage: {
    widht: '30px',
    height: '30px',
  },
  spacer: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.ui.darkMode)
  const cartCount = useSelector((state) => state.cart.productIds).length
  const navigateToCart = () => history.push('/cart')

  const toggleDarkMode = () => dispatch(actions.toggleDarkMode())

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          underline="none"
          className={classes.logoLink}
        >
          <img src={logo} alt="Babel Shopping" className={classes.logoImage} />
        </Link>
        <Link
          component={RouterLink}
          to="/products"
          color="inherit"
          underline="none"
        >
          Products
        </Link>
        <div className={classes.spacer}></div>
        <FormControlLabel
          control={
            <Switch
              color="secondary"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          }
          label="Dark"
          labelPlacement="end"
        ></FormControlLabel>
        <IconButton color="inherit" onClick={navigateToCart}>
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
