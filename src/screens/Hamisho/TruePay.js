import { Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from '../resultPay/ResultPay.styles'
import delivery from '../../assets/images/box.png'

import axios from 'axios'
export default function TruePay() {
    const classes = useStyles()
    var url = new URL(window.location)
    var paymentCode = url.searchParams.get("paymentCode")

    const [payment, setPayment] = useState('')





    return (
        <div className={classes.root}>
            <div className={classes.form}>
                <div className={classes.upForm}>

                    <Typography>واریز حمایتی شما با موفقیت انجام شد</Typography>
                </div>
                <Typography className={classes.Typo} variant='h4'>هرکس گره ای از مشکلات مومنی باز کند و مشکلش را برطرف نماید خداوند متعال مشکلات دنیا و آخرت او را اصلاح می نماید.</Typography>
                <Typography className={classes.Typo2} variant='h5'>امام حسین (ع)</Typography>
                <div className={classes.detail}>

                    <Typography variant='h5' className={classes.kk2}>با نشر این کار خیر میتوانیم تعداد بیشتری از همشهریان عزیز را تحت پوشش قرار دهیم و فعالیت خود را گسترده تر کنیم با تشکر از حمایت های شما.</Typography>
                </div>
                <Button href='/' variant='contained' style={{ backgroundColor: 'rgb(0, 102, 255)', color: '#fff', marginTop: 19 }}>صفحه اصلی</Button>
            </div>

        </div>
    )
}