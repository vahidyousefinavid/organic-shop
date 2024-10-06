import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        // height: 600,
        justifyContent: 'center',
        display: 'flex',
        paddingTop: 99,
        alignItems: 'center',
        minHeight: 533,
        padding: 9,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 77
        },

    },
    root3: {
        // flexGrow: 1,
        width: '73%',
        backgroundColor: theme.palette.background.paper,
    },
    nextRoot: {
        maxWidth: 980,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        direction: 'column',
        paddingTop: 30,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            paddingTop: 60
        },
        [theme.breakpoints.down('md')]: {

            paddingTop: 60
        },

    },
    bagGrid: {
        width: '93%',
        display: 'flex',
        // backgroundColor: '#0000009e',
        // height: 666,
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }

    },
    bagClass: {
        width: 39,
        height: 39
    },
    valueGrid: {
        width: '83%',
        display: 'flex',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    value: {
        display: 'flex',
        position: 'relative'
    },
    bagRoot: {
        width: '100%',
        backgroundColor: '#fff',
        height: 'auto',
        paddingTop: 9,
        borderBottom: 'solid 1px #d4d4d49e',
        position: 'relative',
        marginTop: 9
    },
    imgGrid: {
        // backgroundColor: '#111',
        display: 'flex',
        // width: '100%',
        // height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        display: 'flex',
        maxWidth: '100%',
        height: 192,
        padding: 9,
        borderRadius: 15,
        [theme.breakpoints.down('xs')]: {
            height: 160
        }
    },
    link: {
        display: 'flex',
        width: '100%'
    },
    returnIcon: {
        width: 65,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fastIcon: {
        width: 65,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accordionCla: {
        marginTop: 18,
        width: 233,
        '&:before': {
            height: 0
        }
    },
    liClass: {

        // display: 'flex',
        width: '99%',
        paddingLeft: 0,
        marginTop: 18

    },
    textField: {
        backgroundColor: '#d4d4d49e',
        width: '99%',
        display: 'flex',


    },
    buttonField: {
        backgroundColor: '#111',
        marginTop: 9,
        color: '#fff'
    },
    tab: {
        opacity: 1,
        color: '#111',
        minWidth: 50,
        [theme.breakpoints.down('xs')]: {
            minWidth: 30
        },

    },

    IMG: {
        // display: 'flex',
        width: 25,
        height: 25,
        borderRadius: 15,


    },
    ddidiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    opoButton: {
        display: 'flex',
        height: 25,
        minWidth: 25,
        margin: 3
    },
    plusButton: {
        display: 'flex',
        height: 25,
        minWidth: 25,
        margin: 3
    },
    typ1: {
        display: 'flex',
        margin: 3

    },
    takhfif: {
        marginTop: 8
    },
    notic: {
        display: 'flex',
        color: 'red',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 6
    },
    chooseOrderDiv:{
        display:'flex',
        width:'100%',
        minHeight:50,
        marginBottom:18,
        // backgroundColor:'#111',
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap'
    },
    chooseOrderButton:{
        display:'flex',
        height:33,
        width:120,
        backgroundColor:'#ed7925',
        color:'#fff',
        margin:6
        
    },
    chooseOrderDiv2:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:18
    },
    vcx:{
        display:'flex',
        width:120,
        minHeight:120,
        border:'solid 2px #111',
        borderRadius:9,
        marginTop:9,
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:3
    },
    vcxT:{
        display:'flex',
        fontWeight:600,
        fontSize:14,
        textAlign:'center'
    },
    vcxT2:{
        display:'flex',
        fontWeight:400,
        fontSize:14,
        textAlign:'center'
    }



}))