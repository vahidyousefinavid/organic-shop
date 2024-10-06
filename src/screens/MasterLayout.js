import { FormControl, Hidden, Typography, Link, Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import useStyles from './MasterLayout.styles'
import DesktopMenu from '../componenets/Menus/Desktop/index'
import MobileMenu from '../componenets/Menus/Mobile/index2'
import Footer from '../componenets/Footer'
import LoginModals from '../componenets/LoginModal/index'
import { CartContext } from '../contexts/CartContext'
import Box from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import baskety from '../assets/images/baskety.png'
import accounty from '../assets/images/accounty.png'
import homey from '../assets/images/homey.png'
import menuy from '../assets/images/menuy.png'
import { LoginContext } from '../contexts/LoginContext'
import { SIGNIN, SIGNUP, CATEGORY } from '../constants/ActionTypes'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import enamad from '../assets/images/enamad-logo.png'
import routes from '../Routes'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})


export default function MasterLayout() {
    const classes = useStyles()
    const { dispatch } = useContext(LoginContext)

    const { count } = useContext(CartContext)
    const actions = [
        { icon: <Link style={{ display: 'flex', color: '#545454' }} onClick={() => dispatch({ type: SIGNUP })}><img src={accounty} style={{ display: 'flex', width: 30 }} /> </Link>, name: <Typography style={{ width: 100, color: '#545454' }}>ورود و ثبت نام</Typography> },
        { icon: <Link style={{ display: 'flex', color: 'rgb(118, 118, 118)', position: 'relative' }} href={'/bag'}><img src={baskety} style={{ display: 'flex', width: 40 }} /><Typography style={{ position: 'absolute', top: 13, right: 15 }}>{count}</Typography></Link>, name: <Typography style={{ width: 70, color: '#545454' }}>سبد خرید</Typography> },
        { icon: <Link style={{ display: 'flex', color: 'rgb(118, 118, 118)' }} onClick={() => dispatch({ type: CATEGORY })} ><img src={menuy} style={{ display: 'flex', width: 27 }} /></Link>, name: <Typography style={{ width: 72, color: '#545454' }}>دسته بندی</Typography> },
        { icon: <Link style={{ display: 'flex', color: 'rgb(118, 118, 118)' }} href={'/'}><img src={homey} style={{ display: 'flex', width: 30 }} /></Link>, name: <Typography style={{ width: 82, color: '#545454' }}>صفحه اصلی</Typography> },
    ]


    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [openS, setOpenS] = React.useState(true)

    const handleClick = () => {
        setOpenS(true)
    }

    const handleCloseS = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenS(false)
    }

    const getRoutes = (routes) => {
        return routes.map((item) => {
            return <Route path={item.url} element={item.component} />
        })
        // return <Route path='/' element={<Main />} />
    }
    return (
        <BrowserRouter>
            <div className={classes.root} >
                <Hidden smDown>
                    <DesktopMenu />
                </Hidden>
                <Hidden mdUp>
                    <MobileMenu />
                </Hidden>
                <div className={classes.RouteDiv}>
                    <Routes>
                        <Route>
                            {getRoutes(routes)}
                            <Route path="*" element={<Navigate to={`/404`} />} />
                        </Route>
                    </Routes>
                </div>
            </div>
            {/* <div className={classes.mo} >
                <div className={classes.jk} >
                    <Link className={classes.lk} href='/bag'  >
                        <div className={classes.jh} ><Typography className={classes.fg}>{Intl.NumberFormat('ar-EG').format(3)}</Typography></div>
                        <Typography className={classes.llkh} >تایید و پرداخت</Typography>
                    </Link>
                    <Link className={classes.lk} href='/bag' >
                        <div className={classes.jh} ><Typography className={classes.fg}>{Intl.NumberFormat('ar-EG').format(2)}</Typography></div>
                        <Typography className={classes.llkh}>سبد خرید</Typography>
                    </Link>
                    <Link className={classes.lk} onClick={() => dispatch({ type: CATEGORY })} >
                        <div className={classes.jh}  ><Typography className={classes.fg}>{Intl.NumberFormat('ar-EG').format(1)}</Typography></div>
                        <Typography className={classes.llkh}>انتخاب محصولات</Typography>
                    </Link>
                </div>
            </div> */}
            <div className={classes.llop} >
                <img src={enamad} style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%'
                }} />
            </div>
            <Box className={classes.ggh} >
                <Backdrop open={open} />
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ position: 'absolute', bottom: 16, right: 16, zIndex: 1000 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <Footer />
            <LoginModals />
        </BrowserRouter >
    )

}