import { Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import useStyles from './ShopPeace.styles'
import { Tabs, Button, Link, Tab, Box, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import Item from '../../componenets/item/Item'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import { tabsClasses } from '@mui/material/Tabs'
import { ModalContext } from '../../contexts/ModalContext'
import suche from '../../assets/images/suche.png'

export default function Shop() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)
    const { addSort, sortPro } = useContext(ModalContext)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    // const [produ, setProdu] = useState([])
    const [data, setData] = useState([])

    const [page, setPage] = useState(1)


    const { sort } = useParams()

    const params = {
        code: localStorage.getItem('shop')
    }

    useEffect(() => {

        axios({
            url: (`https://api.balamala.ir/shopPro/` + sort + `?page=${page}`),
            params,
            method: "GET"
        })
            .then((response) => {
                const cc = response.data.reverse()

                return setData([...data, ...cc])


            }).catch((error) => {
                console.log(error)
            })



    }, [page])
    const url = 'https://api.balamala.ir/'
    const proUrl = '/product/'

    return (
        <Grid className={classes.rootShop2}>
            {localStorage.shop ? <Button variant='contained' className={classes.Hamisho2}>مارکت انتخابی:{localStorage.shopName}
                <Link onClick={() => {
                    localStorage.removeItem('shop')
                    localStorage.removeItem('shopName')
                    localStorage.removeItem('tokenShop')
                    window.location.assign('/')
                }} className={classes.Link} >

                    <Typography className={classes.typo3} >خرید از همه</Typography>
                </Link>
            </Button> : <></>}
            {/* <Grid className={classes.searchGrid}>
                <Button href={'/search'} className={classes.searchB} variant='contained'color='primary' >
                    جستجو پیشرفته
                    <img src={suche} style={{ width: 20,marginRight:6 }} />
                </Button>
            </Grid> */}
            <Grid className={classes.itemGrid}>
                <InfiniteScroll className={classes.InfiniteScroll}
                    dataLength={data.length}
                    next={() => setPage(page + 1)}
                    hasMore={true}
                    loader={<h4> جستجو بیشتر...</h4>}
                    endMessage={<h4> عدم موجودی بیشتر</h4>}
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        flexWrap: 'wrap',
                        display: 'flex',
                        justifyContent: 'center',
                    }} >
                        <Item  />
                        {data.map((item) => (
                            <Item href={`${proUrl}?place=${item._id}`} id={item._id} stock={item.stock} takhfif={item.takhfif} tedad={item.tedad ? item.tedad : ''} product={item} alt={item.title.length > 30 ? 'خرید ' + item.title : `خرید ${item.title} از مارکت  اینترنتی بالا مالا`} key={item._id} price={item.stock <= 0 ? <Typography variant='h6' style={{ color: '#F05454' }}>اتمام موجودی</Typography> : <Typography variant='h5'> {Intl.NumberFormat('ar-EG').format(item.price)}  تومان</Typography>} title={item.title} img={url + item.main} desc={item.desc} />
                        ))}
                    </div>
                </InfiniteScroll>

            </Grid>

        </Grid>

    )
}
