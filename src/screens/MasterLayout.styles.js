import { makeStyles } from '@material-ui/core'
import theme from '../theme/theme'

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '90vh',
        // position: 'relative'

    },
    ggh: {
        height: 330,
        transform: 'translateZ(0px)',
        // flexGrow: 1,
        position: 'fixed',
        bottom: 18,
        left: 18,
        display: 'flex',
        zIndex: 1000,
        [theme.breakpoints.down('xs')]: {
            left: 6,
            bottom: 6
        },
        [theme.breakpoints.down('1060')]: {
            display: 'none'
        }
    },
    mo: {
        display: 'flex',
        width: '100%',
        height: 50,
        position: 'fixed',
        bottom: 9,
        justifyContent: 'center',
        zIndex: 100

    },
    jk: {
        display: 'flex',
        width: '50%',
        height: 50,
        // backgroundColor:'#111',
        borderRadius: 18,
        border: '3px solid #6d75f4',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.down('1050')]: {
            width: '80%'
        },
        [theme.breakpoints.down('520')]: {
            width: '90%'
        }

    },
    lk: {
        display: 'flex',
        width: '30%',
        backgroundColor: '#e9ecff',
        height: '90%',
        borderRadius: 12,
        alignItems: 'center',
        padding: 3,
        justifyContent: 'space-evenly',
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
            textDecoration: 'none',
        },
        [theme.breakpoints.down('660')]: {
            width: '35%'
        }
    },
    jh: {
        display: 'flex',
        backgroundColor: '#cbcdec',
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // position:'absolute',
        right: 3,
        [theme.breakpoints.down('660')]: {
            width: 25,
            height: 25
        }
    },
    fg: {
        color: '#495bbf',

    },
    llkh: {
        fontSize: 16,
        [theme.breakpoints.down('610')]: {
            fontSize: 14
        }
    },
    llop: {
        display: 'flex',
        position: 'fixed',
        bottom: 15,
        right: 15,
        width: 100,
        height: 100,
        opacity: 1000,
        zIndex: 100,
        [theme.breakpoints.down('1050')]: {
            bottom: 10,

        },
        [theme.breakpoints.down('700')]: {
            width: 60,
            height: 60

        }
    },
    RouteDiv: {
        display: 'flex',
        paddingTop: 80,
        width:'100%',
        flexDirection:'column'
    }


}))