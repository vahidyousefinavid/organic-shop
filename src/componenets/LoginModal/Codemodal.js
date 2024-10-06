import { Button, Modal, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import ReactCodeInput from 'react-code-input'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNUP, FORGET_PASSWORD, CHANGE_PASSWORD } from '../../constants/ActionTypes'

export default function CodeModal() {
    const { state, dispatch } = useContext(LoginContext)
    const classes = useStyles()
    const [counter, setCounter] = useState(5)
    const codeType = localStorage.getItem('loginCodeType')
    const setCounterAgain = () => {

        setCounter(120)
    }



    useEffect(() => {
        setInterval(() => {
            setCounter((oldCounter) => oldCounter === 0 ? 0 : oldCounter - 1)
        }, 1000)

    }, [])
    const checkCode = () => {
        if (codeType === 'signUp') {

        } else {
            dispatch({ type: CHANGE_PASSWORD })
        }
    }
    return (
        <Modal open={state.code} onClose={() => dispatch({ type: 'closeAll' })} >
            <div className={classes.root} >
                <div className={classes.brandDiv} >
                    <img src={brandLogo} className={classes.brandImg} ></img>
                </div>

                <div className={classes.signindiv} >
                    <Typography variant='body2' >کد تایید دریافتی:</Typography>

                    <div className={classes.codeInput} >
                        <ReactCodeInput
                            fields={5}
                            fullWidth
                        />
                    </div>
                </div>

                <div className={classes.codeDiv}>
                    {counter !== 0 ? (
                        <Typography className={classes.counterclass} >{counter} </Typography>
                    ) : <Button onClick={setCounterAgain} fullWidth className={classes.buttomsignin} >درخواست مجدد کد تایید</Button>}


                    <Button disabled={counter === 0} onClick={checkCode} fullWidth className={classes.buttomsignin} >تایید</Button>
                    <Button onClick={() => { dispatch({ type: codeType === 'signUp' ? SIGNUP : FORGET_PASSWORD }) }} fullWidth className={classes.BtBt}>
                        <Typography>اصلاح شماره موبایل</Typography>
                    </Button>
                </div>
                {/* <div className={classes.typoDiv} >
                    <Typography className={classes.typotypo} >باسلام،از اینکه در سایت ما ثبت نام کرده اید بسیار خرسندیم و امیدواریم با تلاش فراوان خدمات خوبی را به شما ارائه دهیم.</Typography>
                </div> */}
            </div>

        </Modal>
    )
}