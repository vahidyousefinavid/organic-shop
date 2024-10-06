import { Button, Modal, TextField, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'
import { CODE } from '../../constants/ActionTypes'

export default function ForgetModal() {
    const { state, dispatch } = useContext(LoginContext)
    const classes = useStyles()
    const forget = () => {
        localStorage.setItem('loginCodeType', 'forgetPassword')
        dispatch({ type: CODE })
    }




    return (
        <Modal open={state.forgetPassword} onClose={() => dispatch({ type: 'closeAll' })} >
            <div className={classes.root} >
                <div className={classes.brandDiv} >
                    <img src={brandLogo} className={classes.brandImg} ></img>
                </div>

                <div className={classes.signindiv} >
                    <Typography variant='body2' >شماره موبایل:</Typography>
                    <TextField className={classes.inputclass} variant="outlined" fullWidth placeholder='09*********' size='small' />
                </div>
                <div className={classes.textDiv} >
                    <Button onClick={forget} fullWidth className={classes.buttomsignin} >دریافت کد تایید</Button>
                </div>
            </div>

        </Modal>
    )
}