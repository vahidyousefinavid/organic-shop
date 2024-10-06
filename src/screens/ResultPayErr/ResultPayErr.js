import { Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from './ResultPayErr.styles'
import delivery from '../../assets/images/box.png'

import axios from 'axios'
export default function ResultPayErr() {
    const classes = useStyles()
    var url = new URL(window.location)
    var paymentCode = url.searchParams.get("paymentCode")

    const [payment, setPayment] = useState('')


    useEffect(() => {
        axios({
            url: ("https://api.balamala.ir/resultPayErr/" + paymentCode),

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
                    <Typography>پرداخت با موفقیت انجام نشد</Typography>
                </div>
                <div className={classes.detail}>
                    <Typography>پرداخت از طرف بانک انجام نشد اگر مبلغ سفارش از حساب شما کسر گردید تا حداکثر 24 ساعت آینده به حساب شما باز خواهد گشت</Typography>
                    {/* <Typography>{payment.takhfifAmount == 0 ? Intl.NumberFormat('ar-EG').format(parseFloat(payment.amount)) : Intl.NumberFormat('ar-EG').format(parseFloat(payment.takhfifAmount))}  تومان</Typography> */}
                </div>

                <div className={classes.detail}>
                    <Typography>کد پیگیری سفارش:</Typography>
                    <Typography>{payment.orderCode}</Typography>
                </div>
                <div className={classes.detail}>

                    <Typography variant='h5' className={classes.kk2}>در صورت بروز مشکل میتوانید با شماره های 08138314605 و 09182144970 تماس حاصل فرمایید تا به مشکلات شما رسیدگی کنیم.</Typography>
                </div>
                <Button href='/' variant='contained' style={{ backgroundColor: 'rgb(0, 102, 255)', color: '#fff', marginTop: 19 }}>صفحه اصلی</Button>
            </div>

        </div>
    )
}
