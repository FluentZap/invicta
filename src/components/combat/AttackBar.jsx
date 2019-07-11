import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    border: '1px solid black'
  }
})

const AttackBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      attack bar goes here
    </div>
  )
}

export default AttackBar
