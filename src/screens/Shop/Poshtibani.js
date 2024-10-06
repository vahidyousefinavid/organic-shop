import { Button, TextField, Typography, Grid } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useStyles from './SignUpShop.styles'
import Autocomplete from '@mui/material/Autocomplete'
export default function Poshtibani() {
    const classes = useStyles()


    return (
        <Grid className={classes.rootShop}>
            <Grid>
                <Typography>پاسخگوی شما در حل تمامی مشکلات هستیم</Typography>
            </Grid>
            <Grid>
                <Grid className={classes.grid1} >
                    <Typography>واتساپ:</Typography>
                    <Typography>09182144970</Typography>
                </Grid>
                <Grid className={classes.grid1} >
                    <Typography>شماره همراه:</Typography>
                    <Typography>09182144970</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}


