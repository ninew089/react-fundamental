import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Grid, Chip } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function CategoryItem({ title, Icon }) {
  const history = useHistory()
  const { path } = useRouteMatch()
  const darkMode = useSelector((state) => state.ui.darkMode)

  const filterProductsByCategory = () => {
    history.push(`${path}?category=${title}`)
  }

  return (
    <Grid item onClick={filterProductsByCategory}>
      <Chip
        icon={<Icon />}
        label={title}
        clickable
        color={!darkMode ? 'primary' : 'default'}
        variant={!darkMode ? 'default' : 'outlined'}
      ></Chip>
    </Grid>
  )
}
