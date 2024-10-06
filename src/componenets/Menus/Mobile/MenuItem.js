import { Button, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import useStyles from './menuItem.styles'
import Logo from '../../../assets/images/logo.svg'
import homey from '../../../assets/images/homey.png'
import {SIGNIN, SIGNUP } from '../../../constants/ActionTypes'
import { LoginContext } from '../../../contexts/LoginContext'
export default function MenuItem() {

    const classes = useStyles()
    const [expanded, setExpanded] = React.useState('panel1')

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    const { dispatch } = useContext(LoginContext)
    return (
        <div className={classes.root} >
            <div className={classes.logoMenu} >
                <img src={Logo} className={classes.logoImg} ></img>
            </div>
            <div className={classes.mainButton}>
                <Button href='/'><img src={homey} className={classes.homey}></img><Typography>صفحه اصلی</Typography></Button>
            </div>
            <div className={classes.kkl}>
                <Button href={localStorage.getItem('shop') ? "/shopPro/dairy" : "/shop/dairy"}><Typography>لبنیات</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/nuts" : "/shop/nuts"}><Typography> خشکبار ، دسر و شیرینی</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/beverages" : "/shop/beverages"}><Typography>نوشیدنی</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/baby" : "/shop/baby"}><Typography>کودک و نوزاد</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/food-bread" : "/shop/food-bread"}><Typography>خواربار و نان</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/protein" : "/shop/protein"}><Typography>مواد پرو تئینی</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/ready-food" : "/shop/ready-food"}><Typography>کنسرو و غذای آماده</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/washer" : "/shop/washer"}><Typography>دستمال و شوینده</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/health" : "/shop/health"}><Typography>آرایشی و بهداشتی</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/breakfast" : "/shop/breakfast"}><Typography>صبحانه</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/junk-food" : "/shop/junk-food"}><Typography>تنقلات</Typography></Button>
                <Button href={localStorage.getItem('shop') ? "/shopPro/flavor" : "/shop/flavor"}><Typography>چاشنی و افزودنی</Typography></Button>
            </div>


            <div className={classes.signDiv} >
                <Button onClick={() => dispatch({ type: SIGNUP })} fullWidth variant='contained' color='primary' className={classes.signinButton} >عضویت</Button>
                <Button onClick={() => dispatch({ type: SIGNIN })} fullWidth >ورود</Button>
            </div>
        </div >
    )
}
