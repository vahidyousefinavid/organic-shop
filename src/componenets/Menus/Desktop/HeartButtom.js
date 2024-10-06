import React from 'react'
import HeartIcon from '../../../assets/images/heart.png'
import useStyles from './HeartButtom.styles'
export default function ProfileButtom() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img className={classes.profileImg} src={HeartIcon} alt='دلخواه' ></img>
        </div>
    )
}
