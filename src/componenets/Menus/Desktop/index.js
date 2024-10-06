import React from 'react'
import useStyles from './index.styles'
import AboveBox from './AboveBox'
import BottomBox from './BottomBox'

export default function Dsktop() {
    const classes = useStyles()
    
    return (
        <div className={classes.root} >
            <AboveBox />
            <BottomBox />
        </div>
    )
}
