import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import english from "./translation/en.json";
import german from "./translation/de.json";
// need do add more languages when needed default langauge is de
const language = navigator.language;
let languageText = german;
let languageInt: string = "de";
if (language === "en-US") {
  languageText = english;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale={languageInt} messages={languageText}>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        ></ColorModeScript>
        <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
    </IntlProvider>
  </React.StrictMode>
);
