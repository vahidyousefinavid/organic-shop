import { Button, Modal, TextField, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNUP, SIGNIN, FORGET_PASSWORD, CODE } from '../../constants/ActionTypes'


export default function SignInModal() {
    const classes = useStyles()
    const { state, dispatch } = useContext(LoginContext)


    return (
        <Modal open={state.signin} onClose={() => dispatch({ type: 'closeAll' })} >
            <div className={classes.root} >
                <div className={classes.brandDiv} >
                    <img src={brandLogo} className={classes.brandImg} ></img>
                </div>

                <div>

                    <Typography>
                        ثبت نام شما تکمیل شد
                    </Typography>
                </div>
            </div>

        </Modal>
    )
}

