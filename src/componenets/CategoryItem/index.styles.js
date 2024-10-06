import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: 150,
        height: 200,
        backgroundColor: '#f7f7f7',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        cursor: 'pointer',
        textDecoration: 'none',
        color:'#111'

        // boxShadow: 'rgb(0 0 0 / 4%) 0px 2px 24px, rgb(0 0 0 / 5%) 0px 8px 28px;',

    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        marginTop: 25
    }

}))
