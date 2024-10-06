import { Link, Typography } from '@material-ui/core'
import React from 'react'
import BagIcon from '../../../assets/images/bag.png'
import useStyles from './BagButtom.styles'
export default function ProfileButtom() {
    const classes = useStyles()
    return (
        <a className={classes.root} href="/bag">
            <div className={classes.root}  >


                <img className={classes.profileImg} src={BagIcon} alt='سبد خرید' ></img>
                <div className={classes.badge}>
                    <Typography variant='subtitle2' >
                        3
                    </Typography>

                </div>
                <div>

                </div>


            </div>
        </a>
    )
}
