import React from 'react'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    bar: {
        width: '80%',
        height: 60,
        background: 'rgb(216,246,2)',
        
    }
})

const PlayerStatBar = (props) => {
    const classes = useStyles();
    const percentage = 30;
    const BGPercent = {
        background: `linear-gradient(90deg, rgba(187,0,2,1) 0%, rgba(187,0,2,1) ${props.percentage}%, rgba(238,237,237,0) 0%)`
    }
    return (
        <div className={classes.root}>
            <div>
                <h3>Health</h3>
                <p className={classes.bar} style={BGPercent}>Health Bar</p>
            </div>
        </div>
    )
}

export default PlayerStatBar
