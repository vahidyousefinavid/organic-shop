import React from 'react'
import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    rootShop: {
        display: 'flex',
        paddingTop: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 600

    },

    ii: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }


}))