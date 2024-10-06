import { Hidden, Link, Typography, Grid, Button } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import useStyles from './ItemX.styles'
import coupon from '../../assets/images/dairy.png'
import lines from '../../assets/images/lines.png'
import discount from '../../assets/images/discount.png'
import { CartContext } from '../../contexts/CartContext'
import { ModalContext } from '../../contexts/ModalContext'
import { UPDATEITEMSHOP } from '../../constants/ActionTypes'
import { LoginContext } from '../../contexts/LoginContext'
export default function ItemX({ desc, takhfif, price, title, img, alt, href, product, id, stock }) {
    const classes = useStyles()
    // const [product, setProduct] = useState('')   
    const { addProduct, count, isExist, RemoveItem, plus, reduce } = useContext(CartContext)



    const [tedad, setTedad] = useState(1)
    const isExistCart = isExist(id)
    const { addPro, CartProduct } = useContext(ModalContext)
    const { dispatch } = useContext(LoginContext)
    function oncli() {
        addPro(product)
        dispatch({ type: UPDATEITEMSHOP })

    }


    return (
        <Grid  className={classes.item1} >
          <div className={classes.div1} >
<img src={coupon} className={classes.img1} />
          </div>
         <Typography className={classes.tt1} variant='h5' >
             نوشابه کوکا کولا 300 میلی لیتری
         </Typography>
         
         {isExistCart ? <div className={classes.ddidiv}><Button onClick={() => { plus(id) }} size='small' variant='contained' color='primary' className={classes.plusButton} >+</Button><Typography className={classes.typ1}  >{isExistCart}</Typography><Button onClick={() => { reduce(id) }} size='small' variant='contained' color='primary' className={classes.opoButton}>-</Button></div> : <Button onClick={() => { addProduct(product, tedad) }} size='small' variant='contained' color='primary' className={classes.bagButton} disabled={stock <= 0 ? true : false} >افزودن به سبد</Button>}
        </Grid>

    )
}
