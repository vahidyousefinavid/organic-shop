import { Container, Grid, TextField, Typography, Button } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import useStyles from './details.styles'
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import hourssupport from '../../assets/images/24.png'
import running from '../../assets/images/delivery-truck.png'
import dd from '../../assets/images/box.png'
import { CartContext } from '../../contexts/CartContext'

export default function Details() {
    const classes = useStyles()
    const placeId = new URLSearchParams(window.location.search).get("place")
    const url = 'https://api.balamala.ir/'
    const [product, setProduct] = useState('')
    const [tedad, setTedad] = useState('1')
    const { addProduct, count, isExist, plus, reduce } = useContext(CartContext)

    const handleTedad = (newTedad) => {
        setTedad(newTedad)


    }



    useEffect(() => {

        axios({
            url: ("https://api.balamala.ir/product/" + placeId),

            method: "GET"
        })
            .then((response) => {

                setProduct(response.data)


            }).catch((error) => {
                console.log(error)
            })



    }, [placeId])

    const isExistCart = isExist(product._id)


    return (
        <Container className={classes.root} maxWidth='lg'>
            <Grid className={classes.topGrid} container direction='row'>
                <Grid className={classes.slideGrid} item lg={5} xs={12}>


                    <div className={classes.itemRoot}> <img src={url + product.main} className={classes.image} alt={product.title} ></img></div>

                </Grid>
                <Grid className={classes.detailsGrid} item lg={7} xs={12}>
                    <div style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', display: 'flex', borderBottom: '1px solid #E1E8EB' }}>
                        <div>
                            <Typography>{product.title}</Typography>
                            <Typography style={{ color: '#7F7C82' }} variant='h6'>کد محصول:{product.code}</Typography>
                        </div>
                        <div>
                            {product.stock === 0 ? <Typography variant='h4' style={{ color: '#F05454' }}>اتمام موجودی</Typography> : <Typography variant='h4' > {Intl.NumberFormat('ar-EG').format(product.price) + ' تومان'}</Typography>}
                            <div className={product.takhfif >= 1 ? classes.takhfif : classes.takhfif2}>
                                <Typography variant='h5'> تخفیف:{Intl.NumberFormat('ar-EG').format(product.takhfif) + ' تومان'}</Typography>
                            </div>

                        </div>
                    </div>

                    <div className={classes.subDiv}>
                        <Typography>
                            توضیحات:
                        </Typography>
                        <Typography variant='h5'>
                            {product.desc}
                        </Typography>

                    </div>
                    {isExistCart ? <></> : <div className={classes.countDiv}>
                        <Typography>تعداد:</Typography>
                        <TextField

                            type="number"
                            InputProps={{ inputProps: { min: 1, max: product.stock } }}
                            value={tedad} onChange={(e) => handleTedad(e.target.value)} ></TextField>

                    </div>}

                    <div className={classes.buttonDiv}>
                        {isExistCart ? <div className={classes.ddidiv}><Button onClick={() => { plus(product._id) }} size='small' variant='contained' color='primary' className={classes.plusButton} >+</Button><Typography className={classes.typ1}  >{isExistCart}</Typography><Button onClick={() => { reduce(product._id) }} size='medium' variant='contained' color='primary' className={classes.opoButton}>-</Button></div> : <Button onClick={() => { addProduct(product, tedad) }} size='medium' variant='contained' color='primary' className={classes.bagButton} disabled={product.stock <= 0 ? true : false} >افزودن به سبد</Button>}

                        {/* <Button href='/sizeGuide' variant='contained' color='secondary' className={classes.favoritButton} >راهنمای استفاده</Button> */}
                    </div>


                </Grid>




            </Grid>
            <Grid className={classes.sertificate}>
                <div className={classes.serti}>
                    <img className={classes.image3} alt='امنیت در خرید در مارکت بالا مالا' src={dd}></img>
                    <Typography variant='h5' style={{ justifyContent: 'center', display: 'flex' }}>امنیت در خرید</Typography>
                </div>
                <div className={classes.serti}>
                    <img className={classes.image3} alt='پشتیبانی 24 ساعنه در بالا مالا' src={hourssupport}></img>
                    <Typography variant='h5' style={{ justifyContent: 'center', display: 'flex' }}>پشتیبانی 24 ساعته</Typography>

                </div>
                <div className={classes.serti}>
                    <img className={classes.image3} alt='تحویل سریع در فروشگاه اینترنتی بالا مالا ' src={running}></img>
                    <Typography variant='h5' style={{ justifyContent: 'center', display: 'flex' }}>تحویل سریع</Typography>

                </div>
            </Grid>

        </Container >
    )
}
