import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Grid, Typography } from '@material-ui/core'



const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: 20,
        cursor: 'pointer',
        color: '#111'
    },
    main: {
        // height: 250,
        // backgroundColor: '#191d2b',
        zIndex: 1,
        border: "1px solid #2e344e",
        padding: theme.spacing(8),
        borderTop: "5px solid #2e344e",
        transition: ".4s",
        '&:hover': {
            borderTopColor: theme.palette.primary.main,
            transition: ".4s",

        },

    },

    titleStyle: {

        position: 'relative',



    },
    descService: {
        marginTop: 10,
        justifyContent: 'left',
        flexDirection: 'column',
        display: 'flex',
        alignItems: "left"
    },
    divDesc: {
        alignItems: 'flex-start',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    }


}))

export default function Contact({ title, desc, icon }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid className={classes.main} container direction='row' alignItems='center' justify='flex-start' >
                <div className={classes.divIcon} >{icon}</div>
                <div className={classes.divDesc} >
                    <Typography variant="h6" className={classes.titleStyle} >{title}</Typography>
                    <Typography className={classes.descService} >{desc}</Typography>
                </div>
            </Grid>
        </div>
    )
}
