import { Hidden, Link, Typography, Grid, Button } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import useStyles from './ItemAdd.styles'
import coupon from '../../assets/images/coupon.png'
import lines from '../../assets/images/lines.png'
import discount from '../../assets/images/discount.png'
import { CartContext } from '../../contexts/CartContext'

export default function ItemAdd({ oni, desc, takhfif, price, title, img, alt, href, product, id, stock }) {
    const classes = useStyles()
    // const [product, setProduct] = useState('')   
    const { addProduct, count, isExist, RemoveItem, plus, reduce } = useContext(CartContext)



    const [tedad, setTedad] = useState(1)
    const isExistCart = isExist(id)



    // const tedad = 1
    return (
        <Grid className={classes.itemDiv} >

            <Link className={classes.LinkDiv} style={{ textDecoration: 'none' }}>
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
            </Link>
            <Grid className={classes.all}>

                {/* <div className={classes.divy}> */}

                <div className={classes.Price}>
                    <Hidden smUp>

                        <Typography variant='h5'>
                            {title}
                        </Typography>

                    </Hidden>


                </div>

                {/* </div> */}
                <div className={classes.desc}>
                    <Button onClick={oni} className={classes.bt} variant='contained' size='small' >اضافه به محصولات</Button>



                </div>
            </Grid>
        </Grid>

    )
}
