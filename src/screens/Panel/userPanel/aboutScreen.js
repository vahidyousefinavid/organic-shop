import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'
import Title from '../../../componenets/title'
import { getTranslate } from '../../../assets/localization'

import Service from '../../../componenets/service.js'




const useStyles = makeStyles(theme => ({
    root: {



    },
    aboutGrid: {
        display: 'flex',

        position: 'relative',
        flexGrow: 1,
        // minHeight: "100vh",
        alignItems: 'flex-start',
        justifyContent: 'center',

        padding: 9
    },
    mainImage: {
        width: "100%",
        height: "100%"


    },
    kadrImage: {
        position: 'relative',
        "&::after": {
            top: 'auto',
            right: 0,
            bottom: 0,
            height: "65%",
            content: "''",
            borderRadius: '100px 100px 0px 0px',
            position: 'absolute',
            width: 15,
            background: "rgb(3,127,255,.6)",

        },
        "&::before": {
            top: 0,
            left: 0,
            width: 15,
            bottom: 'auto',
            height: "65%",
            content: "''",
            borderRadius: '0px 0px 100px 100px',
            position: 'absolute',

            background: "rgb(3,127,255,.6)",

        }
    },
    NameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    aboutTextGrid: {
        paddingLeft: 20,
        paddingRight: 20,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginTop: 15,
        }
    },
    iconStyle: {
        height: 60,
        width: 60,

    },
}))
export default function AboutScreen() {
    const classes = useStyles()
    const translate = getTranslate()
    return (

        <Grid alignItems='flex-start' container className={classes.root}>


            <Grid className={classes.aboutGrid} item container xs={12} style={{ marginTop: 0 }} >
                <Title title={'آدرس ها'} />
                <Grid container direction='row' className={classes.mainAbout} >
                    {/* <Service postalCode={'15454543465456'} neshani={'همدان دره مرادبیگ کوچه عارف قزوینی پلاک 4 طبقه 3 واحد 6'} /> */}
                    <Typography variant='h4' >در حال بروزرسانی ...</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
