import { Grid, Typography, Button } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import useStyles from './ProductListStore.styles'
import { Tabs, Tab, Box, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import Item from '../../../componenets/item/Item'
import ItemShop from '../../../componenets/item/ItemShop'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LoginContext } from '../../../contexts/LoginContext'
import { FILTERSHOP } from '../../../constants/ActionTypes'
import { CartContext } from '../../../contexts/CartContext'

export default function ProductListStore() {

    const classes = useStyles()
    const [value, setValue] = React.useState(0)
    const { dispatch } = useContext(LoginContext)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const { filterS } = useContext(CartContext)
    console.log(filterS);
    // const [produ, setProdu] = useState([])
    const [data, setData] = useState([])
    const [base, setBase] = useState([])
    const [page, setPage] = useState(1)

    const [category, setCategory] = useState()

    const { param } = useParams()
    const params = {

        token: localStorage.getItem('tokenShop'),

    }


    useEffect(() => {

        axios({
            url: (`https://api.balamala.ir/store/productlist`),
            params,
            method: "GET"
        })
            .then((response) => {

                const cc = response.data[1].reverse()

                setData([...cc])
                setBase([...cc])

            }).catch((error) => {
                console.log(error)
            })



    }, [])
    useEffect(() => {

      
        if (filterS == 'dairy') {
            const newData = base.filter((item) => item.sort == 'dairy')
            setData(newData)
        }
        if (filterS == 'beverages') {
            const newData = base.filter((item) => item.sort == 'beverages')
            setData(newData)
        }
        if (filterS == 'ready-food') {
            const newData = base.filter((item) => item.sort == 'ready-food')
            setData(newData)
        }
        if (filterS == 'junk-food') {
            const newData = base.filter((item) => item.sort == 'junk-food')
            setData(newData)
        }
        if (filterS == 'flavor') {
            const newData = base.filter((item) => item.sort == 'flavor')
            setData(newData)
        }
        if (filterS == 'health') {
            const newData = base.filter((item) => item.sort == 'health')
            setData(newData)
        }
        if (filterS == 'breakfast') {
            const newData = base.filter((item) => item.sort == 'breakfast')
            setData(newData)
        }
        if (filterS == 'nuts') {
            const newData = base.filter((item) => item.sort == 'nuts')
            setData(newData)
        }
        if (filterS == 'baby') {
            const newData = base.filter((item) => item.sort == 'baby')
            setData(newData)
        }
        if (filterS == 'food-bread') {
            const newData = base.filter((item) => item.sort == 'food-bread')
            setData(newData)
        }
        if (filterS == 'protein') {
            const newData = base.filter((item) => item.sort == 'protein')
            setData(newData)
        }
        if (filterS == 'washer') {
            const newData = base.filter((item) => item.sort == 'washer')
            setData(newData)
        }
        if (filterS == 'all') {

            setData(base)
        }

    }, [filterS])
    const url = 'https://api.balamala.ir/'
    const proUrl = '/panel/updateDetils'

    console.log(data)
    return (
        <Grid className={classes.rootShop}>
            <Button onClick={() => dispatch({ type: FILTERSHOP })} variant='contained' className={classes.Hamisho}> دسته بندی
                {/* <img src={shop} alt='سوپر مارکت اینترنتی' className={classes.imgHamisho} ></img> */}
            </Button>
            <Grid className={classes.itemGrid}>
                {/* <InfiniteScroll className={classes.InfiniteScroll}
                    dataLength={data.length}
                    next={() => setPage(page + 1)}
                    hasMore={true}
                    loader={<h4> جستجو بیشتر...</h4>}
                    endMessage={<h4> عدم موجودی بیشتر</h4>}
                > */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    flexWrap: 'wrap',
                    display: 'flex',
                    justifyContent: 'center',

                }} >
                    {data.map((item) => (

                        <ItemShop product={item} id={item._id} alt={item.title + item.code} takhfif={item.takhfif} key={item._id} price={item.stock === 0 ? <Typography variant='h6' style={{ color: '#F05454' }}>اتمام موجودی</Typography > : <Typography variant='h5'>{Intl.NumberFormat('ar-EG').format(item.price) + 'تومان'}</Typography>} title={item.title} img={url + item.main} desc={item.desc} />

                    ))}
                </div>

                {/* </InfiniteScroll> */}

            </Grid>

        </Grid>

    )
}
