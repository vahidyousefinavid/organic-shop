import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({

    root: {
        width: '100%',
        minHeight: '100vh',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 80,
        display: 'flex',
        flexDirection: 'row'
    },
    right: {
        display: 'flex',
        minHeight: '100vh',
        // backgroundColor: 'red',
        boxShadow: '4px -1px 7px -4px',
        flexDirection: 'column'
    },
    left: {
        display: 'flex',
        padding: 9
    },
    centerDrawer: {
        flex: 1,
        justifyContent: 'center',
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        width: 50,
        marginLeft: 0,
        marginRight: 0,
        // margin: 5,
        height: 50,
        backgroundColor: "#191d2b",
        position: 'fixed',
        zIndex: 1,
        top: 200,
        [theme.breakpoints.up('sm')]: {
            display: 'none',

        },
    },
    drawer: {
        display: 'flex',
        width: '100%',
        height: 80,
        backgroundColor: '#DFDFDE',
        position: 'fixed',
        bottom: 0,
        borderRadius: '9px 9px 0px 0px ',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        opacity: 1000,
        zIndex: 2000,
        padding: 3
    },
    aClass: {
        display: 'flex',
        textDecoration: 'none',
        color: '#111'
    }



}))