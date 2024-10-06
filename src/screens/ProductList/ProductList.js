import { Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from './ProductList.styles'
import { Tabs, Tab, Box, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import Item from '../../componenets/item/ItemUpdate'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'


export default function ProductList() {

    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    // const [produ, setProdu] = useState([])
    const [data, setData] = useState([])

    const [page, setPage] = useState(1)
   



    const { khavar813 } = useParams()
    const params = { shoper: 'hamedan' }
   
    useEffect(() => {

        axios({
            url: (`https://api.balamala.ir/panel/productList` + `?page=${page}`),
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
    const proUrl = '/panel/updateDetils'

    console.log(data.lenght)

    return (
        <Grid className={classes.rootShop}>
          
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
                        {data.map((item) => (

                            <Item href={`${proUrl}?place=${item._id}`} id={item._id} alt={item.title + item.code} takhfif={item.takhfif} key={item._id} price={item.stock === 0 ? <Typography variant='h6' style={{ color: '#F05454' }}>اتمام موجودی</Typography > : <Typography variant='h5'>{Intl.NumberFormat('ar-EG').format(item.price) + 'تومان'}</Typography>} title={item.title} img={url + item.main} desc={item.desc} />




                        ))}
                    </div>
                </InfiniteScroll>
            </Grid>

        </Grid>

    )
}
