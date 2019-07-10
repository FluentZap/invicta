import React from 'react'
import Laurel from '../../assets/laurel.png'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
    },
    laurel: {
        borderRadius: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        background: `#bb9a33 url(${Laurel})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 125,
        backgroundPositionY: 28,
    },
}));




const TrainingAction = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.laurel}>{props.name}</div>
        </div>
    )
}

export default TrainingAction
