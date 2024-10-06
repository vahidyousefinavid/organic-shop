import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        width: 270,
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: 'initial'
    },
    logoMenu: {
        height: 180,
        width: 100,
        alignItems: 'center'
    },
    logoImg: {
        display: 'flex',
        width: 120
    },
    mainButton: {
        display: 'flex',
        width: '100%',
        marginTop: 40
    },
    ListDiv: {
        width: '100%',
        padding: 5
    },
    aClass: {
        textDecoration: 'none',
        color: '#676464',
        marginTop: 10
    },
    liClass: {
        listStyleType: 'none',
        lineHeight: 2,
        marginRight: 9
    },
    rootAccard: {
        boxShadow: 'none',
        borderBlock: 'none',
        border: 'none',
        borderBlock: 'none',
        display: 'flex',
        flexDirection: 'column',
        width: '98%',
        '&:before': {
            display: 'none',
        },
    },
    newText: {
        color: '#e01f1f'
    },
    newButton: {
        display: 'flex',
        flexDirection: "space-between"
    },
    signDiv: {
        marginTop: 18
    },
    heading: {
        display: 'flex'
    },
    liLi: {
        marginTop: 6
    },
    kkl: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        alignItems: 'start',
        marginTop: 18
    },
    homey: {
        display: 'flex',
        width: 23,
        marginRight: 28
    }

}))


