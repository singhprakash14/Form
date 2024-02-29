

import { ThemeProvider, createTheme ,responsiveFontSizes} from '@mui/material/styles';
import AllRoutes from './routes/AllRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css'

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Quicksand",
      textTransform: "none",
      fontSize: 16,
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>

        <AllRoutes/>
        </Provider>
      </ThemeProvider>
  );
}

export default App;