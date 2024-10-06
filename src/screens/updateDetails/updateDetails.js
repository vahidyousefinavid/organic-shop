import { Container, Grid, TextField, Typography, Button } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import useStyles from './updateDetails.styles'
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import hourssupport from '../../assets/images/24.png'
import running from '../../assets/images/delivery-truck.png'
import dd from '../../assets/images/box.png'
import { CartContext } from '../../contexts/CartContext'

export default function UpdateDetails() {

    const classes = useStyles()
    const placeId = new URLSearchParams(window.location.search).get("place")
    const url = 'https://api.balamala.ir/'
    const [product, setProduct] = useState('')
    const [tedad, setTedad] = useState('1')
    const { addProduct, count } = useContext(CartContext)

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

    function UpdateMain() {
        try {
            const main = document.querySelector("#main").files[0]
            const formData = new FormData()
            formData.append("main", main)

            // axios.put("http://localhost:3001/adminPanel/updateMain/" + placeId, formData)
            axios.put("https://api.balamala.ir/adminPanel/updateMain", formData, {
                params: {
                    token: localStorage.getItem('tokenShop'),
                    id: placeId
                }
            })

                .then(res => {

                    alert("با موفقیت اپدیت شد")
                    // window.location.assign("http://localhost:3001/")
                    console.log(res)

                })
                .catch((err) => {
                    console.log(err)
                })

        }
        catch (err) {
            console.log(err)
        }

    }
    function Update() {
        try {

            const pp = document.querySelector("#pp").value ? document.querySelector("#pp").value : product.price
            const stock = document.querySelector("#stock").value ? document.querySelector("#stock").value : product.stock
            const title = document.querySelector("#title").value ? document.querySelector("#title").value : product.title
            const code = document.querySelector("#code").value ? document.querySelector("#code").value : product.code
            const desc = document.querySelector("#desc").value ? document.querySelector("#desc").value : product.desc
            const takhfif = document.querySelector("#takhfif").value ? document.querySelector("#takhfif").value : product.takhfif | 0
            const formData = new FormData()

            formData.append("price", pp)
            formData.append("stock", stock)
            formData.append("title", title)
            formData.append("code", code)
            formData.append("desc", desc)
            formData.append("takhfif", takhfif)
            console.log(formData)

            axios.put("https://api.balamala.ir/adminPanel/updateProduct/" + placeId, formData)

                .then(res => {
                    alert("با موفقیت اپدیت شد")
                    // window.location.assign("http://localhost:3001/")
                    console.log(res)

                })
                .catch((err) => {
                    console.log(err)
                })

        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <Container className={classes.root} maxWidth='lg'>
            <Grid className={classes.topGrid} container direction='row'>
                <Grid className={classes.slideGrid} item lg={5} xs={12}>
                    <Carousel
                        animation='slide'>
                        <div className={classes.itemRoot}> <img src={url + product.main} className={classes.image} alt={product.title} ></img></div>

                    </Carousel>
                </Grid>
                <Grid className={classes.detailsGrid} item lg={7} xs={12}>
                    <div style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', display: 'flex', borderBottom: '1px solid #E1E8EB' }}>
                        <div>
                            <Typography>{product.title}</Typography>
                            <Typography style={{ color: '#7F7C82' }} variant='h6'>کد محصول:{product.code}</Typography>
                        </div>
                        <div>
                            <Typography >{product.stock === 0 ? <Typography variant='h4' style={{ color: '#F05454' }}>اتمام موجودی</Typography> : Intl.NumberFormat('ar-EG').format(product.price) + ' تومان'}</Typography>
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
                    <div className={classes.countDiv}>
                        <Typography>تعداد:{product.stock}</Typography>


                    </div>

                    <div className={classes.buttonDiv}>

                        {/* <Button onClick={() => { addProduct(product, tedad) }} variant='contained' color='primary' className={classes.bagButton} >اضافه به سبد خرید</Button> */}
                        {/* <Button href='/sizeGuide' variant='contained' color='secondary' className={classes.favoritButton} >راهنمای استفاده</Button> */}
                    </div>


                </Grid>




            </Grid>

            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>آپدیت عکس اصلی</Typography>
                <input id="main" type='file' className={classes.MainInput} ></input>
                <Button onClick={UpdateMain} variant='contained' className={classes.MainButton}>آپلود عکس</Button>
            </Grid>

            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>آپدیت توضیحات   </Typography>
                <TextField id="desc"
                    label="توضیحات"
                    // placeholder="Placeholder"
                    multiline
                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>آپدیت نام و کد   </Typography>
                <TextField id="title"
                    label="نام"
                    placeholder="نام"
                    multiline

                    variant="standard" className={classes.MainInput} ></TextField>
                <TextField id="code"
                    label="کد"
                    placeholder="کد محصول"
                    multiline
                    variant="standard" className={classes.MainInput} ></TextField>
            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>آپدیت قیمت   </Typography>
                <TextField
                    id="pp"
                    label="قیمت"
                    placeholder="قیمت به تومان"
                    lang='en'
                    type='number'

                    variant="standard" className={classes.MainInput} ></TextField>
            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>آپدیت تعداد   </Typography>
                <TextField id="stock"
                    label="تعداد"
                    placeholder="تعداد"
                    multiline
                    lang='en'
                    type='number'
                    variant="standard" className={classes.MainInput} ></TextField>
            </Grid>
            <Grid className={classes.updateMain}>
                <Typography className={classes.mainTypo}>گذاشتن تخفیف   </Typography>
                <TextField id="takhfif"
                    label="قیمت با تخفیف"
                    placeholder="به تومان"
                    multiline
                    lang='en'
                    type='number'
                    variant="standard" className={classes.MainInput} ></TextField>

            </Grid>
            <div className={classes.UpdateDiv}>
                <Button onClick={Update} variant='contained' className={classes.MainButton}>آپدیت </Button>

            </div>
        </Container >
    )
}
