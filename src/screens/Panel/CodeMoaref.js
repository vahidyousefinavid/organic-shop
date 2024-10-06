import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Hidden, TextField, Typography } from '@material-ui/core'
import Title from '../../componenets/title'


import { LoginContext } from '../../contexts/LoginContext'
import { FORGET_PASSWORD } from '../../constants/ActionTypes'
import axios from 'axios'
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
        marginRight: 6

    },
    Button2: {
        display: 'flex',
        backgroundColor: 'rgb(3, 127, 255)',
        color: '#fff',
        marginTop: 50

    },
    Button3: {
        display: 'none',


    },
    A: {
        display: 'flex',
        marginTop: 18,
        cursor: 'pointer'

    },
    errorTypo: {
        // display: 'flex',
        color: 'red',
        // marginTop: 6,
        position: 'absolute'
    },
    errorTypo2: {
        display: 'none',
        color: 'red',
        marginTop: 6
    },
    Div: {
        flexDirection: 'column'
    },
    Div2: {
        display: 'none'
    }

}))

export default function CodeMoaref() {
    const { dispatch } = useContext(LoginContext)
    const classes = useStyles()
    const [data, setData] = React.useState('')
    const [nat, setNat] = React.useState('')
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
    console.log(data)

    function signCodeMoaref() {
        const CodeMoaref = document.querySelector("#CodeMoaref").value



        const formData = new FormData()
        formData.append("CodeMoaref", CodeMoaref)



        axios.post("https://api.balamala.ir/CodeMoaref" + token, formData)
            // .then(response => response.json())

            .then(res =>

                console.log(res)


            ).catch(err => {
                console.log(err)
            })


        // console.log(all)

    }
    function Find() {
        try {
            const CodeMoaref = document.querySelector("#CodeMoaref").value







            axios.get("https://api.balamala.ir/CodeMoarefFind" + CodeMoaref)


                .then(res =>

                    setNat(res.data),


                ).catch(err => {
                    console.log(err)
                })


            // console.log(all)

        }
        catch {
            console.log('nemishe')
        }
    }
    console.log(nat)

    return (
        <Grid container className={classes.root} >
            <Title title={'دریافت کد معرف'} />

            <Grid className={classes.portGrid} >
                <Grid className={classes.Grid}>
                    <Typography className={classes.Typo}>{data.CodeMoaref ? 'کد معرف مختص شما:' : 'کد معرف دلخواه:'}</Typography>
                    <Typography>{data.CodeMoaref}</Typography>
                    <div className={data.CodeMoaref ? classes.Div2 : classes.Div}>
                        <TextField

                            id='CodeMoaref'
                            onChange={Find}


                        />
                        <Typography className={nat == 'repeat' ? classes.errorTypo : classes.errorTypo2} variant='h6'>کد معرف قبلا توسط شخص دیگری استفاده شده است</Typography>
                    </div>
                </Grid>

            </Grid>
            <Button disabled={nat == 'repeat' ? true : false} onClick={signCodeMoaref} className={data.CodeMoaref ? classes.Button3 : classes.Button2} variant='contained'>ثبت کد معرف</Button>

        </Grid>
    )
}
