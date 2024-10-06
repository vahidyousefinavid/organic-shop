import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({

    rootShop: {
        width: '100%',
        display: 'flex',
        paddingTop: 80,
        padding: 18,
        [theme.breakpoints.down('372')]: {
            padding: 0,
            paddingTop: 80
        },
        [theme.breakpoints.down('600')]: {
            padding: 7,
            paddingTop: 80
        }
    },
    filterGrid: {
        width: '100%',
        display: 'flex',
        height: 60,
        // backgroundColor: 'pink',

    },
    check: {
        color: 'rgb(0, 102, 255)'
    },
    itemGrid: {
        display: 'flex',
        width: '100%',
        padding: 18,
        flexWrap: 'wrap',
        justifyContent: 'center',
        [theme.breakpoints.down('600')]: {
            padding: 7,
            paddingTop: 30
        },
        [theme.breakpoints.down('300')]: {
            padding: 0,
            paddingTop: 30
        }
    },
   
}))