import { makeStyles } from '@material-ui/core'
import { width } from '@mui/system'


export default makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        // backgroundImage: `url(${bamgi})`,
        // backgroundPosition: 'bottom',
        // backgroundSize: 'cover',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 79,
        position: 'relative',
        overflow: 'hidden',


    },
    Grid1: {
        display: 'flex',
        width: 250,
        height: 250,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        padding: 25,
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0px 1px 66px -17px #0071dc',
        borderRadius: '150px',
        paddingTop: 50,
        margin: 30,
        [theme.breakpoints.down('380')]: {

            width: 200,
            height: 200
        },
    },
    GridBig: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: 500,
        padding: 100,
        [theme.breakpoints.down('1150')]: {
            padding: 30,
            paddingTop: 80,
            // justifyContent: 'center'
        },
        [theme.breakpoints.down('950')]: {
            padding: 30,
            paddingTop: 80,
            justifyContent: 'center'
        },
        [theme.breakpoints.down('990')]: {

            justifyContent: 'center'
        },

        flexWrap: 'wrap'
    },
    Typo: {
        display: 'flex',
        marginTop: '23%',
        justifySelf: 'center',
        flexWrap: 'wrap'
    },
    title: {
        display: 'flex',
        width: '100%',
        padding: 18,
        justifyContent: 'center',
        marginTop: 50,
        flexDirection: 'column',
        alignItems: 'center'
    },
    Typotitle: {
        display: 'flex',
        maxWidth: 800,
        textAlign: 'center'
    },
    baner: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            height: 480
        }

    },
    banerDiv: {
        display: 'flex',
        width: '100%'
    },
    Button: {
        display: 'flex',
        marginTop: 50,
        backgroundColor: '#0071dc',
        color: '#fff'

    },
    donation: {
        display: 'flex',
        width: 35,
        marginLeft: 9
    },
    rootPay: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        paddingTop: 150


    },
    addres: {
        // backgroundColor: '#111',
        display: 'flex',
        minHeight: 350,
        // justifyContent: 'center',
        // border: 'solid 1px #111',
        width: '33%',
        marginRight: 18,
        borderBottom: 'solid 6px rgb(0, 102, 255)',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        // borderTop: 'solid 6px #2dacf1',
        marginTop: 60,
        [theme.breakpoints.down('md')]: {
            width: '45%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            padding: 18,
            marginRight: 0
        }
    },
    image: {
        width: 60,
        // position: 'absolute'

    },
    fieldInput: {
        marginTop: 9,
        marginBottom: 9,
        '& label': {
            color: '#a0a0a0'
        }
    },
    fieldInput2: {
        marginTop: 9,
        marginBottom: 18,

        '& div': {
            height: 66
        },

        '& label': {
            color: '#a0a0a0',

        }
    },
    typoF: {

        display: 'flex',
        flexDirection: 'column',
        padding: 9,
        alignSelf: 'start',
        bottom: 0
    },
    Utypo: {
        color: 'rgb(0, 102, 255)',
        textAlign: 'center',

        bottom: 18
    },
    text: {
        color: '#a0a0a0',
        padding: 9,
        textAlign: 'center'

    },
}))