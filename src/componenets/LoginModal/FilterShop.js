import { Button, Modal, TextField, Typography, Grid, Link } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './index.styles'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'








import { CartContext } from '../../contexts/CartContext'

import removeIcon from '../../assets/images/remove.svg'
import { Box } from '@mui/material'

import left from '../../assets/images/left.png'
import { ModalContext } from '../../contexts/ModalContext'
export default function FilterShop() {
    const classes = useStyles()
    const { state, dispatch } = useContext(LoginContext)
    const { filteringS } = useContext(CartContext)
   
 
    return (
        <Modal open={state.filterShop} onClose={() => dispatch({ type: 'closeAll' })} >
            <Box className={classes.Modal}>
                <Grid style={{ display: 'flex', position: 'absolute', right: 0, top: 9 }} >
                    <Button onClick={() => dispatch({ type: 'closeAll' })} ><img alt='حذف' src={removeIcon} style={{ width: 28, }} ></img></Button>
                </Grid>
                <Link onClick={() => {
                   filteringS('dairy')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>
                    <Grid className={classes.jss1}  >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>لبنیات</Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>ماست ، دوغ ، شیر ، کشک ،شیرکاکائو...</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                    filteringS('beverages')
                    dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>
                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>نوشیدنی</Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>نوشابه ، دوغ ، آب معدنی ، دلستر</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('ready-food')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>
                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>کنسرو،غذای آماده و منجمد</Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>تن ماهی ، نودالیت ، الویه ، کنسرو لوبیا</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('junk-food')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>

                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1} >تنقلات </Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>چیپس ، پفک ، بادام زمینی ، لواشک </Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('flavor')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>

                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>چاشنی و افزودنی ها </Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>ادویه ، سس ، نمک ، رپ گوجه فرنگی</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('health')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>

                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>آرایشی و بهداشتی </Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>محصولات آرایشی و بهداشتی برای آقایان و بانوان</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('breakfast')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>


                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>صبحانه </Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>کره بادام زمینی ، غلات صبحانه ، مربا</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                    filteringS('nuts')
                    dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>

                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>خشکبار، دسر و شیرینی </Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>دسر ، آجیل ، خرما و ژله ، خشکبار</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('baby')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>


                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>کودک و نوزاد </Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap> پوشک کودک ، مواد غذایی کودک ، شیرخشک</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('food-bread')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>


                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>خواربار و نان</Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>روغن ، خوار و بار ، نان ، ماکارونی</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('protein')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>

                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>مواد پروتئینی</Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>تخم مرغ ، گوشت قرمز ، مرغ ، ماهی</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('washer')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>

                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>دستمال و شوینده</Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>شستوشوی لباس ، ضدعفونی کننده ، مایع ظرفشویی</Typography>
                    </Grid>
                </Link>
                <Link onClick={() => {
                   filteringS('all')
                   dispatch({ type: 'closeAll' })
                }} style={{ textDecoration: 'none' }}>

                    <Grid className={classes.jss1} >

                        <img src={left} className={classes.down}></img>
                        <Typography variant='h4' className={classes.tt1}>همه محصولات</Typography>
                        <Typography className={classes.typo1} variant='h5' noWrap>تمامی محصولات</Typography>
                    </Grid>
                </Link>


            </Box>

        </Modal >
    )
}