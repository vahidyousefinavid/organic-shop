import { Button, Modal, TextField, Typography, Checkbox, FormControlLabel } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'
import { CODE, SIGNIN } from '../../constants/ActionTypes'
import axios from 'axios'


export default function SignUpModal() {
    const classes = useStyles()
    const { state, dispatch } = useContext(LoginContext)
    // const signup = () => {
    //     localStorage.setItem('loginCodeType', 'signUp')
    //     dispatch({ type: CODE })
    // }



    function singUp() {
        try {


            const phone = document.querySelector("#phone").value
            const password = document.querySelector("#password").value



            const formData = new FormData()
            formData.append("phone", phone)
            formData.append("password", password)




            axios.post("https://api.balamala.ir/registor", formData)





                .then(res => {
                    console.log(res)
                    if (res.data == "validate") {
                        return alert('فیلدها را بادقت پر کنید ')
                    }
                    if (res.data == "repeat") {
                        return alert('همچنین کاربری با این شماره قبلا ثبت نام کرده است. ')
                    }
                    alert("ثبت نام شما با موفقیت تکمیل شد.")
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
        <Modal open={state.signup} onClose={() => dispatch({ type: 'closeAll' })} >
            <div className={classes.root} >
                <div className={classes.brandDiv} >
                    <img src={brandLogo} className={classes.brandImg} ></img>
                </div>

                <div className={classes.signindiv} >
                    <Typography variant='body2'   >شماره موبایل:</Typography>
                    <TextField id='phone' type='text' className={classes.inputclass} variant="outlined" fullWidth placeholder='09*********' size='small' />
                </div>
                <div className={classes.signindiv2} >
                    <Typography variant='body2'  >رمز عبور دلخواه:</Typography>

                    <TextField id='password' type='text' className={classes.inputclass} variant="outlined" fullWidth placeholder='*********' size='small' />
                </div>
                <div className={classes.textDiv}>
                    <FormControlLabel className={classes.checkedbox}
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="قوانین و مقررات را مطالعه کرده و پذیرفته ام"
                        labelPlacement="قوانین و مقررات را مطالعه کرده و پذیرفته ام"
                        checked={true}
                    />
                    <Button onClick={() => { dispatch({ type: SIGNIN }) }} >
                        <Typography className={classes.Text} variant='subtitle2'>ثبت نام کرده اید؟  </Typography>
                    </Button>
                    <Button>
                        <Typography className={classes.Text} >قوانین وبسایت</Typography>
                    </Button>
                    <Button onClick={singUp} color='primary' fullWidth className={classes.buttomsignin} >ثبت نام</Button>
                    <Button fullWidth className={classes.buttomBt} onClick={() => { dispatch({ type: SIGNIN }) }} >
                        <Typography className={classes.Text} >صفحه ورود</Typography>
                    </Button>
                </div>
            </div>

        </Modal>
    )
}
