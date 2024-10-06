import { Button, Grid, Link, Typography } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import useStyles from './search.styles'
import { Tabs, Tab, TextField, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import Item from '../../componenets/item/Item'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CartContext } from '../../contexts/CartContext'
import { Autocomplete, Stack } from '@mui/material'
import { Box } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress';
import suche from '../../assets/images/suche.png'
import { LoginContext } from '../../contexts/LoginContext'
import { SHOP } from '../../constants/ActionTypes'
import shop from '../../assets/images/shop.png'
import ItemTop from '../../componenets/item/ItemTop'
export default function Search() {
    const classes = useStyles()
    const { dispatch } = useContext(LoginContext)
    const [value, setValue] = React.useState(0)
    const { search, searching } = useContext(CartContext)
   
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const [jsonResult, setJsonResult] = useState([])
    const [open, setOpen] = React.useState(false);
    const loading = open && jsonResult.length === 0;




    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }
        axios.get("https://api.balamala.ir/getsearch")
            .then((res) => setJsonResult(res.data))
        return () => {
            active = false;
        };

    }, [loading])
    //  console.log(search);
    useEffect(() => {
        if (!open) {
            setJsonResult([]);
        }
    }, [open]);

    const [data, setData] = useState([])

    const [page, setPage] = useState(1)






    const { labaniat } = useParams()
    const params = {
        title: localStorage.search,
        code: localStorage.shop ? localStorage.shop : '2'
    }

    useEffect(() => {

        axios({
            url: (`https://api.balamala.ir/search` + `?page=${page}`),
            params,
            method: "GET"
        })
            .then((response) => {
                const cc = response.data.reverse()
                return setData(cc)


            }).catch((error) => {
                console.log(error)
            })



    }, [search])
    const url = 'https://api.balamala.ir/'
    const proUrl = '/product/'

    return (
        <Grid className={classes.rootShop2}>
            <Typography variant='h1' style={{display:'none'}} >جستجو محصولات سوپر مارکت</Typography>
             {/* <Button onClick={() => dispatch({ type: SHOP })} variant='contained' className={classes.Hamisho}># مارکت محل شما
                <img src={shop} alt='سوپر مارکت اینترنتی' className={classes.imgHamisho} ></img>
      </Button> */}
            {localStorage.shop ? <Button variant='contained' className={classes.Hamisho2}>مارکت انتخابی:{localStorage.shopName}
                <Link onClick={() => {
                    localStorage.removeItem('shop')
                    localStorage.removeItem('shopName')
                    localStorage.removeItem('tokenShop')
                   window.location.reload()
                }} className={classes.Link} >

                    <Typography className={classes.typo3} >خرید از همه</Typography>
                </Link>
            </Button> : <></>}
            <Stack className={classes.kkiou}></Stack>
            {/* <Autocomplete
                id="searchproduct"
                getOptionLabel={(jsonResult) => `${jsonResult.title}`}
                options={jsonResult}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);

                }}
                onChange={(event, value) => {
                    if (value != null) {
                        searching(value.title)
                        // window.location.assign('http://localhost:3000/search')
                    }
                }


                }
               
                loading={loading}
                className={classes.jhyu}
                isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                }
                noOptionsText={'همچنین محصولی وجود ندارد'}
                renderOption={(props, jsonResult) => (

                    <Box component="li" {...props} key={jsonResult._id} style={{fontFamily:'IRANSans'}}>

                        {jsonResult.title}
                    </Box>

                )}
                renderInput={(params) => <TextField
                    className={classes.llkj}
                    id='kkjhh'
                    {...params}
                    label="دنبال چه محصولی هستید؟"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment >
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                                <img src={suche} style={{ width: 20, display: 'flex' }} ></img>
                            </React.Fragment>

                        ),
                    }}

                > </TextField>
                }
            /> */}
            <Grid className={classes.itemGrid}>
                <InfiniteScroll className={classes.InfiniteScroll}
                    dataLength={data.length}
                    next={() => setPage(page + 1)}
                    hasMore={true}
                    // loader={<h4> جستجو بیشتر...</h4>}
                    endMessage={<h4> عدم موجودی بیشتر</h4>}
                style={{overflow:'revert'}}
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
            </Grid>

        </Grid>

    )
}