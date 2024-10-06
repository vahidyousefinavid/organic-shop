import React from 'react'
import useStyles from './index.styles'
import { Link } from 'react-router-dom'
function CategoryItem({ title, icon, to }) {
    const classes = useStyles()
    return (
        <Link to={to} className={classes.root}>
            {/* dkmckd */}
            {icon}
            <text className={classes.text}>
                {title}
            </text>
        </Link>
    )
}

export default CategoryItem