import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import TelegrameIcon from '@material-ui/icons/Telegram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import InstagramIcon from '@material-ui/icons/Instagram'
import { getDirection, getTranslate } from '../../../assets/localization/index'
import { Button, Grid, Input, Typography } from '@material-ui/core'
import useStyles from './home.styles'
import Title from '../../../componenets/title'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './home.css'



export default function HomeScreen() {
    const classes = useStyles()
    const [data, setData] = React.useState('')
    const token = localStorage.token
    useEffect(() => {
        axios({
            url: ("https://api.balamala.ir/decoded" + token),

            method: "GET"
        })
            // .then(response => response.json())

            .then(res =>

                setData(res.data),


            ).catch(err => {
                console.log(err)
            })


        // console.log(all)
    }, token)


    const phone = data.phone
    const [value, setValue] = React.useState(phone)

    const handleChange = (event) => {
        setValue(event.target.value)
    }




    return (
        <div className={classes.root}>
            {/* <Typography variant='h2' className={classes.title}>مشخصات</Typography> */}
            <Title title={'مشخصات'} ></Title>

            <Grid container className={classes.inputGrid} >
                <Grid lg={6} className={classes.Grid}>
                    <Typography> نام و نام خانوادگی: </Typography>
                    <Typography className={classes.Typo}> {data.name ? data.name : 'نامشخص'} </Typography>
                </Grid>
                <Grid lg={6} className={classes.Grid}>
                    <Typography> شماره همراه: </Typography>
                    <Typography className={classes.Typo}> {data.phone ? data.phone : 'نامشخص'} </Typography>
                </Grid >
                <Grid lg={6} className={classes.Grid}>
                    <Typography> تلفن ثابت: </Typography>
                    <Typography className={classes.Typo}> {data.homePhone ? data.homePhone : 'نامشخص'} </Typography>
                </Grid>
                <Grid lg={6} className={classes.Grid}>
                    <Typography> وضعیت حساب: </Typography>
                    <Typography className={classes.Typo}> {'فعال'} </Typography>
                </Grid>


            </Grid>
            <Grid className={classes.left}>
                <Accordion >
                    <AccordionSummary
                        className={classes.Accordion}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>ویرایش اطلاعات</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid className={classes.bigGrid} >
                            <Grid lg={4} className={classes.Grid}>
                                <Typography variant='h5'>نام و نام خانوادگی:</Typography>
                                <TextField

                                    id="outlined"
                                    size='small'

                                />
                            </Grid>
                            <Grid lg={4} className={classes.Grid}>
                                <Typography variant='h5'>شماره همراه:</Typography>
                                <TextField

                                    id="outlined"
                                    size='small'
                                />
                            </Grid>
                            <Grid lg={4} className={classes.Grid}>
                                <Typography variant='h5'>تلفن ثابت:</Typography>
                                <TextField

                                    id="outlined"
                                    size='small'
                                />
                            </Grid>

                        </Grid>
                        <Grid lg={12} className={classes.Grid}>
                            <Button variant='contained' className={classes.Button}>ذخیره اطلاعات</Button>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </div >
    )
}
