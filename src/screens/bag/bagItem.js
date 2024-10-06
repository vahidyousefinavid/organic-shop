import React, { useContext } from 'react'
import useStyles from './bag.styles'

import { Grid, Typography, Button } from '@material-ui/core'
import removeIcon from '../../assets/images/remove.svg'
import { CartContext } from '../../contexts/CartContext'








export default function BagItem({ img, title, code, tedad, price, id, href, alt, alt2 }) {
    const url = 'https://api.rabinpoosh.ir/'
    const classes = useStyles()
    const { RemoveItem, reduce, plus } = useContext(CartContext)
    var Price = Intl.NumberFormat('ar-EG').format(price)
    var tedad = Intl.NumberFormat('ar-EG').format(tedad)
    return (
        <Grid className={classes.bagRoot} container >
            <Grid style={{ display: 'flex', position: 'absolute', left: 9 }} >
                <Button onClick={() => { RemoveItem(id) }} ><img alt='حذف' src={removeIcon} style={{ width: 30, }} ></img></Button>
            </Grid>
            <Button variant='contained' size='small' style={{ position: 'absolute', display: 'flex', left: 9, bottom: 9, backgroundColor: 'rgb(0, 102, 255)' }} ><Typography variant='h6' style={{ color: '#fff' }} >بالا مالا</Typography></Button>
            <Grid className={classes.imgGrid} xs={3} >
                <a href={href} style={{ maWidth: '100%', borderRadius: 30 }} > <img alt={alt} className={classes.image} src={img} ></img></a>
            </Grid>

            <Grid xs={9} style={{ padding: 9, paddingRight: 0 }} >
                <Typography>{title}</Typography>
                <Typography variant='body1' style={{ color: '#0000009e' }}  >کد:{code}</Typography>
                <br></br>

                <Typography variant='body1' >تعداد: <div className={classes.ddidiv}><Button onClick={() => { plus(id) }} size='small' variant='contained' color='primary' className={classes.plusButton} >+</Button><Typography className={classes.typ1}  >{tedad}</Typography><Button onClick={() => { reduce(id) }} size='small' variant='contained' color='primary' className={classes.opoButton}>-</Button></div></Typography>

                {/* <Typography>رنگ:{
                    <img className={classes.IMG} alt={alt2} src={url + color}></img>
                }</Typography> */}

                <br></br>
                <Typography variant='body1' >قیمت: {Price} تومان</Typography>

            </Grid>





        </Grid>

    )
}
