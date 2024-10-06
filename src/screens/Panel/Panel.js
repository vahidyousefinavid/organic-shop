import { Button, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useStyles from './Panel.styles'




export default function Panel() {
    const classes = useStyles()
    const [allData, setAllData] = useState([])
    var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    var persianMap = persianDigits.split("");
    function convertToPersianNumber(value) {
        return value.replace(/\d/g, function (m) {
            return persianMap[parseInt(m)];
        })
    }
    useEffect(() => {

        axios({
            url: (`https://api.balamala.ir/getsearch`),
            method: "GET"
        })
            .then((response) => {
                const cc = response.data.reverse()
                return setAllData(cc)


            }).catch((error) => {
                console.log(error)
            })



    }, [])
    return (
        <Grid className={classes.root} container>
               <div className={classes.try} >
                <Typography>{convertToPersianNumber(String(allData.length))}</Typography>
            </div>
            <Grid className={classes.grid1} >
                <Button href='/panel/addProduct' size='large' className={classes.Button1}> <Typography>اضافه کردن محصول</Typography></Button>
            </Grid>
            <Grid className={classes.grid2} >
                <Button href='/panel/productList' size='large' className={classes.Button1}> <Typography>محصولات</Typography></Button>
            </Grid>
            <Grid className={classes.grid3} >
                <Button size='large' className={classes.Button1}> <Typography>تعداد فروش</Typography></Button>
            </Grid>
            <Grid className={classes.grid4} >
                <Button href='/panel/oShow' size='large' className={classes.Button1}> <Typography>سفارشات</Typography></Button>
            </Grid>
            <Grid className={classes.grid5} >
                <Button size='large' className={classes.Button1}> <Typography>ارتباط با پشتیبانی</Typography></Button>
            </Grid>
            <Grid className={classes.grid5} >
                <Button size='large' href='/panel/users' className={classes.Button1}> <Typography>مشتریان</Typography></Button>
            </Grid>
            <Grid className={classes.grid5} >
                <Button size='large' onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('role')
                    window.location.reload()
                }} className={classes.Button1}> <Typography>خروج از حساب</Typography></Button>
            </Grid>


        </Grid>
    )



}
