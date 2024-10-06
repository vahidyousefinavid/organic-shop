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
        height: '46%'
    }
}))


