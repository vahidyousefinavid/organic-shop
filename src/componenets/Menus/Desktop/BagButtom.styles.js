import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Height } from '@material-ui/icons'


export default makeStyles(() => ({
    root: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: 9,
        '&:hover': {
            backgroundColor: '#efefef',
            borderRadius: 10
        }

    },
    profileImg: {
        height: '46%',


    },
    badge: {
        backgroundColor: 'rgb(42 125 249)',
        borderRadius: 9,
        position: 'absolute',
        width: 18,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        top: 23,
        right: 18.5
    }

}))


