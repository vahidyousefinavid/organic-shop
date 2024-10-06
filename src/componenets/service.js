import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { colors, Grid, Typography } from '@material-ui/core'



const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: 15,
        paddindRight: 15,
        marginTop: 20,
        color: '#fff',


    },
    main: {

        minHeight: 269,
        backgroundColor: '#fff',
        zIndex: 1,
        border: "1px solid #0071dc",
        padding: theme.spacing(8),
        borderTop: "5px solid #0071dc",
        transition: ".4s",
        '&:hover': {
            borderTopColor: theme.palette.primary.main,
            transition: ".4s",

        },
        borderRadius: 10,
        color: '#111'
    },

    titleStyle: {
        marginTop: 20,
        position: 'relative',
        padding: 6,
        '&:hover:before': {
            background: theme.palette.primary.main,
            transition: ".4s"
        },
        "&::before": {
            top: -5,
            left: 0,
            width: 130,
            height: 3,
            content: "''",
            position: "absolute",
            background: "#2e344e",
            transition: "0.4s",

        },
        "&::after": {
            left: 0,
            width: 130,
            bottom: -5,
            height: 3,
            content: "''",
            position: 'absolute',
            background: '#2e344e',
            transition: '0.4s',

        }
    },
    descService: {
        marginTop: 15,
    }


}))

export default function Service({ postalCode, neshani, minHeight }) {
    const classes = useStyles()
    return (
        <Grid item lg={4} md={6} xs={12} className={classes.root} >
            <Grid className={classes.main} container direction='column' alignItems='flex-start' style={{ minHeight }} >

                <Typography variant="h5" className={classes.titleStyle} >کد پستی: {postalCode}</Typography>
                <Typography className={classes.descService} >آدرس:{neshani}</Typography>
            </Grid>
        </Grid>
    )
}
