import { Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from './ResultPay.styles'
import delivery from '../../assets/images/box.png'

import axios from 'axios'
export default function ResultPay() {
    const classes = useStyles()
    var url = new URL(window.location)
    var paymentCode = url.searchParams.get("paymentCode")

    const [payment, setPayment] = useState('')


    useEffect(() => {
        axios({
            url: ("https://api.balamala.ir/resultPay/" + paymentCode),

            method: "GET"
        })
            // .then(response => response.json())

            .then(response => setPayment(response.data),


        ).catch(err => {
            console.log(err)
        })


        // console.log(all)
    }, [])


    return (
        <div className={classes.root}>
            <div className={classes.form}>
                <div className={classes.upForm}>
                    <img alt='بالا مالا' src={delivery} className={classes.img} />
                    <Typography>سفارش شما با موفقیت ثبت شد.</Typography>
                </div>
                <div className={classes.detail}>
                    <Typography>مبلغ پرداختی:</Typography>
                    <Typography>{payment.takhfifAmount == 0 ? Intl.NumberFormat('ar-EG').format(parseFloat(payment.amount)) : Intl.NumberFormat('ar-EG').format(parseFloat(payment.takhfifAmount))}  تومان</Typography>
                </div>
                <div className={classes.detail}>
                    <Typography>کدپیگیری پرداخت:</Typography>
                    <Typography>{payment.refId ? payment.refId : "پرداخت درب محل می باشد"}</Typography>
                </div>
                <div className={classes.detail}>
                    <Typography>کد پیگیری سفارش:</Typography>
                    <Typography>{payment.orderCode}</Typography>
                </div>
                <div className={classes.detail}>

                    <Typography variant='h5' className={classes.kk2}>سفارش شما به دستتان خواهد رسید امیدوارم از خدمات ما رضایت کامل را داشته باشید در صورت نارضایتی با شماره 09182144970 تماس بگیرید.</Typography>
                </div>
                <Button href='/' variant='contained' style={{ backgroundColor: 'rgb(0, 102, 255)', color: '#fff', marginTop: 19 }}>صفحه اصلی</Button>
            </div>

        </div>
    )
}
