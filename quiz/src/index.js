import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
const theme = createTheme({});
ReactDOM.createRoot(document.getElementById("root")).render(
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
);
