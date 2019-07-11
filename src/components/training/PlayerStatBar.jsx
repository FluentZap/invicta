import React, { useEffect } from 'react'
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
    // const percentage = 30;\
    // console.log('StatBar', props);
    // const BGPercent = {
    //     background: `linear-gradient(90deg, rgba(187,0,2,1) 0%, rgba(187,0,2,1) 100%, rgba(238,237,237,0) 0%)`
    // }
    // useEffect(() => {
    //     const BGPercent = {
    //         background: `linear-gradient(90deg, rgba(187,0,2,1) 0%, rgba(187,0,2,1) ${props.health}%, rgba(238,237,237,0) 0%)`
    //     }
    // })
    const BGPercent = {
        background: `linear-gradient(90deg, rgba(187,0,2,1) 0%, rgba(187,0,2,1) ${props.value}%, rgba(238,237,237,0) 0%)`
    }
    return (
        <div className={classes.root}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.bar} style={BGPercent}>{props.name}</p>
            </div>
        </div>
    )
}

export default PlayerStatBar
