import React from 'react'
import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        position: 'fixed',
        zIndex: 1000,


    },
    mainmenu: {
        width: '100%',
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 55,
        justifyContent: 'space-between',
        // position: 'fixed',
        zIndex: 1000,
        top: 0,
        // boxShadow: '5px 2px 7px -4px',
        // borderBottom: 'solid 0.3px #fff'
    },
    topmenu: {
        // height: 36,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        // position: 'fixed',
        display: 'flex',
        zIndex: 1000,
        color: '#111',
        justifyContent: 'center',
        padding: 3,
        boxShadow: '5px 2px 7px -4px',
    },
    logoMenu: {
        height: 48,
        // width: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        flexDirection: 'row',
        borderRadius: 3,
        // boxShadow: " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; ",


    },
    imgMenu: {
        width: 24,
        height: 24
    },
    logoDiv: {
        height: 58,
        // width: 58,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImg: {
        // height: '100%',
        width: 130,
        borderRadius: 9,
        marginTop: 6,
        [theme.breakpoints.down('410')]: {
            width: 110,

        },
    },
    bagDiv: {
        height: 58,
        // width: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 1
    },
    bagy: {
        width: 25,
        marginLeft: 9
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        transition: '0.3s',
        flexDirection: 'row',

        "&:hover ": {


            transition: 'all 0.3s ease-in-out',
            backgroundColor: '#418dff',
            transition: '0.3s',

        },


    },
    btmenu: {
        height: '100%',
        color: '#111',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize:12

    },
    menu: {
        display: 'flex',
        width: 23
    },
    typoMenu: {
        display: 'flex',
        marginLeft: 9
    },
    bagy: {
        width: 25,
        marginLeft: 9,
        marginBottom: 1
    },
    typo2: {

        display: 'flex',
        position: 'absolute',
        right: '35%',
        top: '8%',
        backgroundColor: '#ffc220',
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 1,
        color: '#111',
        border: '2px solid #ff5722',
        fontSize: 20
    },
    typo3: {

        display: 'flex',
        position: 'absolute',
        // width: 20,
        // height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#111',
        fontSize: 11,
        bottom: 2
    },
    TypoClass: {
        textAlign: 'center'
    },
    middle: {
        display: 'flex',
        width: '100%',
        backgroundColor: '#fff',
        // height: 40,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'rgb(100 100 100 / 20%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px;',
        padding: 6,
        paddingTop: 6

    },
    middle2: {
        display: 'flex',
        width: '50%',
        backgroundColor: '#ffffff17',
        height: 40,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'rgb(100 100 100 / 20%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px;',
        [theme.breakpoints.down(630)]: {
            width: '80%'
        }
    },
    middle3: {
        display: 'flex',
        width: '20%',
        // backgroundColor: '#fff',
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    tttt1: {
        display: 'flex',
        color: '#fff'
    },

    // typoT: {
    //     // position: 'relative',
    //     color: '#111',
    //     textTransform: 'uppercase',
    //     overflow: 'hidden',
    //     background: 'linear-gradient(90deg,#fff,#111,#fff)',
    //     backgroundRepeat: 'no-repeat',
    //     // animation: `${spin} 3s linear infinite`,
    //     backgroundSize: '80%',
    //     WebkitBackgroundClip: 'text',
    //     WebkitTextFillColor: 'transparent'
    // },
    typoTTO: {

        color: '#fff',

    },
    textF1: {
        display: 'flex',
        width: '80%',
        color: '#fff',
        // height:20,
        transition: '0.3s',
        backgroundColor: '#ffffff17',
        borderRadius: 18,

        boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px;',
        // alignItems:'center',
        // justifyContent:'center',
        '&:hover': {

            // opacity:'0.9',
            '& ::before': {
                borderBottom: 'none',
                '&:hover': {
                    borderBottom: 'none',
                }
            },

        },

        "& .MuiFilledInput-root": {
            backgroundColor: 'transparent',
            color: '#fff',
            height: 35,
            fontSize: 13,
            justifyContent: 'center',
            alignItems: 'center'

        },
        '& label': {
            color: '#fff',
            fontSize: 13,
            opacity: 0.5,
            position: 'absolute',
            left: 30,
            top: -6,
            justifyContent: 'center',
            alignItems: 'center',
        },
        '& div': {
            display: 'flex',
            paddingTop: 0
        },
        "& .MuiInput-underline:before": {
            borderBottom: "none"
        },
        "& .MuiInput-underline:after": {
            borderBottom: "none"
        },
        "& .MuiInput-underline:hover:before": {
            borderBottom: "none"
        },
        "& .css-1auycx3-MuiAutocomplete-root .MuiFilledInput-root": {
            paddingTop: 0
        },
        // '&:hover': {
        //     borderBottom: 'none',
        //     backgroundColor: '#fff',
        //     borderRadius: 18,
        //     opacity: 0.1,
        //     transition: '0.3s',
        // },
        '& ::before': {
            position: 'absolute',
            top: 0,
            borderBottom: 'none',
            '&:hover': {
                borderBottom: 'none',
            }
        },
        '& ::after': {
            borderBottom: 'none',
            '&:hover': {
                borderBottom: 'none',
            }
        },
        '& .css-1q60rmi-MuiAutocomplete-endAdornment': {
            position: 'absolute',
            right: 50,
            top: 'calc(50% - 14px)',
            // backgroundColor: '#ffffff17',
            borderRadius: 9,
            display: 'flex'
        },
        '& .css-62e83j-MuiCircularProgress-root': {
            position: 'absolute',
            top: 6,
            right: '10px',
        },

        "& .css-1auycx3-MuiAutocomplete-root": {
            "& .MuiAutocomplete-inputRoot": {
                "& .MuiAutocomplete-input": {
                    backgroundColor: '#111'

                }
            }



        },
    },
    textF2: {
        display: 'flex',
        width: '100%',
        color: '#fff',
        // height:'100%',
        transition: '0.3s',
        // backgroundColor: '#fff',
        paddingTop: 0,
        borderRadius: 30,
        '&:hover': {
            borderBottom: 'none',
            backgroundColor: '#ffffff17',
            borderRadius: 18,
            opacity: 1,
            transition: '0.3s',
            fontSize: 10
        },

        "& .MuiAutocomplete-input": {
            "& .MuiAutocomplete-inputRoot": {
                "& .css-1auycx3-MuiAutocomplete-root": {
                    backgroundColor: '#111'

                }
            }



        },
    },
}))


