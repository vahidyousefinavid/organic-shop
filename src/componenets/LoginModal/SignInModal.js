import { Button, Modal, TextField, Typography, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNUP, SIGNIN, FORGET_PASSWORD, CODE } from '../../constants/ActionTypes'
import axios from 'axios'

export default function SignInModal() {
    const classes = useStyles()
    const { state, dispatch } = useContext(LoginContext)


    function singIn() {
        try {


            const phone = document.querySelector("#phone").value
            const password = document.querySelector("#password").value



            const formData = new FormData()
            formData.append("phone", phone)
            formData.append("password", password)




            axios.post("https://api.balamala.ir/login", formData)





                .then(res => {

                    if (res.data == "validate") {
                        return alert('فیلدها را بادقت پر کنید ')
                    }
                    if (res.data == "notFound") {
                        return alert('همچنین کاربری با این شماره ثبت نام نکرده است. ')
                    }
                    if (res.data == "mistake") {
                        return alert('شماره یا رمز عبور اشتباه است. ')
                    }
                    alert("ورود شما با موفقیت انجام شد.")
                    // window.location.assign("http://localhost:3001/")
                    localStorage.setItem("token", res.headers["x-auth-token"])
                    localStorage.setItem("role", res.data.role)
                    dispatch({ type: 'closeAll' })

                })
                .catch((err) => {
                    console.log(err)
                })
        }
        catch (err) {
            console.log(err.message)
        }

    }

    return (
        <Modal open={state.signin} onClose={() => dispatch({ type: 'closeAll' })} >
            <div className={classes.root} >
                <div className={classes.brandDiv} >
                    <img src={brandLogo} className={classes.brandImg} ></img>
                </div>

                <div className={classes.signindiv} >
                    <Typography variant='body2' >شماره موبایل:</Typography>
                    <TextField id='phone' className={classes.inputclass} variant="outlined" fullWidth placeholder='09*********' size='small' />
                </div>
                <div className={classes.signindiv2} >
                    <Typography variant='body2' >رمز عبور:</Typography>
                    <TextField id='password' className={classes.inputclass} variant="outlined" fullWidth placeholder='*********' size='small' />
                </div>
                <div className={classes.textDiv}>

                    <Button onClick={() => { dispatch({ type: FORGET_PASSWORD }) }}>
                        <Typography className={classes.Text} >رمز عبور خود را فراموش کرده اید؟</Typography>
                    </Button>
                    <Button onClick={singIn} fullWidth className={classes.buttomsignin} >ورود</Button>
                    <Button fullWidth className={classes.buttomBt} onClick={() => { dispatch({ type: SIGNUP }) }} >
                        <Typography className={classes.Text} >ثبت نام نکرده اید؟</Typography>
                    </Button>
                </div>
                <div className={classes.aDiv}>
                    <a className={classes.A} href='/loginShop'>
                        <Typography>مغازه دار هستم</Typography>
                    </a>
                </div>
            </div>

        </Modal>
    )
}
