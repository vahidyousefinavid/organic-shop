import React from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import { Grid, Hidden, Typography, } from '@material-ui/core'
import Title from '../../../componenets/title'
import { getTranslate } from '../../../assets/localization'
import Skill from '../../../componenets/skill'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Infinity from '../../../assets/images/Infinity.gif'
import Service from '../../../componenets/service'
// import MyStepper from '../componenets/MyStepper'

const useStyles = makeStyles(theme => ({
    rootOrder: {
        minHeight: '100vh',
        padding: 9,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'

    },
    order: {
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        justifyContent: 'center'
    },
    order2: {
        display: 'flex',

    },
    img: {
        display: 'flex',
        width: 120,


    }
}))
export default function ResumeScreen() {
    const classes = useStyles()
    const translate = getTranslate()
    const [expanded, setExpanded] = React.useState('panel1')

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    return (

        <div className={classes.rootOrder}>
            <div className={classes.order}>
                <Title title={'سفارشات'} ></Title>
            </div>
            <div className={classes.order2}>
                <img src={Infinity} className={classes.img} />
            </div>

        </div >

    )
}