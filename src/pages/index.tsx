import React from "react";
import Layout from "@theme/Layout";
import { theme } from "../muiTheme";
import { Redirect } from "@docusaurus/router";
import { ThemeProvider } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";

const Home = () => {
  const { isDarkTheme } = useColorMode();
  return (
    <ThemeProvider theme={theme(isDarkTheme)}>
      <Redirect to="/docs/intro" />
    </ThemeProvider>
  );
};

const App = () => (
  <Layout>
    <Home />
  </Layout>
);

export default App;
