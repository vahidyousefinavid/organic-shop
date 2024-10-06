import { Button, Modal, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import ReactCodeInput from 'react-code-input'
import { FormatAlignCenter } from '@material-ui/icons'
import { LoginContext } from '../../contexts/LoginContext'

export default function CodeModalForget() {
    const { state, dispatch } = useContext(LoginContext)
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [counter, setCounter] = useState(10)
    useEffect(() => {
        setInterval(() => {
            setCounter((oldCounter) => oldCounter === 0 ? 0 : oldCounter - 1)
        }, 1000)

    }, [])

    return (
        <Modal open={open} onClose={() => setOpen(false)} >
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
                        <Typography className={classes.Text} >{counter} </Typography>
                    ) : <Button fullWidth className={classes.buttomsignin} >درخواست مجدد کد تایید</Button>}


                    <Button fullWidth className={classes.buttomsignin} >تایید</Button>
                </div>
                <div className={classes.typoDiv} >

                </div>
            </div>

        </Modal>
    )
}