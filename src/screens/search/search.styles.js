import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({

    rootShop: {
        width: '100%',
        display: 'flex',
        paddingTop: 90,
        padding: 18,
        [theme.breakpoints.down('372')]: {
            padding: 0,
            paddingTop: 30
        },
        [theme.breakpoints.down('600')]: {
            padding: 7,
            paddingTop: 60
        },
        flexDirection: 'column'
    },
    rootShop2: {
        width: '100%',
        display: 'flex',
        paddingTop: 90,
        padding: 18,
alignItems:'center',
        [theme.breakpoints.down('600')]: {
            padding: 7,
            paddingTop: 90
        },
        [theme.breakpoints.down('320')]: {
            // padding: 0,
            paddingTop: 110
        },
        flexDirection: 'column'
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
        // padding: 18,
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
    InfiniteScroll: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        
    },
    Hamisho2: {


        // flexGrow: 1,
        // position: 'fixed',
        // bottom: 30,
        // right: 18,
        // display: 'flex',
        // zIndex: 1000,
        width: '100%',
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
        [theme.breakpoints.down('xs')]: {
            fontSize: 13
        }
    },
    Link: {
        position: 'absolute',
        right: 9,
        color: '#fff',
        [theme.breakpoints.down('xs')]: {
            fontSize: 13
        },
        [theme.breakpoints.down('375')]: {
            fontSize: 13,
            position: 'static',
            marginLeft: 6
        },
    },
    typo3: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 13
        }
    },
    llkj: {

        '& label': {
            marginLeft: 23,
            color: '#111',
            fontSize: 13

        }
    },
    kkiou: {
        display: 'flex',
        width: '90%',
        marginTop: 18,
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    jhyu: {
        width: '90%',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
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
    imgHamisho: {
        display: 'flex',
        width: 30,
        position: 'absolute',
        zIndex: 100,
        opacity: 0


    },



}))