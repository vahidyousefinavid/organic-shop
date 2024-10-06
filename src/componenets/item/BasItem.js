import { Hidden, Link, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './BasItem.styles'


export default function Item({ desc, takhfif, price, title, img, alt, href }) {
    const classes = useStyles()
    return (
        <Link href={href} style={{ textDecoration: 'none', display: 'flex' }}>
            <div className={classes.itemDiv}>

                <img alt={alt} src={img} className={classes.imgItem}></img>
                <div className={classes.all}>
                    <div className={classes.divy}>
                        <Typography variant='h5'>
                            {title}
                        </Typography>
                        <div className={classes.Price}>
                            <Typography variant='h5'>{price} تومان</Typography>
                            <div className={takhfif >= 1 ? classes.takhfif : classes.takhfif2}>
                                <Typography variant='h5'> تخفیف:{takhfif} تومان</Typography>
                            </div>

                        </div>

                    </div>
                    <div className={classes.desc}>
                        <Typography variant='h5'>
                            توضیحات:
                        </Typography>
                        <Typography variant="h6" noWrap >
                            {desc}
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    )
}
