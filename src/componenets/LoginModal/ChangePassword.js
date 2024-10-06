import { Button, Modal, TextField, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'

export default function ChangePassword() {
    const classes = useStyles()

    const { state, dispatch } = useContext(LoginContext)

    return (
        <Modal open={state.changePassword} onClose={() => dispatch({ type: 'closeAll' })} >
            <div className={classes.root} >
                <div className={classes.brandDiv} >
                    <img src={brandLogo} className={classes.brandImg} ></img>
                </div>

                <div className={classes.signindiv} >
                    <Typography variant='body2' >رمز عبور:</Typography>
                    <TextField className={classes.inputclass} variant="outlined" fullWidth placeholder='*********' size='small' />
                </div>
                <div className={classes.signindiv2} >
                    <Typography variant='body2' >تکرار رمز عبور:</Typography>
                    <TextField className={classes.inputclass} variant="outlined" fullWidth placeholder='*********' size='small' />
                </div>
                <div className={classes.textDiv}>

                    <Button fullWidth className={classes.buttomsignin} >ورود</Button>
                </div>
            </div>

        </Modal>
    )
}