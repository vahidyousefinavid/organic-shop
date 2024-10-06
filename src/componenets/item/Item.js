import { Hidden, Link, Typography, Grid, Button } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import useStyles from './Item.styles'
import coupon from '../../assets/images/coupon.png'
import lines from '../../assets/images/lines.png'
import discount from '../../assets/images/discount.png'
import { CartContext } from '../../contexts/CartContext'
import { ModalContext } from '../../contexts/ModalContext'
import { UPDATEITEMSHOP } from '../../constants/ActionTypes'
import { LoginContext } from '../../contexts/LoginContext'
export default function Item({ desc, takhfif, price, title, img, alt, href, product, id, stock }) {
    const classes = useStyles()
    // const [product, setProduct] = useState('')   
    const { addProduct, count, isExist, plus, reduce } = useContext(CartContext)
    const [tedad, setTedad] = useState(1)
    const isExistCart = isExist(id)
    const { addPro } = useContext(ModalContext)
    const { dispatch } = useContext(LoginContext)

    return (
        <Grid className={classes.itemDiv} >
            {takhfif >= 1 ? <img alt='تخفیفات ویژه در بالا مالا' src={coupon} className={classes.takh}></img> : <></>}
            <Grid className={classes.imgDiv}>
                <img alt={alt} src={img} className={classes.imgItem}></img>
                <div className={classes.figo}>
                    <Hidden xsDown>
                        <Typography variant='h5'>
                            {title}
                        </Typography>
                    </Hidden>
                </div>
            </Grid>
            <Grid className={classes.all}>
                <div className={classes.Price}>
                    <Hidden smUp>
                        <div>
                            <Typography variant='h5'>
                                {title}
                            </Typography>
                        </div>
                    </Hidden>
                    <div className={classes.solidDiv} >{takhfif >= 1 ? <img alt='فروشگاه اینترنتی بالا مالا' src={lines} className={classes.solid}></img> : <></>} <Typography >{price}</Typography></div>
                    <div className={takhfif >= 1 ? classes.takhfif : classes.takhfif2}>
                        <Typography variant='h5'>{Intl.NumberFormat('ar-EG').format(takhfif)} تومان</Typography>
                    </div>
                </div>
                <div className={classes.desc}>
                    {isExistCart ? <div className={classes.ddidiv}><Button onClick={() => { plus(id) }} size='small' variant='contained' color='primary' className={classes.plusButton} >+</Button><Typography className={classes.typ1}  >{isExistCart}</Typography><Button onClick={() => { reduce(id) }} size='small' variant='contained' color='primary' className={classes.opoButton}>-</Button></div> : <Button onClick={() => { addProduct(product, tedad) }} size='small' variant='contained' color='primary' className={classes.bagButton} disabled={stock <= 0 ? true : false} >افزودن به سبد</Button>}
                </div>
            </Grid>
        </Grid>

    )
}
