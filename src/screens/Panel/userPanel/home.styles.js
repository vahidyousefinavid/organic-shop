import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({

    root: {
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        // justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: 9
    },
    title: {
        display: 'flex',
        color: 'kk'

    },
    input: {
        display: 'flex',

    },
    inputGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Grid: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30,
        alignItems: 'center'
    },
    Typo: {
        display: 'flex',
        marginLeft: 6,
        color: '#5e5d5d'
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 18
    },
    Accordion: {
        display: 'flex',
        flexDirection: 'column'
    },
    Button: {
        display: 'flex',
        backgroundColor: 'rgb(3, 127, 255)',
        color: '#fff',

    },
    bigGrid: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 18,
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'center'
    }




}))