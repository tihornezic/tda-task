import {useLocation} from 'react-router-dom'
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoaderSpinner = () => {
    let location = useLocation()

    const theme = createTheme({
        palette: {
            primary: {
                light: '#243857',
                main: '#243857',
                dark: '#243857',
                contrastText: '#fff',
            },
        }
    })

    return (
        <>
            {location.pathname === '/' ?
                <div className='spinner'>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display: 'block'}}>
                            <ThemeProvider theme={theme}>
                                <CircularProgress thickness={5} size={45} />
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>

    )
}

export default LoaderSpinner
