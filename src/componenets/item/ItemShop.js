import { Hidden, Link, Typography, Grid, Button } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import useStyles from './Item.styles'
import coupon from '../../assets/images/coupon.png'
import lines from '../../assets/images/lines.png'
import discount from '../../assets/images/discount.png'
import { CartContext } from '../../contexts/CartContext'
import { LoginContext } from '../../contexts/LoginContext'
import { UPDATEITEMSHOP } from '../../constants/ActionTypes'
import { ModalContext } from '../../contexts/ModalContext'
import axios from 'axios'
export default function Item({ desc, takhfif, price, title, img, alt, href, product, id, stock }) {
    const classes = useStyles()
    // const [product, setProduct] = useState('')   
    const { addProduct, count, isExist, RemoveItem, plus, reduce } = useContext(CartContext)


    const { addPro, CartProduct } = useContext(ModalContext)
    const [tedad, setTedad] = useState(1)
    const isExistCart = isExist(id)
    const { dispatch } = useContext(LoginContext)

    function oncli() {
        addPro(product)
        dispatch({ type: UPDATEITEMSHOP })

    }
    function Delete(id) {
        try {


            axios.get("https://api.balamala.ir/store/deleteProShop",

                {
                    params: {
                        token: localStorage.getItem('tokenShop'),
                        id: id
                    }
                }
            )
                .then((response) => {
                    window.location.reload()


                }).catch((error) => {
                    console.log(error)
                })

        }
        catch (err) {

        }

    }

    // console.log(CartProduct)
    // const tedad = 1
    return (
        <Grid className={classes.itemDiv} >
            {takhfif >= 1 ? <img alt='تخفیفات ویژه در بالا مالا' src={coupon} className={classes.takh}></img> : <></>}

            <Link className={classes.LinkDiv} style={{ textDecoration: 'none' }}>
                <Grid onClick={oncli} className={classes.imgDiv}>
                    <img alt={alt} src={img} className={classes.imgItem}></img>
                    <div className={classes.figo}>
                        <Hidden xsDown>
                            <Typography variant='h5'>
                                {title}
                            </Typography>
                        </Hidden>
                    </div>

                </Grid>
            </Link>
            <Grid className={classes.all}>

                {/* <div className={classes.divy}> */}

                <div className={classes.Price}>
                    <Hidden smUp>

                        <Typography variant='h5'>
                            {title}
                        </Typography>

                    </Hidden>
                    <div className={classes.solidDiv} >{takhfif >= 1 ? <img alt='فروشگاه اینترنتی بالا مالا' src={lines} className={classes.solid}></img> : <></>} <Typography >{price}</Typography></div>
                    <div className={takhfif >= 1 ? classes.takhfif : classes.takhfif2}>
                        <Typography variant='h5'>{Intl.NumberFormat('ar-EG').format(takhfif)} تومان</Typography>
                    </div>

                </div>

                {/* </div> */}
                <div className={classes.desc2}>
                    <Button variant='contained' style={{ backgroundColor: '#36AE7C' }} size='small' onClick={oncli} >ویرایش</Button>

                    <Button onClick={() => { Delete(id) }} variant='contained' style={{ backgroundColor: '#EB5353', marginTop: 3 }} size='small' >حذف</Button>

                </div>
            </Grid>
        </Grid>

    )
}
