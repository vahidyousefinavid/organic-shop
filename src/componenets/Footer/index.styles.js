import { makeStyles } from '@material-ui/core'
import React from 'react'


export default makeStyles((theme) => ({

    downGrid4: {
        marginTop: 120,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f7f7f7',
        // minHeight: 120,
        bottom: 0,
        padding: 15,
        boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 24px, rgb(198 200 234) 0px 8px 28px;',
        [theme.breakpoints.down('xs')]: {
            marginTop: 18
        },
        color: '#111'
    },

    jss3: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
    },

    typo1: {
        padding: 18,
        // paddingLeft: 60,
        // paddingRight: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    enamad: {
        display: 'flex',
        width: '100px',
        height: 150
    },
    validationDiv: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 80,
        borderBottom: '1px solid #e9e9e9'
    },
    bottomBox: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'spaceBetween',
        flexWrap:'wrap'
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

}))