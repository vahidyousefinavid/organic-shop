import { makeStyles } from '@material-ui/core'
import bal3 from '../../assets/images/back9.jpg'
export default makeStyles((theme) => ({

    root: {
        maxWidth: 450,
        flexDirection: 'column',
        maxHeight: '70%',
        margin: 'auto',
        marginTop: 140,
        // backgroundImage: `url(${bal3})`,
        backgroundColor: '#fff',
        display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // width: '100%',
        // justifyContent: 'space-around',
        // height: '100%',
        alignItems: 'center',
        overflow: 'auto',
        scrollbarWidth: 0,
        borderRadius: 5,
        padding: 9,
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        '&:focus': {
            outline: 'none'
        },


    },
    Button1: {
        // display:'flex',
        // backgroundColor:'#111',
        // color:'#fff',
        boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px',
    },
    div1: {
        display: 'flex',
        width: 100,
        minHeight: 100,
        borderRadius: 100,
        backgroundColor: '#1111',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px',
        cursor: 'pointer',
        transition: '0.5s',
        '&:hover': {
            boxShadow: 'rgb(0 0 0 / 35%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px',
            transition: '0.5s',

        }
    },
    img1: {
        display: 'flex',
        width: 50,
        height: 70
    },
    div2: {
        display: 'flex',
        width: '80%',
        minHeight: 50,
        boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 24px, rgb(6 34 49 / 8%) 0px 8px 28px',
        marginTop: 60,
        borderRadius: 18,
        justifyContent:'center',
        alignItems:'center'
    },
    tt1: {
        display: 'flex',
        width: '80%',
        border: 'none',

        '& input': {
            border: 'solid 0px #fff'
        }
    },
    div3: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100
    },
    div4: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
    },
    bb2:{
        display:'flex',
        backgroundColor:'rgb(0, 102, 255)',
        marginTop:30,
        width:'80%',
        marginBottom:30,
        color:'#fff'
    },
    tt2:{
        display:'flex',
        color:'red',

    }


}))