import { makeStyles } from '@material-ui/core'



export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        // height: 600,
        justifyContent: 'center',
        display: 'flex',
        padding: 133,
        // alignItems: 'center',
        minHeight: 533,
        position: 'relative',


        [theme.breakpoints.down('md')]: {
            padding: 33,
            paddingBottom: 99,
            paddingTop: 69
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            padding: 18,
            paddingBottom: 90,
            alignItems: 'center',
            paddingTop: 69
        }


    },
    addres: {
        // backgroundColor: '#111',
        display: 'flex',
        minHeight: 400,
        // justifyContent: 'center',
        // border: 'solid 1px #111',
        width: '33%',
        marginRight: 18,
        borderBottom: 'solid 6px rgb(0, 102, 255)',
        // position: 'relative',
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
    pay: {
        // backgroundColor: '#d6d6d6',
        display: 'flex',
        minHeight: 400,
        // justifyContent: 'center',
        // border: 'solid 1px #efefef',
        borderBottom: 'solid 6px rgb(0, 102, 255)',
        width: '33%',
        marginLeft: 18,
        flexDirection: 'column',
        alignItems: 'center',
        // borderRadius: 9,
        marginTop: '60px',
        [theme.breakpoints.down('md')]: {
            width: '45%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            padding: 18,
            marginLeft: 0,

        }
    },
    image: {
        width: 60,
        // position: 'absolute'

    },
    inputDiv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'

    },
    OstanInput: {
        width: '45%',
        display: 'flex',
        marginRight: 9,

        '& > lable': {
            color: '#111'
        }
    },
    ShahrInput: {
        width: '45%',
        display: 'flex',
        marginLeft: 9,


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
    form: {
        marginTop: 18,
        flexDirection: 'row',
        display: 'flex'
    },
    text: {
        color: '#a0a0a0',
        padding: 18,
        marginTop: 33
    },
    ButtonDiv: {
        position: 'absolute',
        bottom: 33,

        [theme.breakpoints.down('xs')]: {
            bottom: 9
        }
    },
    Button: {

        backgroundColor: 'rgb(0, 102, 255)',
        marginRight: 9,
        color: '#fff'

    },

    typoF: {

        display: 'flex',
        flexDirection: 'column',
        padding: 9,
        alignSelf: 'start'
    },
    Utypo: {
        color: 'rgb(0, 102, 255)'
    },
    mapContainer: {
        height: 400,

    }


}))