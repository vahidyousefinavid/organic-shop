import React from 'react'
import { makeStyles } from '@material-ui/core'
import theme from '../../theme/theme'


export default makeStyles(() => ({
    yt:{
        display:'flex',
            width:180,
            height:150,
          cursor:'pointer',
            textDecoration:'none',
            // backgroundColor:'yellow',
            position:'relative',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',
            margin:15,
            '&:hover':{
                textDecoration:'none'
            },
            [theme.breakpoints.down('480')]:{
                width:110,
                height:130,
                marginTop:25,
                
            }
    },
    rt:{
        
          display:'flex',
          width:120,
          height:120,
          border:'2px solid rgb(109 117 244)',
          borderRadius:18,
           boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 24px, #6d75f46e 0px 8px 28px',
          backgroundColor:'rgb(163 176 244 / 0%)',
          transition:'0.3s',
          justifyContent:'center',
          alignItems:'center',
          [theme.breakpoints.down('480')]:{
            width:90,
            height:90,
           
        },
        '&:hover':{
            boxShadow: 'rgb(0 0 0 / 45%) 0px 2px 24px, #6d75f46e 0px 8px 28px',
            transition:'0.3s'
        }
    },
    pp1:{
        width:30,
            position:'absolute',
            top:8,
            right:40
    },
    pp2:{
        width:'100%',
        height:'100%',
        [theme.breakpoints.down('950')]:{
            width:'90%',
            height:'95%'
        }
    },
    tt:{
        display:'flex',
              marginTop:12,
              color:'#495bbf',
              fontSize:18,
              textAlign:'center'
    }
}))


