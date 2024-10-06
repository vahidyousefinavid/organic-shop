import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({


    topGrid: {
        // marginTop: 30,
        display: 'flex'
    },
    slideGrid: {

        height: 500,
        marginTop: 80,
        padding: 10,
        textAlign: "-webkit-center",


        [theme.breakpoints.down('md')]: {
            marginTop: 80,
            height: 380

        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 80,
            height: 320

        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 100,
            height: 300,

        },

    },
    detailsGrid: {
        // height: 350,
        // backgroundColor: '#111',
        marginTop: 80,
        padding: 18,
        paddingTop: 18,

        [theme.breakpoints.down('xs')]: {
            marginTop: 18,

        }
    },
    sertificate: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
        marginBottom: 33
    },
    itemRoot: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',

        // [theme.breakpoints.between('sm', 'md')]: {
        //     width: '70%'
        // }
    },
    image: {
        width: '55%',
        height: '55%',
        borderRadius: 9,
        [theme.breakpoints.down('md')]: {
            width: '25%',
            height: '100%',
            maxHeight: 300

        },
        [theme.breakpoints.down('sm')]: {
            width: '30%',
            height: '100%',
            maxHeight: 300

        },

        [theme.breakpoints.down('xs')]: {
            width: '50%',
            height: '100%',
            maxHeight: 300

        },
        [theme.breakpoints.down('450')]: {
            width: 'auto',
            height: 'auto%',
            maxHeight: 300

        },
        [theme.breakpoints.down('360')]: {
            width: '80%',
            height: '80%',
            maxHeight: 300

        },

    },
    bagButton: {
        width: 336,
        backgroundColor: 'rgb(0, 102, 255)',
        color: '#fff',
        [theme.breakpoints.between('0', '320')]: {
            width: 260
        }
    },
    favoritButton: {
        width: 336,
        marginTop: 18,
        border: 'solid 2px',
        [theme.breakpoints.between('0', '320')]: {
            width: 260
        }
    },
    buttonDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 99,
        borderBottom: '1px solid #E1E8EB',
        paddingBottom: 18

    },
    subDiv: {
        marginTop: 9,
        [theme.breakpoints.down('sm')]: {
            marginTop: 18,

        }

    },
    image2: {
        width: '100%',
        borderRadius: 9,
        marginTop: 18,



    },
    image3: {
        width: 109,

        [theme.breakpoints.down('sm')]: {
            width: 99,

        },
        [theme.breakpoints.down('xs')]: {
            width: 66
        },
        [theme.breakpoints.between('0', '310')]: {
            width: 55
        },
    },
    tab: {
        display: 'flex',
        // color: '#111',
        // minWidth: 30,


        [theme.breakpoints.down('xs')]: {
            // minWidth: 30,



        },

        '& button': {
            opacity: 1
        }



    },
    tabC: {
        display: 'flex',
        color: '#111',
        width: 33,
        height: 33,


        opacity: 1,
        borderRadius: 30,
        [theme.breakpoints.down('xs')]: {
            minWidth: 30,

        },
        '& button': {
            opacity: 1
        }


    },
    tab2: {
        display: 'none',




    },
    colorI: {
        width: 18,
        height: 18,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    IMG: {
        display: 'flex',
        width: 33,
        height: 33,
        borderRadius: 50

    },
    Tabs: {
        // display: 'flex',
        color: '#111',
        // backgroundColor: '#e5e5e5',
        borderRadius: 9,
        flexWrap: 'wrap'

    },
    divSize: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginTop: 18
    },
    countDiv: {
        marginTop: 18
    },
    input: {
        width: 80,
        color: '#111',
        fontSize: 23,
        opacity: 1,



    },
    serti: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 90,
        [theme.breakpoints.down('sm')]: {
            marginRight: 18

        },
        [theme.breakpoints.down('xs')]: {
            marginRight: 9

        },
    },
    takhfif: {
        // backgroundColor: '#D9534F',
        borderRadius: 3,
        padding: 3
    },
    takhfif2: {
        display: 'none'
    },
    ddidiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    opoButton: {
        display: 'flex',
        height: 30,
        minWidth: 50,
        margin: 6
    },
    plusButton: {
        display: 'flex',
        height: 30,
        minWidth: 50,
        margin: 6
    },
    typ1: {
        display: 'flex',
        margin: 6

    }



}))