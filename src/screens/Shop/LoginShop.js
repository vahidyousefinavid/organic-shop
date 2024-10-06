import { Button, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'

import useStyles from './SignUpShop.styles'
export default function LoginShop() {
    const classes = useStyles()

    function loginShop() {
        try {
            const phone = document.querySelector("#shopphone2").value
            const password = document.querySelector("#shoppassword2").value



            const formData = new FormData()
            formData.append("phone", phone)
            formData.append("password", password)


            axios.post('https://api.balamala.ir/store/loginShop', formData)
                .then(res => {
                    if (res.data == "notFound") {
                        return alert('همچنین کاربری با این نام کاربری پیدا نشد. ')
                    }
                    if (res.data == "mistake") {
                        return alert('رمز عبور یا نام کاربری اشتباه می باشد. ')
                    }
                    if (res.data == "validate") {
                        return alert('فیلد ها را با دقت پر کنید. ')
                    }
                    alert('با موفقیت وارد شدید')
                    localStorage.setItem("tokenShop", res.headers["x-auth-token"])
                    window.location.assign('/storePanel')
                })
                .catch(err => {
                    console.log(err)
                })



        }
        catch {

        }


    }
    return (
        <div className={classes.rootShop}>
            <Typography variant='h4' >ورود به پنل مغازه</Typography>
            <div className={classes.signindiv} >
                <Typography variant='body2' >شماره موبایل:</Typography>
                <TextField id='shopphone2' className={classes.inputclass} variant="outlined" placeholder='09*********' size='small' />
            </div>
            <div className={classes.signindiv2} >
                <Typography variant='body2' >رمز عبور:</Typography>
                <TextField id='shoppassword2' className={classes.inputclass} variant="outlined" placeholder='*********' size='small' />
            </div>

            <div className={classes.signindiv2} >
                <Button onClick={loginShop} variant='contained' >ورود</Button>
            </div>


        </div>
    )
}
