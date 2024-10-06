import React from 'react'
import { makeStyles } from '@material-ui/core'
import theme from '../../theme/theme'


export default makeStyles(() => ({
    item1:{
        display:'flex',
        width:150,
        height:150,
        borderRadius:9,
        // backgroundColor:'#ffffff17',
        padding:3,
        cursor:'pointer',
        transition:'0.3s',
        boxShadow: 'rgb(1 1 1 / 10%) 0px 2px 5px, rgb(6 34 49 / 8%) 0px 2px 5px',
margin:6,
        '&:hover':{
            boxShadow: 'rgb(255 255 255 / 10%) 0px 0px 15px, rgb(6 34 49 / 8%) 0px 0px 15px',
            transition:'0.3s',
        },
        // justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    div1:{
        display:'flex',
        width:80,
        height:80,
        backgroundColor:'#ffffff17',
        borderRadius:9
    },
    img1:{
        display:'flex',
        width:'100%',
        height:'100%'
    },
    tt1:{
        // display:'flex',
        textAlign:'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        opacity:900,
        marginTop:3,
        '&:hover':{
            WebkitLineClamp: 2,
            display:'inline-table'
           
            
        }
    },
    bb1:{
        display:'flex',
        backgroundColor:'#111',
        color:'#fff',
        marginTop:6,
        opacity:800
    },
    ddidiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
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
    opoButton: {
        display: 'flex',
        height: 25,
        minWidth: 25,
        margin: 3
    },
    bagButton: {
        color: '#fff',
    },
    
}))


