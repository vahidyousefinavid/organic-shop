import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import Title from '../../../componenets/title'
import { getTranslate } from '../../../assets/localization'
import Service from '../../../componenets/service'
import { LoginContext } from '../../../contexts/LoginContext'
import { FORGET_PASSWORD } from '../../../constants/ActionTypes'
const useStyles = makeStyles(theme => ({

    root: {

        minHeight: '100vh',
        padding: 9,
        display: 'flex',

        alignItems: 'center',
        flexDirection: 'column'
    },
    portGrid: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 18,
        width: '100%',
        flexWrap: 'wrap'
    },
    Grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18

    },
    Typo: {
        display: 'flex',

    },
    Button2: {
        display: 'flex',
        backgroundColor: 'rgb(3, 127, 255)',
        color: '#fff',
        marginTop: 50

    },
    A: {
        display: 'flex',
        marginTop: 18,
        cursor: 'pointer'

    }

}))
export default function PortfoliosScreen() {
    const { dispatch } = useContext(LoginContext)
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid container className={classes.root} >
            <Title title={'تغییر رمز عبور'} />
            <Grid className={classes.portGrid} >
                <Grid lg={4} xs={12} className={classes.Grid}>
                    <Typography className={classes.Typo}>رمز عبور فعلی:</Typography>
                    <TextField

                        id="outlined-basic"


                    />
                </Grid>
                <Grid lg={4} xs={12} className={classes.Grid}>
                    <Typography className={classes.Typo}>رمز عبور جدید:</Typography>
                    <TextField

                        id="outlined-basic"


                    />
                </Grid>

            </Grid>
            <Button className={classes.Button2} variant='contained'>ثبت رمز جدید</Button>
            <a className={classes.A} onClick={() => dispatch({ type: FORGET_PASSWORD })}><Typography>رمزعبور خود را فراموش کرده اید</Typography></a>
        </Grid>
    )
}
