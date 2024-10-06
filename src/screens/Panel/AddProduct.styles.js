import React from 'react'
import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    rootShop: {
        display: 'flex',
        paddingTop: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    topGrid: {
        // marginTop: 9,
        // marginBottom: 9,
        display: 'flex'
    },
    slideGrid: {

        height: 550,
        marginTop: 71,
        padding: 10,
        textAlign: "-webkit-center",


        [theme.breakpoints.down('sm')]: {
            marginTop: 68,

        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 18,
            height: 499,

        },

    },
    detailsGrid: {
        // height: 350,
        // backgroundColor: '#111',
        marginTop: 71,
        padding: 18,
        paddingTop: 9,

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
        height: 500,
        // backgroundColor: 'red',

        [theme.breakpoints.between('sm', 'md')]: {
            width: '70%'
        }
    },
    image: {
        width: '100%',
        height: 500,
        borderRadius: 9,

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
    updateMain: {
        display: 'flex',
        justifyContent: 'center',
        borderTop: 'solid 2px #111',
        marginTop: 18,
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainTypo: {
        marginTop: 7
    },
    MainButton: {
        backgroundColor: 'rgb(0, 102, 255)',
        color: '#fff',
        marginTop: 18
    },
    MainInput: {
        marginTop: 18,
        width:'100%'
    },
    textF1: {
        display: 'flex',
        width: 300,
        color: '#fff',
        // height:20,
        transition: '0.3s',
        backgroundColor: '#000000',
        borderRadius: 18,
        boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px;',
        // alignItems:'center',
        // justifyContent:'center',
        marginTop:30,
        '&:hover': {

            // opacity:'0.9',
            '& ::before': {
                borderBottom: 'none',
                '&:hover': {
                    borderBottom: 'none',
                }
            },

        },
        "& .MuiFilledInput-root": {
            backgroundColor: 'transparent',
            color: '#fff',
            height: 50,
            fontSize:13

        },
        '& label': {
            color: '#fff',
            fontSize:13,
            opacity:0.5,
            position:'absolute',
            left:30
        },
        "& .MuiInput-underline:before": {
            borderBottom: "none"
        },
        "& .MuiInput-underline:after": {
            borderBottom: "none"
        },
        "& .MuiInput-underline:hover:before": {
            borderBottom: "none"
        },

        // '&:hover': {
        //     borderBottom: 'none',
        //     backgroundColor: '#fff',
        //     borderRadius: 18,
        //     opacity: 0.1,
        //     transition: '0.3s',
        // },
        '& ::before': {
            borderBottom: 'none',
            '&:hover': {
                borderBottom: 'none',
            }
        },
        '& ::after': {
            borderBottom: 'none',
            '&:hover': {
                borderBottom: 'none',
            }
        },
        '& .css-1q60rmi-MuiAutocomplete-endAdornment': {
            position: 'absolute',
            right: 50,
            top: 'calc(50% - 14px)',
            // backgroundColor: '#ffffff17',
            borderRadius: 9,
            display:'flex'
        },
        '& .css-62e83j-MuiCircularProgress-root':{
            position: 'absolute',
            top: '10px',
            right: '10px',
        },
        '& .css-9e5uuu-MuiPaper-root-MuiAutocomplete-paper':{
            backgroundColor:'#111'
        }
    },
    textF2: {
        display: 'flex',
        width: '100%',
        color: '#111',
        // height:'100%',
        transition: '0.3s',
        // backgroundColor: '#fff',
        borderRadius: 30,
         '&:hover': {
            borderBottom: 'none',
            backgroundColor: '#111',
            borderRadius: 18,
            opacity: 1,
            transition: '0.3s',
            fontSize:10
        },

    },
}))