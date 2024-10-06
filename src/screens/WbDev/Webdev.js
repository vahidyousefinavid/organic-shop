import { Grid, Link, Typography, TextField, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from './AddProduct.styles'
import BasItem from '../../componenets/item/BasItem'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import InfiniteScroll from 'react-infinite-scroll-component'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import PrintIcon from '@mui/icons-material/Print'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddIcon from '@mui/icons-material/Add'
import Autocomplete from '@material-ui/lab/Autocomplete'
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}))

const sorts = [
    {
        value: 'FAEZEVAKILI',
        label: 'FAEZEVAKILI',
    },
    {
        value: 'HATAMEMORADI',
        label: 'HATAMEMORADI',
    },
    {
        value: 'RAZIYENAZARI',
        label: 'RAZIYENAZARI',
    },
    

];

export default function WebDev() {


    const classes = useStyles()
    const [value, setValue] = React.useState(0)
    const [name, setName] = React.useState();

    const handleChange = (event) => {
        setName(event.target.value);
        
    };
 

    function Ok() {
        try {

            const instaId = document.querySelector("#instaId").value
            const name = name
            const desc = document.querySelector("#desc").value
           
            const formData = new FormData()
            formData.append("instaId", instaId)
            formData.append("name", name)
            formData.append("desc", desc)
           


            axios.post("https://api.balamala.ir/adminPanel/webDev",
                formData,
            
            )

                .then(res => {

                    if (res.data == "validate") {
                        return alert('فیلد ها را با دقت پر کنید ')
                    }
                    if (res.data == "repeat") {
                        return alert('قبلا فعالیت روی این شماره یا ID ثبت شده ')
                    }

                    if (res.data == "ok") {
                        return  alert('فعالیت شما با موفقیت ثبت شد')
                    }
                    alert('فعالیت شما با موفقیت ثبت شد')


                })
                .catch((err) => {
                    console.log(err)
                    alert('فیلد ها را کامل پر کنید ')
                })
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <Grid className={classes.rootShop}>
            <Typography>ثبت فعالیت</Typography>
          

            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>INSTAGRAME_ID OR NUMBER PHONE  </Typography>
                <TextField id="instaId"
                    label="ID"
                    // placeholder="Placeholder"
                    multiline
                    placeholder='369'
                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>YOUR ACCOUNT   </Typography>
             
                    <TextField
                    id="name"
                    select
                    label="ACCOUNT"
                    placeholder="اکانت شما"
                    multiline
                    value={name}
                    variant="standard"
                    className={classes.MainInput} 
                    onChange={handleChange}
                    helperText="اکانت شما"
                    
                >
                    {sorts.map((option) => (
                        <MenuItem   className={classes.MainInput}  key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
              
            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}> DESC   </Typography>
                <TextField id="desc"
                    label="DESC"
                    placeholder="description"
                    multiline
                    type='string'
                    
                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>
            
            <Grid className={classes.updateMain}>
                
                <Button onClick={Ok} variant='contained' className={classes.MainButton}>OK</Button>
            </Grid>
          


        </Grid>

    )
}
