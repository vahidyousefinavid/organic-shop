import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({

    root: {
        maxWidth: 450,
        height: 550,
        margin: 'auto',
        marginTop: 140,
        backgroundColor: '#fff',
        '&:focus': {
            outline: 'none'
        },


        borderRadius: 5,
        alignItems: 'flex-start',
        padding: 10,
        paddingLeft: 60,
        paddingRight: 60,
        // justifyContent: '',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '90%',
            margin: '10%',
            paddingLeft: 30,
            paddingRight: 30,
            height: 'auto',
        }



    },
    inputclass: {
        marginTop: 9,
        direction: 'rtl'
    },
    signindiv: {
        width: '100%',
        marginTop: 60,

    },
    signindiv2: {
        width: '100%',
        marginTop: 9,

    },
    brandDiv: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 9


    },
    brandImg: {
        width: '65%',
        height: 67,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '75%'
        }
    },
    textDiv: {
        display: 'flex',
        marginTop: 18,
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'center'
    },
    buttomsignin: {
        backgroundColor: 'rgb(0, 102, 255)',
        color: '#fff',
        marginTop: 18,
        '&:hover': {
            backgroundColor: '#3c3b3b'
        }

    },


    typoDiv: {
        width: '100%',
        marginTop: 33,

    },
    typotypo: {
        textAlign: 'center'
    },
    codeInput: {
        display: 'flex',
        justifyContent: 'center',
        direction: 'rtl'
    },
    codeDiv: {
        display: 'flex',
        marginTop: 18,
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center'
    },
    buttomBt: {
        backgroundColor: '#d2d2d2',
        marginTop: 9,

    },
    BtBt: {
        marginTop: 9,


    },
    counterclass: {
        display: 'flex',
        justifyContent: 'center'
    },

    Modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '80%',
        backgroundColor: '#fff',
        // border: '2px solid #000',
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 9,
        flexWrap: 'wrap',
        padding: 18,
        overflowY: 'auto',
        [theme.breakpoints.down('xs')]: {

            height: '80%',
        }



    },
    ModalShop: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '80%',
        backgroundColor: '#fff',
        // border: '2px solid #000',
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 9,
        flexWrap: 'wrap',
        padding: 18,
        overflowY: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            height: '90%',
        }


    },
    flash: {
        display: 'flex',
        width: 40,
        position: 'absolute',
        right: 6,
        top: 9
    },
    down: {
        display: 'flex',
        width: 23,
        position: 'absolute',
        right: 0,
        bottom: 18,
        transition: '0.3s',
        opacity: 0,

    },
    img: {
        width: 90,
        [theme.breakpoints.down('xs')]: {
            width: 70
        },

    },
    jss1: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 9,
        // borderBottom: 'solid 3px #0071dc',
        // borderTop: 'solid 1px  #0071dc',
        width: 180,
        // height: 60,
        margin: 10,
        // boxShadow: '0px 2px 19px -9px #111',
        transition: '0.3s',
        position: 'relative',
        padding: 6,
        '&:hover': {
            cursor: 'pointer',

            transition: '0.3s',
            color: 'rgb(36, 70, 245)',
            "& $tt1": {

                color: 'rgb(36, 70, 245)'
            },
            "& $down": {

                opacity: 1,
                transition: '0.3s'
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
    tt1: {
        display: 'flex',
        color: '#111',
        paddingRight: 18
    },
    typo1: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        color: '#a5a5a5',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        display: 'block',
        overflow: 'hidden',
        paddingRight: 18



    },
    exitDiv: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shopIcon: {
        display: 'flex',
        width: 60,
        height: 60
    },
    aDiv: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 9
    },
    A: {
        textDecoration: 'none'
    }



}))