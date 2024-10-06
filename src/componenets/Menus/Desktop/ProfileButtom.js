
import { Button, Paper, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import ProfileIcon from '../../../assets/images/user.png'
import useStyles from './ProfileButtom.styles'
import { LoginContext } from '../../../contexts/LoginContext'
import { SIGNIN, SIGNUP, EXIT } from '../../../constants/ActionTypes'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function ProfileButtom() {
    const classes = useStyles()
    const { dispatch } = useContext(LoginContext)
    return (

        <div className={classes.root} onClick={() => { localStorage.token ? window.location.assign(localStorage.role == 'admin' ? '/panel' : 'dashboard') : dispatch({ type: SIGNUP }) }}>
            <PermIdentityIcon />
            {localStorage.token ? <Typography variant='h6' className={classes.profile}></Typography> : <></>}
        </div >



    )
}
