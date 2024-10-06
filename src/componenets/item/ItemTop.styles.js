import React from 'react'
import { makeStyles } from '@material-ui/core'
import theme from '../../theme/theme'


export default makeStyles(() => ({



    itemDiv: {
        display: 'flex',
        width: 180,
        height: 250,
        cursor: 'pointer',
        textDecoration: 'none',
        // backgroundColor:'yellow',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 18,
        border: '2px solid rgb(109 117 244)',
        borderRadius: 18,
        padding: 9,
        paddingBottom: 25,
        boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 24px, #6d75f46e 0px 8px 28px',
        [theme.breakpoints.down('850')]: {
            width: 160,
            height: 230,

        },
        [theme.breakpoints.down('420')]: {
            margin: '3%'

        },
        [theme.breakpoints.down('369')]: {
            flexDirection: 'row',
            width: '90%',
            height: 150

        }

    },
    kjtr: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divy: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    imgDiv: {
        display: 'flex',
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#111',
        [theme.breakpoints.down('850')]: {
            width: 95,
            height: 95
        }

        // flex: 1
    },
    imgItem: {
        display: 'flex',
        width: 120,
        height: 120,
        // flex: 1
        borderRadius: 3,
        [theme.breakpoints.down('850')]: {
            width: 90,
            height: 90
        }
    },
    figo: {
        display: 'flex',
        // marginTop: 9,
        width: '100%',
        justifyContent: 'center'
    },
    kko: {
        display: 'flex',
        marginTop: 12,
        color: '#495bbf',
        fontSize: 16,
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
        WebkitLineClamp: 1,
    },
    desc: {
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'unset',
        marginTop: 6,
        justifyContent: 'end',
        alignItems: 'center',
        // marginRight: 8,

    },
    Price: {
        textAlign: 'end',
        marginTop: 6,

    },
    lljo: {
        // display:'flex',
        // marginTop:12,
        color: '#495bbf',
        fontSize: 14,
        textAlign: 'center'
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
        marginTop: 6,

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



    },
    solidDiv: {
        // display: 'flex',
        position: 'relative',
        // marginTop: 9
    },
    takh: {
        position: 'absolute',
        width: 50,
        height: 50,
        transform: 'rotate(90deg)',
        top: -6,
        opacity: 1,
        right: -15

    },
    desc2: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'unset',
        marginTop: 10,
        justifyContent: 'end',
        alignItems: 'center',
        marginRight: 8,

    },

}))


