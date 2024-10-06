import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import { Hidden, StepConnector } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

    },
    stepConnector: {
        paddingBottom: 0,
        "& span": { borderLeft: "4px  solid  #2e344e" }
    },
    circle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        border: "5px solid #2e344e",
        marginLeft: 6,


    },
    stepCon: {
        borderLeft: "4px  solid  #2e344e",
        marginTop: 0,
        display: 'flex'
    },
    stepLabel: {
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
        }

    },
    title: {
        marginLeft: 15,
        color: theme.palette.primary.main
    },
    line: {
        width: 30,
        height: 1,
        backgroundColor: "#2e344e"
    },
    date: {
        width: 200,
        textAlign: "left",
        marginLeft: 15
    },
    stepper: {
        backgroundColor: "transparent",
        [theme.breakpoints.down('xs')]: {
            paddingRight: 0,
            paddingLeft: 0
        }
    },
    subtitlestep: {
        textAlign: 'left'
    }
}));



export default function MyStepper({ steps }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Stepper connector={<stepConnector className={classes.stepConnector} />} className={classes.stepper} orientation="vertical">
                {steps.map((step) => step.id >= 0 ? (
                    <Step active={true} key={step.id}>
                        <StepLabel
                            classes={{ label: classes.label }}
                            className={classes.stepLabel} icon={<span className={classes.circle} />} >
                            <Typography className={classes.date} variant='h6'>{step.date}</Typography>
                            <Hidden xsDown ><span className={classes.line} ></span></Hidden>

                            <Typography className={classes.title} variant='h5' >{step.title}</Typography>
                        </StepLabel>
                        <StepContent className={classes.stepCon}>
                            <div style={{ display: 'flex', flexDirection: 'row ', padding: '15' }} >
                                <Hidden xsDown > <div style={{ width: 255, display: 'flex' }} ></div></Hidden>
                                <div>
                                    <Typography variant='h6' className={classes.subtitlestep} >{step.subtitle}</Typography>
                                </div>

                            </div>


                        </StepContent>
                    </Step>
                ) : step.id === -1 ? (
                    <Step active={true} key={step.id} >
                        <StepLabel icon={null}></StepLabel>

                    </Step>
                ) : (null)
                )}
            </Stepper>

        </div>
    )
}