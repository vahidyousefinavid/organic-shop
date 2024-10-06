import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({

    root: {
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80
    },
    form: {
        width: '33%',
        height: 'auto',
        backgroundColor: '#EEEEEE',
        display: 'flex',
        borderRadius: 9,
        alignItems: 'center',
        // justifyContent: 'center',
        borderBottom: 'solid 6px rgb(0, 102, 255)',
        flexDirection: 'column',
        boxShadow: '-3px 7px 16px -7px',
        [theme.breakpoints.down('sm')]: {
            width: '83%'
        },
    },
    upForm: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '20%',
        marginTop: 18

    },
    img: {
        width: 69,
        display: 'flex',
        marginBottom: 3
    },
    detail: {
        display: 'flex',
        margin: 9
    },
    kk2: {
        color: '#CD1818',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'center',
        marginTop: 9
    },
    Typo: {
        textAlign: 'center',
        color: '#525E75',
        padding: 9
    },
    Typo2: {
        textAlign: 'center',
        color: '#B20600',
        padding: 9
    }




}))