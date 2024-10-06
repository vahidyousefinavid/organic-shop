import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    Modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '85%',
        backgroundColor: '#fff',
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 9,
        border: '2px solid #111',
        padding: 18,
        overflowY: 'auto',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {

            height: '90%',
            padding: 6,
        },
        [theme.breakpoints.down('370')]: {
            width: '95%',
            height: '90%',
            padding: 6,
        }



    },
    GridModal: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    imgGrid: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        minHeight: 150,
        flex: 1
    },
    img: {
        display: 'flex',
        width: 160,
        [theme.breakpoints.down('xs')]: {

            height: 120,
        }
    },
    topGrid: {
        // marginTop: 9,
        // marginBottom: 9,
        display: 'flex',
        paddingTop: 60
    },

    detailsGrid: {
        width: '100%',
        marginTop: 50,
        padding: 18,
        paddingTop: 9,

        [theme.breakpoints.down('xs')]: {
            marginTop: 18,

        }
    },




    subDiv: {
        marginTop: 9,
        [theme.breakpoints.down('sm')]: {
            marginTop: 18,

        }

    },


    countDiv: {
        marginTop: 18
    },

    takhfif: {
        // backgroundColor: '#D9534F',
        borderRadius: 3,
        padding: 3
    },
    takhfif2: {
        display: 'none'
    },

    bagButton: {
        // display: 'flex',
        marginTop: 18,
        color: '#fff'
    }


}))