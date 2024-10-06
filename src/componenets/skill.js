import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress, Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        padding: 10,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'


    },

    progressDiv: {
        display: 'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'100%'

    },
    linearGradient:{
        width:'90%',
        color:'primary',
        display:'flex',
        backgroundColor:'#2e344e',
        marginLeft:15,
        marginRight:15,
        height:6
    }
}))
export default function Skill({value,title}) {
    
    const[val,setVal]=useState(25)
    const classes = useStyles()

    useEffect(() => {
        setTimeout( () => {
            if (val===value){
                return
            }
            setVal(val=>val+5)
        },200  )
    }, [val])
    return (
        <div className={classes.root} >
            <Typography variant='h6' >{title}</Typography>
            <div className={classes.progressDiv} >
                <Typography variant='body1' >{value}%</Typography>
                <LinearProgress variant="determinate" value={val} color='primary'  className={classes.linearGradient} />

            </div>
        </div>
    )
}
