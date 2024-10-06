import React, { useContext, useState } from 'react'
import useStyles from './index.styles'
import menuIcon from '../../../assets/images/menu.svg'
import Logo from '../../../assets/images/123.png'
import ProfileButtom from '../Desktop/ProfileButtom'
import BagButtom from '../Desktop/BagButtom'
import { SwipeableDrawer, Typography, Button } from '@material-ui/core'
import MenuItem from './MenuItem'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import CssBaseline from '@material-ui/core/CssBaseline'
import Slide from '@material-ui/core/Slide'
import PropTypes from 'prop-types'
import basket from '../../../assets/images/basket.png'
import { LoginContext } from '../../../contexts/LoginContext'
import { CartContext } from '../../../contexts/CartContext'
import menu from '../../../assets/images/menu2.png'
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
    const [open, setOpen] = useState(false)
    const toggleOpenMenu = () => {
        setOpen(!open)
    }
    const { dispatch } = useContext(LoginContext)
    const { count } = useContext(CartContext)

    return (
        <div className={classes.root} >

            <HideOnScroll >
                <div className={classes.mainmenu}  >

                    <div className={classes.logoMenu} onClick={toggleOpenMenu} >

                        <div className={classes.button}  ><Button className={classes.btmenu} ><img src={menu} className={classes.menu}></img><Typography variant='h4' className={classes.typoMenu}>دسته بندی</Typography></Button></div>
                    </div>

                    <div className={classes.logoDiv} >
                        <a href='/'>
                            <img src={Logo} alt='فروشگاه اینترنتی بالا مالا' className={classes.logoImg} ></img>
                        </a>
                    </div>

                    <div className={classes.bagDiv} >
                        <ProfileButtom />
                        <div className={classes.button}><Button href='/bag' className={classes.btmenu} ><img alt='سبد خرید' src={basket} className={classes.bagy}></img><typography className={classes.typo2}>{Intl.NumberFormat('ar-EG').format(count)}</typography><typography variant='h6' className={classes.typo3}>سبد خرید</typography></Button></div>
                    </div>
                    <SwipeableDrawer onOpen={toggleOpenMenu} onClose={toggleOpenMenu} open={open} >
                        <MenuItem />
                    </SwipeableDrawer>

                </div>
            </HideOnScroll>
            <HideOnScroll>
                <div className={classes.topmenu}>
                    <Typography className={classes.TypoClass} variant='h5'>
                        سوپر مارکتی محل رو انتخاب کن و از تخفیف بهره مند شو
                    </Typography>
                </div>

            </HideOnScroll>
        </div >
    )
}
