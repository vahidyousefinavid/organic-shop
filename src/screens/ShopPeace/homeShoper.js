import { Button, Grid, Typography, Link } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './index.styles'
import GifHome from '../../assets/images/shooferi.png'
import hourssupport from '../../assets/images/24.png'
import running from '../../assets/images/delivery-truck.png'
import truck2 from '../../assets/images/jik.jpg'
import dd from '../../assets/images/box.png'
import dairy from '../../assets/images/dairy.png'
import drink from '../../assets/images/drink.png'
import konser from '../../assets/images/konser.png'
import sob from '../../assets/images/sob.png'
import cha from '../../assets/images/cha.png'
import ara from '../../assets/images/ara.png'
import sobh from '../../assets/images/sobh.png'
import khosh from '../../assets/images/khosh.png'
import koo from '../../assets/images/koo.png'
import khar from '../../assets/images/khar.png'
import flash from '../../assets/images/flash.png'
import up from '../../assets/images/up.png'
import pro from '../../assets/images/pro.png'
import dast from '../../assets/images/dast.png'
import donation from '../../assets/images/donation.png'
import country from '../../assets/images/country.svg'
import shop from '../../assets/images/shop.png'
import { LoginContext } from '../../contexts/LoginContext'
import { SHOP } from '../../constants/ActionTypes'
import suche from '../../assets/images/suche.png'
export default function HomeShoper() {
    const classes = useStyles()
    const { dispatch } = useContext(LoginContext)


    return (
        <Grid className={classes.root}>
            <Button onClick={() => dispatch({ type: SHOP })} variant='contained' className={classes.Hamisho}># مارکت محل شما
                <img src={shop} alt='سوپر مارکت اینترنتی' className={classes.imgHamisho} ></img>
            </Button>
            {localStorage.shop ? <Button variant='contained' className={classes.Hamisho2}>مارکت انتخابی:{localStorage.shopName}
                <Link onClick={() => {
                    localStorage.removeItem('shop')
                    localStorage.removeItem('shopName')
                    localStorage.removeItem('tokenShop')
                    window.location.assign('/')
                }} className={classes.Link} >

                    <Typography className={classes.typo3} variant='h5' >خرید از همه</Typography>
                </Link>
            </Button> : <></>}
            {/* <Grid className={classes.upGrid}> */}
            {/* <Grid className={classes.rightGrid} lg={6} md={6}>
                    <img alt='مجموعه فروشگاهی بالا مالا' className={classes.poster} src={truck2}></img>
                </Grid> */}
            {/* <Grid className={classes.leftGrid} lg={6} md={6}> */}
            {/* <Typography variant='h1'> تو بالا مالا هیچ قیمتی بالا نیست </Typography>

                    <Typography style={{ textAlign: 'center', marginTop: 18 }} variant='h5'>فروشگاه اینترنتی بالا مالا شما را در داشتن خریدی لذت بخش کمک می کند.</Typography> */}
            {/* <Grid className={classes.buttonGrid}>
                        <Button variant='contained' style={{ backgroundColor: '#06f', color: '#fff', marginLeft: 9, fontSize: 15, height: 46, padding: '0px 21px', borderRadius: 6 }}>نقشه ترانزیتی</Button>
                        <Button href='/piece' variant='contained' style={{ backgroundColor: '#06f', color: '#fff', marginLeft: 9, fontSize: 15, height: 46, padding: '0px 21px', borderRadius: 6 }}>قطعات</Button>
                    </Grid> */}
            {/* </Grid> */}
            {/* </Grid> */}
            <Grid className={classes.searchGrid}>
                <Button href={'/search'} className={classes.searchB} variant='contained'color='primary' >
                    جستجو پیشرفته
                    <img src={suche} style={{ width: 20,marginRight:6 }} />
                </Button>
              
   
            </Grid>
            <Grid container className={classes.downGrid}>
                <Link href="/shopPro/dairy" className={classes.jss1} style={{ textDecoration: 'none' }}>

                    <img alt='لبنیات(بالا مالا)' className={classes.img} src={dairy}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>لبنیات</Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}

                </Link>
                <Link href="/shopPro/beverages" className={classes.jss1} style={{ textDecoration: 'none' }}>

                    <img alt='نوشیدنی(بالا مالا)' className={classes.img} src={drink}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>نوشیدنی</Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}

                </Link>
                <Link href="/shopPro/ready-food" className={classes.jss1} style={{ textDecoration: 'none' }}>
                    <img alt='غذای آماده(بالا مالا)' className={classes.img} src={konser}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>کنسرو،غذای آماده و منجمد</Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>
                <Link href="/shopPro/junk-food" className={classes.jss1} style={{ textDecoration: 'none' }}>
                    <img alt='تنقلات(بالا مالا)' className={classes.img} src={sob}></img>
                    <img alt='تخفیف در بالا مالا' src={flash} className={classes.flash}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>تنقلات </Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>

                <Link href="/shopPro/flavor" className={classes.jss1} style={{ textDecoration: 'none' }}>
                    <img alt='چاشنی و افزودنی (بالا مالا)' className={classes.img} src={cha}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>چاشنی و افزودنی ها </Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>

                <Link href="/shopPro/health" className={classes.jss1} style={{ textDecoration: 'none' }}>
                    <img alt='آرایشی بهداشتی(بالا مالا)' className={classes.img} src={ara}></img>
                    <img alt='تخفیفات بالا مالا' src={flash} className={classes.flash}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>آرایشی و بهداشتی </Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>
                <Link href="/shopPro/breakfast" className={classes.jss1} style={{ textDecoration: 'none' }}>
                    <img alt='صبحانه (بالا مالا)' className={classes.img} src={sobh}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>صبحانه </Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>
                <Link href="/shopPro/nuts" className={classes.jss1} style={{ textDecoration: 'none' }}>
                    <img alt='خشکبار دسر و شیرینی (بالا مالا)' className={classes.img} src={khosh}></img>
                    <img alt='تخفیفات فراوان' src={flash} className={classes.flash}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>خشکبار، دسر و شیرینی </Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>

                <Link href="/shopPro/baby" className={classes.jss1} style={{ textDecoration: 'none' }}>

                    <img alt='کودک و نوزاد(بالا مالا)' className={classes.img} src={koo}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>کودک و نوزاد </Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>
                <Link href="/shopPro/food-bread" className={classes.jss1} style={{ textDecoration: 'none' }}>

                    <img alt='خواربار و نان (بالا مالا)' className={classes.img} src={khar}></img>
                    <img alt='تخفیف' src={flash} className={classes.flash}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>خواربار و نان</Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>

                <Link href="/shopPro/protein" className={classes.jss1} style={{ textDecoration: 'none' }}>
                    <img alt='مواد پروتئینی(بالا مالا)' className={classes.img} src={pro}></img>
                    <img alt='تخفیف' src={flash} className={classes.flash}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>مواد پروتئینی</Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>
                <Link href="/shopPro/washer" className={classes.jss1} style={{ textDecoration: 'none' }}>
                    <img alt='دستمال و شوینده(بالا مالا)' className={classes.img} src={dast}></img>
                    <img alt='تخفیف فروشگاه' src={flash} className={classes.flash}></img>
                    <img alt='بالا مالا' src={up} className={classes.down}></img>
                    <Typography variant='h4' style={{ color: '#111', marginTop: 15, textAlign: 'center' }}>دستمال و شوینده</Typography>
                    {/* <Typography className={classes.typo1}>بامجی با داشتن چندین سال سابقه و تجربه در پیمانکاری  امور ساختمانی میتواند خدمات خوبی را به شما شهروندان عزیز ارائه دهد.</Typography> */}
                </Link>

            </Grid>
            {/* <Grid className={classes.downGrid2}>
                <Grid className={classes.underGrid}>
                    <img alt='بالا مالا' className={classes.img2} src={GifHome}></img>
                    <Typography className={classes.typo2} variant='h4'>مجموعه ما</Typography>
                    <Typography className={classes.typo1}>ما در مجموعه بالا مالا تمامی تلاش خود را می کنیم تا بهترین خدمات را به شما ارائه دهیم تا شما آسودگی خاطر را تجربه کنید.</Typography> */}
            {/* <Button style={{ backgroundColor: '#06f', color: '#fff', marginLeft: 9, fontSize: 15, height: 46, padding: '0px 21px', borderRadius: 6 }} variant='contained'>بزن بریم</Button> */}
            {/* </Grid>

            </Grid> */}
            <Grid className={classes.downGrid2}>
                <Grid className={classes.underGrid}>
                    <img alt='بالا مالا' className={classes.img2} src={country}></img>
                    <Typography className={classes.typo2} variant='h4'>بزودی در شهر شما</Typography>
                    <Typography className={classes.typo1}>بالا مالا فعالیت خود را از استان همدان شروع کرده و امیدواریم خدمات خود را در سراسر کشور عزیزمان گسترش دهیم.</Typography>
                    {/* <Button style={{ backgroundColor: '#06f', color: '#fff', marginLeft: 9, fontSize: 15, height: 46, padding: '0px 21px', borderRadius: 6 }} variant='contained'>بزن بریم</Button> */}
                </Grid>

            </Grid>
            <Grid className={classes.downGrid3}>
                <Grid className={classes.jss3} lg={4} md={3} sm={3} xs={12}>
                    <img alt='پشتیبانی 24 ساعته در بالا مالا' className={classes.img3} src={hourssupport}></img>
                    <Typography className={classes.typo1}>پشتیبانی 24 ساعته</Typography>
                </Grid>
                <Grid className={classes.jss3} lg={4} md={3} sm={3} xs={12}>
                    <img className={classes.img3} src={dd}></img>
                    <Typography className={classes.typo1}>خرید مطمئن</Typography>
                </Grid>
                <Grid className={classes.jss3} lg={4} md={3} sm={3} xs={12}>
                    <img alt='تحویل سریع' className={classes.img3} src={running}></img>
                    <Typography className={classes.typo1}>تحویل سریع</Typography>
                </Grid>
            </Grid>
            {/* <div className={classes.Sabad}><Typography className={classes.SabadTypo}>سبد خرید</Typography></div> */}


        </Grid>

    )
}