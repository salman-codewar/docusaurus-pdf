import { createTheme } from "@mui/material/styles";
const theme = (isDarkmode: boolean) =>
  createTheme({
    palette: {
      mode: isDarkmode ? "dark" : "light",
    },
  });

export { theme };
