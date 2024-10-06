import { Hidden, Link, Typography, Grid, Button } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import useStyles from './Category.Style'
import pp from '../../assets/images/456.png'
export default function CategoryItem({ src, takhfif, price, title, img, alt, href, product, id, stock }) {
    const classes = useStyles()
    


    return (
        <Link href={href} className={classes.yt}  >
            <div className={classes.rt}  >
            <img src={pp} className={classes.pp1}  ></img>
           <img src={src} className={classes.pp2}  />
            </div>
            <Typography
            variant='h4'
            className={classes.tt}
              >{title}</Typography>
        
          </Link>
    )
}
