import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        // backgroundImage: `url(${bamgi})`,
        // backgroundPosition: 'bottom',
        // backgroundSize: 'cover',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 79,
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.down('320')]: {
            paddingTop: 99
        }

    },
    upGrid: {
        width: '100%',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            minHeight: 0
        },
        [theme.breakpoints.down('md')]: {

            minHeight: 0
        }
    },
    rightGrid: {


        display: 'flex',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        borderRadius: 20,

        // backgroundImage: `url(${bamgi})`,
        [theme.breakpoints.down('xs')]: {
            paddingTop: 9
        },
        [theme.breakpoints.between('sm', 'sm')]: {
            height: 500
        },
        [theme.breakpoints.between('md', 'md')]: {

        }

    },
    leftGrid: {

        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',



        [theme.breakpoints.down('xs')]: {
            paddingTop: 18
        },
        [theme.breakpoints.between('sm', 'sm')]: {
            paddingTop: 30
        },
        [theme.breakpoints.between('md', 'md')]: {
            paddingTop: 30
        }

    },
    reactPlayer: {
        borderRadius: '0.25rem !important',

        // position: 'absolute',
        overflow: 'hidden',

    },
    buttonGrid: {
        marginTop: 18,
        display: 'flex'
    },
    downGrid: {
        // width: '100%',
        // minHeight: 100,
        display: 'flex',
        flexDirection: 'row',
        // marginTop: 89,
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            marginTop: 30
        }
    },
    downGrid2: {
        display: 'flex',
        justifyContent: 'center',



    },
    downGrid3: {
        marginTop: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            marginTop: 90,
        },
    },
    downGrid4: {
        marginTop: 120,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#EDEDED',
        // minHeight: 120
    },
    img2: {
        display: 'flex',
        width: '100%',
        borderRadius: 9
    },
    underGrid: {
        display: 'flex',
        width: 700,
        marginTop: 120,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    jss1: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 9,
        borderBottom: 'solid 3px #0071dc',
        // borderTop: 'solid 1px  #0071dc',
        width: 213,
        height: 223,
        margin: 18,
        boxShadow: '0px 2px 19px -9px #111',
        transition: '0.3s',
        position: 'relative',
        '&:hover': {
            cursor: 'pointer',
            transform: 'translate(0px, -3px)',
            transition: '0.3s',
            "& $down": {

                transition: '1s',
                display: 'flex',
                // bottom: 28,
                opacity: 1
            },

        },
        [theme.breakpoints.down('xs')]: {
            width: 200,
            height: 200,
            margin: 9

        },
        [theme.breakpoints.down('438')]: {
            width: 180,
            height: 180,
            margin: 9
        },
        [theme.breakpoints.down('400')]: {
            width: 160,
            height: 160,
            margin: 9
        },


    },
    jss2: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    jss3: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    img: {
        width: 150,
        [theme.breakpoints.down('xs')]: {
            width: 120
        },
        [theme.breakpoints.down('430')]: {
            width: 100
        },

    },
    img3: {
        width: 100,
        [theme.breakpoints.down('md')]: {
            width: 80
        },
    },
    typo1: {
        padding: 18,
        // paddingLeft: 60,
        // paddingRight: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    typo2: {
        padding: 33,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    poster: {
        width: '100%'
    },
    Sabad: {
        display: 'flex',
        justifyContent: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#111',
        alignItems: 'center',
        position: 'fixed',
        bottom: '50%',
        // top: 0,
        right: 3,
        borderRadius: 30

    },
    SabadTypo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14,
        color: '#fff'
    },
    flash: {
        display: 'flex',
        width: 40,
        position: 'absolute',
        right: 6,
        top: 9,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    down: {
        display: 'flex',
        width: 28,
        position: 'absolute',
        // right: 6,
        bottom: 35,
        transition: '0.3s',
        opacity: 0
    },
    Hamisho: {


        // flexGrow: 1,
        position: 'fixed',
        bottom: 30,
        right: 18,
        display: 'flex',
        zIndex: 1000,

        backgroundColor: '#A85CF9',
        color: '#fff',
        borderRadius: 200,
        transition: '0.5s',

        '&:hover': {


            transition: '0.5s',
            backgroundColor: '#A85CF9',
            color: '#A85CF9',
            '& $imgHamisho': {
                display: 'flex',
                // transform: 'translate(0px, -40px)',
                transition: '0.5s',
                opacity: 100
            }
        },
        flex: 2
    },
    Hamisho2: {


        // flexGrow: 1,
        // position: 'fixed',
        // bottom: 30,
        // right: 18,
        // display: 'flex',
        // zIndex: 1000,

        backgroundColor: '#A85CF9',
        color: '#fff',
        // borderRadius: 200,
        // transition: '0.5s',

        '&:hover': {


            transition: '0.5s',
            backgroundColor: '#A85CF9',
            color: '#fff',
            // '& $imgHamisho': {
            //     display: 'flex',
            //     // transform: 'translate(0px, -40px)',
            //     transition: '0.5s',
            //     opacity: 100
            // }
        },
        flex: 2,
        [theme.breakpoints.down('420')]: {
            fontSize: 13
        }
    },
    imgHamisho: {
        display: 'flex',
        width: 30,
        position: 'absolute',
        zIndex: 100,
        opacity: 0


    },
    Link: {
        position: 'absolute',
        right: 9,
        color: '#fff',
        [theme.breakpoints.down('420')]: {
            fontSize: 13
        },
        [theme.breakpoints.down('375')]: {
            fontSize: 13,
            position: 'static',
            marginLeft: 6
        },
    },
    typo3: {
        [theme.breakpoints.down('420')]: {
            fontSize: 13
        }
    },
    searchGrid:{
        display:'flex',
        width:'100%',
        justifyContent:'center'
    },
    searchB:{
        display:'flex',
        backgroundColor:"#a85cf9",
        marginTop:9,
        color:'#fff'
    }


}))