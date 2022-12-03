import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
      primary: {
        main: '#212121'
      },
      secondary: {
        main: '#f5f5f5'
      },
      text: {
        secondary: 'orange'
      }
    }
   })

export default createTheme(theme);