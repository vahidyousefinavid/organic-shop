import { Button, Modal, TextField, Typography, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNUP, SIGNIN, FORGET_PASSWORD, CODE } from '../../constants/ActionTypes'
import axios from 'axios'

export default function Exit() {
    const classes = useStyles()
    const { state, dispatch } = useContext(LoginContext)




    return (
        <Modal open={state.exit} onClose={() => dispatch({ type: 'closeAll' })} >
            <div className={classes.root} >
                <div className={classes.exitDiv}>
                    <Button className={classes.buttomsignin} onClick={() => {
                        localStorage.removeItem('token')
                        localStorage.removeItem('role')
                        alert('شما از حساب کاربری خود خارج شدید')
                        dispatch({ type: 'closeAll' })
                    }} >برای خروج از حساب کاربری کلیک کنید </Button>
                </div>
            </div>

        </Modal>
    )
}
