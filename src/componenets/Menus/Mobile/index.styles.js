import React from 'react'
import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        position: 'fixed',
        zIndex: 1000

    },
    mainmenu: {
        width: '100%',
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0071dc',
        height: 60,
        justifyContent: 'space-between',
        // position: 'fixed',
        zIndex: 1000,
        top: 0,
        boxShadow: '5px 2px 7px -4px',
        // borderBottom: 'solid 0.3px #fff'
    },
    topmenu: {
        // height: 36,
        backgroundColor: '#344CB7',
        width: '100%',
        alignItems: 'center',
        // position: 'fixed',
        display: 'flex',
        zIndex: 1000,
        color: '#fff',
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

        "&:hover ": {


            transition: 'all 0.3s ease-in-out',
            backgroundColor: '#418dff',
            transition: '0.3s',

        },


    },
    btmenu: {
        height: '100%',
        color: '#fff',

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
        color: '#fff',
        fontSize: 11,
        bottom: 2
    },
    TypoClass: {
        textAlign: 'center'
    }

}))


