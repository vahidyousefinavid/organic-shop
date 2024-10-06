import React, { useContext, useState, useEffect } from 'react'
import useStyles from './index.styles2'
import menuIcon from '../../../assets/images/menu.svg'
import Logo from '../../../assets/images/logo.svg'
import ProfileButtom from '../Desktop/ProfileButtom'
import BagButtom from '../Desktop/BagButtom'
import { SwipeableDrawer, Typography, Button, TextField } from '@material-ui/core'
import MenuItem from './MenuItem'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import CssBaseline from '@material-ui/core/CssBaseline'
import Slide from '@material-ui/core/Slide'
import PropTypes from 'prop-types'
import basket from '../../../assets/images/basket.png'
import { LoginContext } from '../../../contexts/LoginContext'
import { CartContext } from '../../../contexts/CartContext'
import menu from '../../../assets/images/menu2.png'
import { Autocomplete, Stack } from '@mui/material'
import axios from 'axios'
import { Box } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress';
import Menu from '@material-ui/icons/Menu'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom'

function HideOnScroll(props) {

    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined })

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
}


export default function Mobile() {
    const classes = useStyles()
    const [drow, setDrow] = useState(false)
    const toggleOpenMenu = () => {
        setDrow(!drow)
    }
    const { dispatch } = useContext(LoginContext)
    const { count } = useContext(CartContext)
    const { searching, search } = useContext(CartContext)
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
    return (
        <div className={classes.root} >

            <HideOnScroll >
                <div className={classes.mainmenu}  >
                    <div className={classes.logoMenu} onClick={toggleOpenMenu} >
                        <div className={classes.button}  ><Button className={classes.btmenu} ><Menu style={{
                            color: '#111'
                        }} /></Button></div>
                    </div>
                    <div className={classes.logoDiv} >
                        <a href='/'>
                            <img src={Logo} alt='فروشگاه اینترنتی بالا مالا' className={classes.logoImg} ></img>
                        </a>
                    </div>

                    <div className={classes.bagDiv} >
                        <ProfileButtom />
                            <Link to='/bag' className={classes.btmenu} >
                                <ShoppingCartCheckoutIcon style={{ color: '#111' }} />
                                <Typography style={{
                                    fontSize:12
                                }}>سبد خرید</Typography>
                            </Link>
                    </div>
                    <SwipeableDrawer onOpen={toggleOpenMenu} onClose={toggleOpenMenu} open={drow} >
                        <MenuItem />
                    </SwipeableDrawer>
                </div>
            </HideOnScroll>
            <HideOnScroll>
                <div className={classes.middle}>
                    <Autocomplete
                        size="small"
                        // value={Value}
                        // onChange={onChange}
                        // onKeyDown={onKeyDown}
                        select
                        loading
                        // disabled={disabled}
                        loadingText={<Typography variant='h5'>در حال پردازش ...</Typography>}
                        noOptionsText={'پیدا نشد'}
                        placeholder='جستجو کنید ...'
                        // onOpen={() => {
                        //     fillBasicData()
                        // }}
                        // getOptionLabel={(dataTerminology) => `${getOptionLabel ? dataTerminology[getOptionLabel] : dataTerminology.Title}`}
                        options={[]}
                        sx={{
                            width: '100%',
                            zIndex: 1,
                            borderRadius: 1,
                            background: '#e9e9e9',
                            '& .MuiInput-underline:before': {
                                borderBottom: 'none'
                            },
                        }}
                        // renderInput={(params) => <TextField {...params} label="Controllable" />}

                        renderInput={(params) => <TextField
                            {...params}
                            // id={id}
                            // label={label}
                            dir='rtl'
                            placeholder='جستجو کنید ...'
                            // type={type}
                            // value={value}
                            // onChange={onChange}
                            sx={{
                                // borderRadius: 30,
                                display: 'flex',
                                width: '100%',
                                borderBottom: 'none',
                                '& .MuiInputBase-root': {
                                    height: '40px !important',
                                    textAlign: 'center',
                                    width: '100%',
                                    // borderRadius: 30,
                                    // background:'red',
                                    borderBottom: 'none'
                                },
                                '& .MuiInputBase-input': {
                                    textAlign: 'right',
                                    padding: '0px 35px !important',
                                    fontSize: 12,
                                    borderBottom: 'none'

                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    textAlign: 'right',
                                    // borderRadius: 2,
                                    fontSize: '1px',
                                    border: 'none',
                                    borderBottom: 'none'
                                },
                                '& .MuiInputLabel-root': {
                                    left: 'none !important',
                                    flexDirection: 'row-reverse',
                                    zIndex: -1,
                                    opacity: 0,
                                    fontSize: '16px !important',
                                    paddingLeft: 3,
                                    borderBottom: 'none'
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottom: 'none'
                                },
                                ':before': {
                                    content: "''",
                                    position: 'absolute',
                                    width: '100%',
                                    bottom: 0,
                                    backgroundColor: '#e9e9e9',
                                    borderRadius: '0.5rem',
                                    borderBottom: 'none'
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        }
                    />
                </div>
            </HideOnScroll>
        </div >
    )
}
