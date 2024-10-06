import { Button, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState, useContext } from 'react'
import useStyles from './userPanel.styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { getTranslate, changeLanguage, lang } from '../../assets/localization/index'
import HomeScreen from './userPanel/homeScreen'
import AboutScreen from './userPanel/aboutScreen'
import ResumeScreen from './userPanel/resumeScreen'
import PortfoliosScreen from './userPanel/portfoliosScreen'
import ContactScreen from './userPanel/contactScreen'
import CodeMoaref from './CodeMoaref'
import Box from '@mui/material/Box'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import { LoginContext } from '../../contexts/LoginContext'
import { EXIT } from '../../constants/ActionTypes'

export default function UserPanel(props) {



    const classes = useStyles()
    const { dispatch } = useContext(LoginContext)

    const { window } = props
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [page, setPage] = useState(0)
    const translate = getTranslate()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }



    const container = window !== undefined ? () => window().document.body : undefined
    const getPage = () => {
        switch (page) {
            case 0:
                return <HomeScreen />
            case 1:
                return <AboutScreen />
            case 2:
                return <ResumeScreen />
            case 3:
                return <PortfoliosScreen />
            case 4:
                return <ContactScreen />
            case 5:
                return <CodeMoaref />
            default:
                return <HomeScreen />
        }
    }

    // const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setPage(newValue)
    }

    const Puller = styled(Box)(({ theme }) => ({
        width: 30,
        height: 6,
        backgroundColor: theme.palette.mode === 'light' ? '#111' : grey[900],
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        left: 'calc(50% - 15px)',
    }))



    return (
        <Grid className={classes.root} >


            <Hidden smDown>
                <Grid lg={3} sm={3} className={classes.right} >

                    <div className={classes.centerDrawer}>
                        <List style={{ width: "100%" }}>

                            <ListItem className={page === 0 ? null : "listItem"} style={{ backgroundColor: page === 0 ? "#037fff" : "transparent", paddingLeft: 0, paddingRight: 0 }}
                                onClick={() => { setPage(0); setMobileOpen(false) }} button >
                                <ListItemText disableTypography={true}
                                    children={<Typography className="listItemText" style={{ color: page === 0 ? "#FFF" : "#a4acc4" }} variant="body2">مشخصات</Typography>} />
                                <div className="overlay" />
                            </ListItem>
                            <ListItem className={page === 1 ? null : "listItem"} style={{ backgroundColor: page === 1 ? "#037fff" : "transparent", paddingLeft: 0, paddingRight: 0 }}
                                onClick={() => { setPage(1); setMobileOpen(false) }} button >
                                <ListItemText disableTypography={true}
                                    children={<Typography className="listItemText" style={{ color: page === 1 ? "#FFF" : "#a4acc4" }} variant="body2">آدرس</Typography>} />
                                <div className="overlay" />

                            </ListItem>
                            <ListItem className={page === 2 ? null : "listItem"} style={{ backgroundColor: page === 2 ? "#037fff" : "transparent", paddingLeft: 0, paddingRight: 0 }}
                                onClick={() => { setPage(2); setMobileOpen(false) }} button >
                                <ListItemText disableTypography={true}
                                    children={<Typography className="listItemText" style={{ color: page === 2 ? "#FFF" : "#a4acc4" }} variant="body2">سفارشات</Typography>} />
                                <div className="overlay" />
                            </ListItem>
                            <ListItem className={page === 3 ? null : "listItem"} style={{ backgroundColor: page === 3 ? "#037fff" : "transparent", paddingLeft: 0, paddingRight: 0 }}
                                onClick={() => { setPage(3); setMobileOpen(false) }} button >
                                <ListItemText disableTypography={true}
                                    children={<Typography className="listItemText" style={{ color: page === 3 ? "#FFF" : "#a4acc4" }} variant="body2">تغییر رمز عبور</Typography>} />
                                <div className="overlay" />
                            </ListItem>
                            <ListItem className={page === 4 ? null : "listItem"} style={{ backgroundColor: page === 4 ? "#037fff" : "transparent", paddingLeft: 0, paddingRight: 0 }}
                                onClick={() => { setPage(4); setMobileOpen(false) }} button >
                                <ListItemText disableTypography={true}
                                    children={<Typography className="listItemText" style={{ color: page === 4 ? "#FFF" : "#a4acc4" }} variant="body2">ارتباط با ما</Typography>} />
                                <div className="overlay" />
                            </ListItem>
                            <ListItem className={page === 5 ? null : "listItem"} style={{ backgroundColor: page === 5 ? "#037fff" : "transparent", paddingLeft: 0, paddingRight: 0 }}
                                onClick={() => { setPage(5); setMobileOpen(false) }} button >
                                <ListItemText disableTypography={true}
                                    children={<Typography className="listItemText" style={{ color: page === 5 ? "#FFF" : "#a4acc4" }} variant="body2">دریافت کد معرف</Typography>} />
                                <div className="overlay" />
                            </ListItem>
                            <ListItem className={page === 6 ? null : "listItem"} style={{ backgroundColor: page === 6 ? "#037fff" : "transparent", paddingLeft: 0, paddingRight: 0 }}
                                onClick={() => dispatch({ type: EXIT })} button >
                                <ListItemText disableTypography={true}
                                    children={<Typography className="listItemText" style={{ color: page === 6 ? "#FFF" : "#a4acc4" }} variant="body2">خروج از حساب</Typography>} />
                                <div className="overlay" />
                            </ListItem>
                        </List>
                    </div>


                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid className={classes.drawer}>
                    <Puller />
                    <Box
                        sx={{
                            flexGrow: 1,
                            width: '100%',
                            bgcolor: 'transparent',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Tabs
                            value={page}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                        >
                            <Tab style={{ fontFamily: 'IRANSans' }} onClick={() => { setPage(0); setMobileOpen(false); dispatch({ type: 'closeAll' }) }} label="مشخصات" />
                            <Tab style={{ fontFamily: 'IRANSans' }} onClick={() => { setPage(1); setMobileOpen(false); dispatch({ type: 'closeAll' }) }} label="آدرس" />
                            <Tab style={{ fontFamily: 'IRANSans' }} onClick={() => { setPage(2); setMobileOpen(false); dispatch({ type: 'closeAll' }) }} label="سفارشات" />
                            <Tab style={{ fontFamily: 'IRANSans' }} onClick={() => { setPage(3); setMobileOpen(false); dispatch({ type: 'closeAll' }) }} label="تغییر رمز عبور" />
                            <Tab style={{ fontFamily: 'IRANSans' }} onClick={() => { setPage(4); setMobileOpen(false); dispatch({ type: 'closeAll' }) }} label="ارتباط با ما" />
                            <Tab style={{ fontFamily: 'IRANSans' }} onClick={() => { setPage(5); setMobileOpen(false); dispatch({ type: 'closeAll' }) }} label="دریافت کد معرف" />
                            <Tab style={{ fontFamily: 'IRANSans' }} onClick={() => { setPage(6); setMobileOpen(false); dispatch({ type: EXIT }) }} label="خروج" />

                        </Tabs>

                    </Box>
                </Grid>
            </Hidden>
            <Grid lg={9} sm={12} className={classes.left} >
                <div className={classes.toolbar} />
                {getPage()}
            </Grid>

        </Grid>
    )



}
