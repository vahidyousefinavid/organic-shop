import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'
const theme = createMuiTheme({
    direction: 'rtl',
    palette: palette,
    spacing: 2,
    typography: {
        allVariants: {
            fontFamily: 'IRANSans'
        },
        h1: {
            fontSize: 30,
            fontWeight: 500
        },
        h2: {
            fontSize: 26,
            fontWeight: 500
        },
        h3: {
            fontSize: 23,
            fontWeight: 500
        },
        h4: {
            fontSize: 16,
            fontWeight: 500
        },
        h5: {
            fontSize: 14,
            fontWeight: 500
        },
        h6: {
            fontSize: 12,
            fontWeight: 500
        },
        body1: {
            fontSize: 16,
            fontWeight: 500
        },
        body2: {
            fontSize: 16,
            fontWeight: 500
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 500
        },
        subtitle2: {
            fontSize: 16,
            fontWeight: 500
        },
        caption: {
            fontSize: 16,
            fontWeight: 500
        },
        button: {
            fontSize: 16,
            fontWeight: 500
        },
        overline: {
            fontSize: 16,
            fontWeight: 500,
            textDecoration: 'line-through',
            color: 'red'
        },
        srOnly: {
            fontSize: 16,
            fontWeight: 500,
            color: 'red'
        }
    }
})
export default responsiveFontSizes(theme)