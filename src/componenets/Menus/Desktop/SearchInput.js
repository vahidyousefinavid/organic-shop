import React from 'react'
import useStyles from './SearchInput.styles'
import SearchIcon from '@material-ui/icons/Search'
import { Icon, IconButton } from '@material-ui/core'

export default function SearchInput() {

    const classes = useStyles()
    return (

        <div className={classes.root} >
            <IconButton ><SearchIcon /></IconButton>
            <input type="text" placeholder="Search" className={classes.SearchInput} />
        </div>

    )
}
