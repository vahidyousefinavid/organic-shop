import React from 'react'
import { makeStyles } from '@material-ui/core'
import theme from '../../theme/theme'


export default makeStyles(() => ({
    itemDiv: {
        width: 250,
        // backgroundColor: '#111',
        height: 318,
        margin: 7,
        borderRadius: 9,
        boxShadow: '1px 1px 13px -5px #111',
        padding: 6,
        cursor: 'pointer',
        transition: '0.3s',
        color: '#111',
        '&:hover': {
            cursor: 'pointer',
            transform: 'translate(0px, -2px)',
            transition: '0.3s'

        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 150,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'initial'
        }
    },
    divy: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',

            alignItems: 'start',

        }
    },
    imgItem: {
        display: 'flex',
        width: '100%',
        height: 240,
        [theme.breakpoints.down('xs')]: {
            width: '37%',
            height: 140,
            marginRight: 8
        }
    },
    desc: {
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'unset',
        marginTop: 5,
        [theme.breakpoints.down('390')]: {
            width: '52%',

        }
    },
    Price: {
        textAlign: 'end'
    },
    takhfif: {
        backgroundColor: '#D9534F',
        borderRadius: 3,
        padding: 3
    },
    takhfif2: {
        display: 'none'
    },
    all: {
        display: 'flex',
        flexDirection: 'column',
        // width: '90%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    }
}))


