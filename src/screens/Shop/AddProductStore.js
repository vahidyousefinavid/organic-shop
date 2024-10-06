import { Grid, Link, Typography, TextField, Button, Box } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from './AddProductStore.styles'

import axios from 'axios'
import ItemAdd from '../../componenets/item/ItemAdd.js'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function AddPStore() {
    //warning
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    // succes

    const [openS, setOpenS] = useState(false)

    const handleClickS = () => {
        setOpenS(true)
    }

    const handleCloseS = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenS(false)
    }

    const classes = useStyles()
    const [value, setValue] = React.useState(0)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [phone, setPhone] = useState()
    const params = {

        token: localStorage.getItem('tokenShop'),
        page: page
    }
    useEffect(() => {

        axios({
            url: (`https://api.balamala.ir/store/productlist`),
            params,
            method: "GET"
        })
            .then((response) => {

                const hh = response.data[1]
                const pp = response.data[2].reverse()
                setPhone(response.data[0])
                return setData([...data, ...pp])


            }).catch((error) => {
                console.log(error)
            })



    }, [page])




    function AddProduct(id) {

        try {
            const formData = new FormData()
            formData.append("id", id)

            axios.post("https://api.balamala.ir/store/AddPStore",
                formData,
                {
                    params: {
                        token: localStorage.getItem('tokenShop'),
                        phone: phone
                    }
                }
            )
                .then((response) => {
                    if (response.data == 'repeate') {
                        setOpen(true)
                    }
                    if (response.data == 'succes') {
                        setOpenS(true)

                    }


                }).catch((error) => {
                    console.log(error)
                })

        }
        catch (err) {

        }

    }
    const url = 'https://api.balamala.ir/'
    const proUrl = '/panel/updateDetils'
    return (

        <Grid item className={classes.rootShop}>
            <Snackbar open={open} autoHideDuration={500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    قبلا اضافه شده است
                </Alert>
            </Snackbar>
            <Snackbar open={openS} autoHideDuration={500} onClose={handleCloseS}>
                <Alert onClose={handleCloseS} severity="success" sx={{ width: '100%' }}>
                    با موفقیت اضافه شد
                </Alert>
            </Snackbar>
            <Grid className={classes.ii} lg={12} xs={12}>


                {data.map((item) => (

                    <ItemAdd oni={() => { AddProduct(item._id) }} img={url + item.main} title={item.title} />
                ))}



            </Grid>


        </Grid>

    )
}

