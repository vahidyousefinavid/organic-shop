import { Hidden, Link, Typography, Grid, Button } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import useStyles from './ItemTop.styles'
import coupon from '../../assets/images/coupon.png'
import lines from '../../assets/images/lines.png'
import discount from '../../assets/images/discount.png'
import { CartContext } from '../../contexts/CartContext'
import { ModalContext } from '../../contexts/ModalContext'
import { UPDATEITEMSHOP } from '../../constants/ActionTypes'
import { LoginContext } from '../../contexts/LoginContext'
export default function ItemTop({ desc, takhfif, price, title, img, alt, href, product, id, stock }) {
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
    // takhfif = 2000000

    // const tedad = 1
    return (
        <Grid className={classes.itemDiv} >
            {/* {takhfif >= 1 ? <img alt='تخفیفات ویژه در بالا مالا' src={coupon} className={classes.takh}></img> : <></>} */}

            {/* <Link onClick={oncli} className={classes.LinkDiv} style={{ textDecoration: 'none' }}> */}
            <Grid className={classes.imgDiv}>
                <img alt={alt} src={img} className={classes.imgItem}></img>


            </Grid>
            <div className={classes.kjtr} >


                <div className={classes.figo}>

                    <Typography className={classes.kko} variant='h5'>
                        {title}
                    </Typography>

                </div>
                <div className={classes.Price}>

                    <div className={classes.solidDiv} >{takhfif >= 1 ? <img alt='فروشگاه اینترنتی بالا مالا' src={lines} className={classes.solid}></img> : <></>} {price}</div>


                </div>
                <div className={takhfif >= 1 ? classes.takhfif : classes.takhfif2}>
                    <Typography className={classes.lljo} variant='h5'>{Intl.NumberFormat('ar-EG').format(takhfif)} تومان</Typography>
                    {/* {
            this.props.data.map((post,key) =>
                <div key={key} className='post-detail'>
                    <h1>{post.title}</h1>
                    <p>{moment(post.date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</p>
                    <hr />
                </div>
            )} */}
                </div>
                <Grid className={classes.all}>

                    {/* <div className={classes.divy}> */}



                    {/* </div> */}
                    <div className={classes.desc}>
                        {isExistCart ? <div className={classes.ddidiv}><Button onClick={() => { plus(id) }} size='small' variant='contained' color='primary' className={classes.plusButton} >+</Button><Typography className={classes.typ1}  >{isExistCart}</Typography><Button onClick={() => { reduce(id) }} size='small' variant='contained' color='primary' className={classes.opoButton}>-</Button></div> : <Button onClick={() => { addProduct(product, tedad) }} size='small' variant='contained' color='primary' className={classes.bagButton} disabled={stock <= 0 ? true : false} >افزودن به سبد</Button>}



                    </div>
                </Grid>
            </div>
        </Grid>

    )
}
