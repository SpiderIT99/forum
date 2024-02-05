import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material";
import { routes } from "./app/routes";
import { store } from "./app/store";

const router = createBrowserRouter(routes);

// MUI
const darkPalette = {
  mode: "dark",
  primary: {
    main: "#98ce90",
  },
  secondary: {
    main: "#bad0b6",
  },
};
const lightPalette = {
  mode: "light",
  primary: {
    main: "#02191e",
  },
  secondary: {
    main: "#548560",
  },
};

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: darkPalette,
    },
    light: {
      palette: lightPalette,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <RouterProvider router={router} />
      </CssVarsProvider>
    </Provider>
  );
}

export default App;
