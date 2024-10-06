import { Button, Modal, TextField, Typography, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './soundModal.styles'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNUP, SIGNIN, FORGET_PASSWORD, CODE } from '../../constants/ActionTypes'
import axios from 'axios'
import microphone from '../../assets/images/microphone.png'
export default function Sound() {
    const classes = useStyles()
    const { state, dispatch } = useContext(LoginContext)




    return (
        <Modal open={state.sound} onClose={() => dispatch({ type: 'closeAll' })} >

            <div className={classes.root} >
                <Button variant='text' style={{ backgroundColor: '#1111' }} className={classes.Button1}>سفارش صوتی</Button>

                <div className={classes.div1} >
                    <img src={microphone} className={classes.img1}  >
                    </img>
                </div>
                <div className={classes.div2} >
<Typography className={classes.tt2} >بزودی فعال خواهد شد</Typography>
                </div>
                <div className={classes.div4} >
                    {/* <Typography>آدرس پستی:</Typography>
                    <div className={classes.div3} >

                        <TextField variant='filled' size='small' fullWidth className={classes.tt1} >

                        </TextField>
                    </div>
                    <Typography>شماره تماس:</Typography>
                    <div className={classes.div3} >

                        <TextField variant='filled' size='small' fullWidth className={classes.tt1} >

                        </TextField>
                    </div>
                    <Typography>توضیحات</Typography>
                    <div className={classes.div3} >

                        <TextField rows={3} multiline variant='filled' size='small' fullWidth className={classes.tt1} >

                        </TextField>
                    </div> */}
                  

                   <Button variant='contained' fullWidth className={classes.bb2}>
                       بزودی
                   </Button>
                  
                </div>
            </div>



        </Modal>
    )
}
