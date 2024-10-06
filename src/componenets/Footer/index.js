import { Grid, Link, Typography } from '@material-ui/core'
import useStyles from './index.styles.js'
import React from 'react'

export default function Footer() {
    const classes = useStyles()
    return (

        <Grid container className={classes.downGrid4}>
            <div className={classes.validationDiv}>
                <div className={classes.item}>

                </div>
            </div>
            <div className={classes.bottomBox}>
                <Grid className={classes.jss3} lg={4}>
                    <Typography variant='h4'>مجوزها</Typography>
                    <Link href='https://trustseal.enamad.ir/?id=268681&amp;Code=PSkuDkwsL9qYPlqG6dxl'>
                        <img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=268681&amp;Code=PSkuDkwsL9qYPlqG6dxl" alt="نماد اعتبار اینماد" className={classes.enamad} id="PSkuDkwsL9qYPlqG6dxl" ></img>
                    </Link>
                </Grid>
                <Grid className={classes.jss3} lg={4}>
                    <Typography variant='h4'>توضیحات</Typography>
                    <Typography variant='h4' className={classes.typo1}>شرکت استارتاپی بالا مالا با داشتن علاقه خدمت به شما هم میهنان عزیز یار خوبی برای شما خواهد بود.</Typography>
                </Grid>
                <Grid className={classes.jss3} lg={4}>
                    <Typography variant='h4' >ارتباط با ما</Typography>
                    <Typography variant='h4' className={classes.typo1} > شرکت استارتاپی بالا مالا</Typography>
                    <Typography variant='h4' className={classes.typo1}>تلفن تماس(ثابت):08138314605</Typography>
                    <Typography variant='h4' className={classes.typo1}>تلفن تماس(همراه):09182144970</Typography>
                </Grid>
            </div>
        </Grid>
    )
}
