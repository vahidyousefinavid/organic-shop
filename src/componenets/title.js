import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        marginBottom: 30,
        height: 45,


    },
    title: {
        textAlign: 'left',
        color: 'rgb(6 6 6 / 69%)',
        "&::after": {
            top: 'auto',
            left: 0,
            bottom: 0,
            height: 5,
            content: "''",
            position: 'absolute',
            borderRadius: 100,
            width: 35,
            background: "#037fff",
        },
        "&::before": {
            top: 'auto',
            left: 0,
            width: 100,
            bottom: 0,
            height: 5,
            content: "''",
            position: 'absolute',
            borderRadius: 100,
            background: "rgba(3, 127, 255, 0.3)",

        }
    },
    subtitle: {
        fontSize: '50px',
        position: "absolute",
        left: 15,
        top: '80%',
        lineHeight: "1rem",
        fontWeight: 900,
        color: 'rgb(25,29,43,.44)',
        display: 'inline-block',
        zIndex: -1



    }
}))

export default function Title({ title }) {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Typography className={classes.title} variant="h2" >{title}</Typography>

        </div>
    )
}
