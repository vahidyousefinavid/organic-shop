import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Height } from '@material-ui/icons'


export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: 9,
        position: 'relative',
        '&:hover': {
            backgroundColor: '#efefef',
            borderRadius: 10
        },
        [theme.breakpoints.down('410')]: {
            marginRight: 0

        },

    },
    profileImg: {
        height: '46%',
        display: 'flex'
    },
    paperlogin: {
        width: 300,
        height: 260,
        display: 'flex',
        position: 'absolute'
    },
    profile: {
        width: 10,
        height: 10,
        backgroundColor: '#FF2442',
        position: 'absolute',
        borderRadius: 10,
        top: 15,
        right: 20
    }
}))



