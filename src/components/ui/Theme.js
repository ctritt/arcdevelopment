import { createMuiTheme } from '@material-ui/core/styles';

const ARC_BLUE = '#0B72B9';
const ARC_ORANGE = '#FFBA60';

export default createMuiTheme({
    palette: {
        common: {
            blue: ARC_BLUE,
            orange: ARC_ORANGE
        },
        primary: {
            main: ARC_BLUE
        },
        secondary: {
            main: ARC_ORANGE
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        }
    }
})