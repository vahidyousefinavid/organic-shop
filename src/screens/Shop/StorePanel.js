import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useStyles from './storePanel.styles'
import axios from 'axios'

export default function StorePanel() {
    const classes = useStyles()
  
    return (
        <Grid className={classes.root} container>
         
            <Grid className={classes.grid1} >
                <Button href='/storePanel/addProduct' size='large' className={classes.Button1}> <Typography>اضافه کردن محصول</Typography></Button>
            </Grid>
            <Grid className={classes.grid2} >
                <Button href='/storePanel/productList' size='large' className={classes.Button1}> <Typography>محصولات</Typography></Button>
            </Grid>
            {/* <Grid className={classes.grid3} >
                <Button size='large' className={classes.Button1}> <Typography>تعداد فروش</Typography></Button>
            </Grid> */}
            <Grid className={classes.grid4} >
                <Button href='/storePanel/poshtibani' size='large' className={classes.Button1}> <Typography>ارتباط با پشتیبانی</Typography></Button>
            </Grid>
            <Grid className={classes.grid4} >
                <Button href='/' size='large' className={classes.Button1}> <Typography>رفتن به صفحه اصلی</Typography></Button>
            </Grid>
            <Grid className={classes.grid5} >
                <Button onClick={() => {
                    localStorage.removeItem('tokenShop')
                    window.location.reload()
                }} size='large' className={classes.Button1}> <Typography></Typography>خروج از حساب کاربری</Button>
            </Grid>
            {/* <Grid className={classes.grid5} >
                <Button size='large' href='/storepanel/users' className={classes.Button1}> <Typography>مشتریان</Typography></Button>
            </Grid> */}


        </Grid>
    )
}
