import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import Title from '../../../componenets/title'
import { getTranslate } from '../../../assets/localization'
import './contact.css'
import Contact from '../../../componenets/contact'





const useStyles = makeStyles(theme => ({
    root: {



    },
    contactGrid: {
        display: 'flex',
        padding: 9,
        position: 'relative',
        flexGrow: 1,
        // minHeight: "100vh",
        alignItems: 'flex-start',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            padding: 20,
            paddingTop: 80
        }
    },

    FormGrid: {
        padding: 20,
        paddingTop: 30,

    },
    detailGrid: {
        marginTop: 66
    },
    getin: {
        textAlign: 'left'
    },
    IconStyle: {
        width: 50,
        marginRight: 20
    }


}))
export default function ContactScreen() {
    const classes = useStyles()
    const translate = getTranslate()
    return (

        <Grid alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.contactGrid} item container xs={12} >
                <Title title={'ارتباط با مدیر فروشگاه'} />
                <Grid container direction='row' className={classes.maincontact} >
                    <Grid item xs={12} md={6} className={classes.FormGrid} >
                        <Typography className={classes.getin} variant='h4'>{'ارسال پیام'}</Typography>
                        <TextField
                            style={{ marginTop: 20, color: '#111' }}
                            fullWidth
                            required

                            label={'نام و نام خانوادگی را وارد کنید'}
                            variant="outlined"
                            size='medium'
                        />
                        <TextField
                            style={{ marginTop: 20 }}
                            fullWidth
                            required

                            label={'ایمیل را وارد کنید(دلخواه)'}
                            variant="outlined"
                            size='medium'
                        />
                        <TextField
                            style={{ marginTop: 20 }}
                            fullWidth
                            required

                            label={'موضوع پیام'}
                            variant="outlined"
                            size='medium'
                        />
                        <TextField
                            style={{ marginTop: 20 }}
                            fullWidth
                            required

                            label={'متن پیام'}
                            variant="outlined"
                            size='medium'
                            multiline={true}
                            rows={5}
                        />
                        <Button variant="contained" color='primary' size='large' style={{ marginTop: 26, display: 'flex', color: '#fff' }} >ارسال پیام</Button>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.detailGrid} >
                        <Contact

                            title={'تلفن تماس:'} desc={"09182144970"} />
                        <Contact

                            title={'ایمیل'} desc={"balamalair@gmail.com"} />
                        <Contact

                            title={'آدرس'} desc={'استان همدان- شهرستان همدان - میدان بیمه - اول سه راه پردیس'} />
                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    )
}
