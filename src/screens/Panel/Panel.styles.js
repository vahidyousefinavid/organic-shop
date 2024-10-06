import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({

    root: {
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80
    },
    grid1: {
        backgroundColor: '#2FDD92',
        height: 250,
        margin: 9,
        width: 250,
        borderRadius: 9

    },
    grid2: {
        backgroundColor: '#99FEFF',
        height: 250,
        margin: 9,
        width: 250,
        borderRadius: 9

    },
    grid3: {
        backgroundColor: '#FF5F7E',
        height: 250,
        margin: 9,
        width: 250,
        borderRadius: 9

    },
    grid4: {
        backgroundColor: '#BC8CF2',
        height: 250,
        margin: 9,
        width: 250,
        borderRadius: 9

    },
    grid5: {
        backgroundColor: '#9AE66E',
        height: 250,
        margin: 9,
        width: 250,
        borderRadius: 9

    },
    Button1: {
        width: '100%',
        display: 'flex',
        height: '100%'
    },

    try:{
        display:'flex',
        position:'absolute',
        top:150,
        right:18,
        backgroundColor:'#111',
        color:'#fff',
        width:80,
        height:80,
        borderRadius:80,
        justifyContent:'center',
        alignItems:'center',
        zIndex:100
    }


}))