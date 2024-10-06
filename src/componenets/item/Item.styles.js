import React from 'react'
import { makeStyles } from '@material-ui/core'
import theme from '../../theme/theme'


export default makeStyles(() => ({

    LinkDiv: {
        textDecoration: 'none',
        display: 'flex',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            width: '25%',

        }, position: 'relative'
    },

    itemDiv: {
        width: 330,
        height: 250,
        margin: 7,
        borderRadius: 6,
        // boxShadow: '1px 1px 13px -5px #111',
        padding: 6,
        cursor: 'pointer',
        transition: '0.3s',
        color: '#111',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background:'#f9f9f9',
        border:'2px solid #e0e0e0',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 150,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between'
        },
    },
    divy: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'start',
        }
    },
    imgDiv: {
        display: 'flex',
        width: '100%',
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#111',
        [theme.breakpoints.down('xs')]: {
            maxWidth: 120,
            height: 140,
            marginRight: 13,
            flexDirection: 'row',
        },
    },
    imgItem: {
        display: 'flex',
        width: '70%',
        height: '85%',
        borderRadius: 3,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '90%',
        },
    },
    figo: {
        display: 'flex',
        marginTop: 9,
        width: '100%',
        justifyContent: 'center'
    },
    desc: {
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'unset',
        marginTop: 10,
        justifyContent: 'end',
        alignItems: 'center',
        marginRight: 8,
        [theme.breakpoints.down('xs')]: {

            width: '50%',
            justifyContent: 'center',
            marginTop: 0,
            marginRight: 0
        },
    },
    Price: {
        textAlign: 'end',
        marginTop: 6,
        [theme.breakpoints.down('xs')]: {
            height: '100%',
            textAlign: 'start',
            marginLeft: 'auto',
            whiteSpace: 'pre-wrap',
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'start',
            width: '50%',
            overflowWrap: 'anywhere'
        },
    },
    takhfif: {
        // backgroundColor: '#D9534F',
        // borderRadius: 10,
        // padding: 3,

    },
    takhfif2: {
        display: 'none'
    },
    all: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        [theme.breakpoints.down('xs')]: {
            width: '73%',
            height: '100%',
            marginRight: 0,
            marginTop: 0,
        },
    },
    div4: {
        display: 'flex',
        flexDirection: 'row'
    },
    bagButton: {
        color: '#fff',
    },
    ddidiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    opoButton: {
        display: 'flex',
        height: 25,
        minWidth: 25,
        margin: 3
    },
    plusButton: {
        display: 'flex',
        height: 25,
        minWidth: 25,
        margin: 3
    },
    typ1: {
        display: 'flex',
        margin: 3

    },
    solid: {
        // display: 'flex',
        width: 80,
        // borderBottom: 'solid 1px red',
        // backgroundColor: 'red',
        position: 'absolute',
        right: -10,
        transform: 'rotate(135deg)',
        bottom: -50,
        height: 120,
        [theme.breakpoints.down('xs')]: {
            width: 80,
            right: -6,
            transform: 'rotate(130deg)'

        }


    },
    solidDiv: {
        // display: 'flex',
        position: 'relative',
        marginTop: 9
    },
    takh: {
        position: 'absolute',
        width: 50,
        height: 50,
        transform: 'rotate(90deg)',
        top: -1,
        opacity: 1,
        right: -10

    },
    desc2: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'unset',
        marginTop: 10,
        justifyContent: 'end',
        alignItems: 'center',
        marginRight: 8,
        [theme.breakpoints.down('xs')]: {

            width: '50%',
            justifyContent: 'center',
            marginTop: 0,
            marginRight: 0
        },
    },

}))


