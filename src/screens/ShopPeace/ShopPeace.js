import { Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from './ShopPeace.styles'
import { Tabs, Tab, Box,Button, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import Item from '../../componenets/item/Item'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import suche from '../../assets/images/suche.png'
import ItemTop from '../../componenets/item/ItemTop'

export default function ShopPeace() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    // const [produ, setProdu] = useState([])
    const [data, setData] = useState([])

    const [page, setPage] = useState(1)

    const params = {
        code: '2'
    }




    const { labaniat } = useParams()


    useEffect(() => {

        axios({
            url: (`https://api.balamala.ir/shop/` + labaniat + `?page=${page}`),
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
        <Grid className={classes.rootShop}>

            <Grid className={classes.itemGrid}>
            {/* <Grid className={classes.searchGrid}>
                <Button href={'/search'} className={classes.searchB} variant='contained'color='primary' >
                    جستجو پیشرفته
                    <img src={suche} style={{ width: 20,marginRight:6 }} />
                </Button>
              
   
            </Grid> */}
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
                        {data.map((item) => (

                            <ItemTop href={`${proUrl}?place=${item._id}`} id={item._id} stock={item.stock} takhfif={item.takhfif} tedad={item.tedad ? item.tedad : ''} product={item} alt={item.title.length > 30 ? 'خرید ' + item.title : `خرید ${item.title} از مارکت  اینترنتی بالا مالا`} key={item._id} price={item.stock <= 0 ? <Typography variant='h6' style={{ color: '#F05454' }}>اتمام موجودی</Typography> : <Typography variant='h5'> {Intl.NumberFormat('ar-EG').format(item.price)}  تومان</Typography>} title={item.title} img={url + item.main} desc={item.desc} />




                        ))}
                    </div>
                </InfiniteScroll>
                {/* <ItemTop></ItemTop> */}
            </Grid>

        </Grid>

    )
}
