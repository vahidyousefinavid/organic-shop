import { Button, Modal, TextField, Typography, Grid, Link } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import useStyles from './UpdateItem.styles.js'
import brandLogo from '../../assets/images/123.png'
import { LoginContext } from '../../contexts/LoginContext'
import { CartContext } from '../../contexts/CartContext'
import { ModalContext } from '../../contexts/ModalContext.js'
import removeIcon from '../../assets/images/remove.svg'
import { Box } from '@mui/material'
// import useStyles from './UpdateItem.styles.js'
import left from '../../assets/images/left.png'
import axios from 'axios'
export default function UpdateItemShop({ id }) {
    const classes = useStyles()
    const { CartProduct } = useContext(ModalContext)

    const { state, dispatch } = useContext(LoginContext)
    const [product, setProduct] = useState('')
    const [tedad, setTedad] = useState(CartProduct.stock)
    const handleTedad = event => {
        setTedad(event.target.value)
    }
    const [price, setPrice] = useState(CartProduct.price)
    const handlePrice = event => {
        setPrice(event.target.value)
    }
    const [takhfif, setTakhfif] = useState(CartProduct.takhfif)
    const handleTakhfif = event => {
        setTakhfif(event.target.value)
    }




    function Update() {
        try {

            const stock = tedad
            const pp = price
            const tt = takhfif
            const formData = new FormData()

            formData.append("stock", stock)
            formData.append("price", pp)
            formData.append("takhfif", tt)

            // const params = {

            //     token: localStorage.getItem('tokenShop'),
            //     id: CartProduct._id
            // }

            axios.put("https://api.balamala.ir/store/updateProShop",
                formData,
                {
                    params: {
                        token: localStorage.getItem('tokenShop'),
                        id: CartProduct._id
                    }
                }
            )

                .then(res => {

                    // window.location.reload()
alert('با موفقیت آپدیت شد')


                })
                .catch((err) => {
                    console.log(err)
                })

        }
        catch (err) {
            console.log(err)
        }

    }

    const url = 'https://api.balamala.ir/'
    return (
        <Modal open={state.updateItemShop} onClose={() => dispatch({ type: 'closeAll' })} >
            <Box className={classes.Modal}>
                <Grid className={classes.GridModal}>
                    <Grid style={{ display: 'flex', position: 'absolute', right: 0, top: 9 }} >
                        <Button onClick={() => dispatch({ type: 'closeAll' })} ><img alt='حذف' src={removeIcon} style={{ width: 28, }} ></img></Button>
                    </Grid>
                    <Grid className={classes.imgGrid} >
                        <img src={url + CartProduct.main} className={classes.img} ></img>
                    </Grid>

                    <Grid className={classes.detailsGrid} >
                        <div style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', display: 'flex', borderBottom: '1px solid #E1E8EB' }}>
                            <div>
                                <Typography>{CartProduct.title}</Typography>
                                <Typography style={{ color: '#7F7C82' }} variant='h6'>کد محصول:{CartProduct.code}</Typography>
                            </div>
                            <div>
                                <Typography >{CartProduct.stock === 0 ? <Typography variant='h4' style={{ color: '#F05454' }}>اتمام موجودی</Typography> : Intl.NumberFormat('ar-EG').format(CartProduct.price) + ' تومان'}</Typography>
                                <div className={product.takhfif >= 1 ? classes.takhfif : classes.takhfif2}>
                                    <Typography variant='h5'> تخفیف:{Intl.NumberFormat('ar-EG').format(product.takhfif) + ' تومان'}</Typography>
                                </div>
                            </div>
                        </div>

                        <div className={classes.subDiv}>
                            <Typography>
                                توضیحات:{CartProduct.desc}
                            </Typography>
                            <Typography variant='h5'>
                                {/* {product.desc} */}
                            </Typography>

                        </div>
                        <div className={classes.countDiv}>
                            <Typography variant='h4'>تعداد:</Typography>
                            <TextField
                                variant='outlined'
                                value={tedad}
                                onChange={handleTedad}
                                type='number'
                                id='tedad'
                                size='small'
                            >

                            </TextField>


                        </div>
                        <div className={classes.countDiv}>
                            <Typography variant='h4'>قیمت جدید:</Typography>
                            <TextField
                                variant='outlined'
                                value={price}
                                onChange={handlePrice}
                                type='number'
                                id='tedad'
                                size='small'

                            >

                            </TextField>


                        </div>

                        <div className={classes.countDiv}>
                            <Typography variant='h4'> قیمت با تخفیف:</Typography>
                            <TextField
                                variant='outlined'
                                value={takhfif}
                                onChange={handleTakhfif}
                                type='number'
                                id='tedad'
                                size='small'

                            >

                            </TextField>


                        </div>

                        <div className={classes.buttonDiv}>

                            <Button onClick={Update} variant='contained' color='primary' className={classes.bagButton} >آپدیت کردن</Button>
                            {/* <Button href='/sizeGuide' variant='contained' color='secondary' className={classes.favoritButton} >راهنمای استفاده</Button> */}
                        </div>


                    </Grid>


                </Grid>
            </Box>

        </Modal>
    )
}