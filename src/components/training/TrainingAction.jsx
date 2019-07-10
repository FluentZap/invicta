import React from 'react'
import Laurel from '../../assets/laurel.png'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 160,
        background: `#000000`,        
    },
    laurel: {
        borderRadius: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        background: `#fccb0b url(${Laurel})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 125,
        backgroundPositionY: 28,
        color: '#bb0002',
        fontFamily: "'Caesar Dressing', cursive",
        fontWeight: 'bold',
        userSelect: 'none',
        
    },
}));

// font-family: 'Cinzel Decorative', cursive;
// font-family: 'Caesar Dressing', cursive;




const TrainingAction = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.laurel}>{props.name}</div>
        </div>
    )
}

export default TrainingAction
