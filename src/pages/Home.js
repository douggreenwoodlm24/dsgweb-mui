import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import CodeExamples from "../components/CodeExamples";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import NavAppBar from "../components/NavAppBar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function DarkModeToggle() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default function Home() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <DarkModeToggle />
        <CssBaseline />
        {/* App bar (top nav) /start */}
        <NavAppBar />
        {/* App bar (top nav) /end */}
        <main>
          {/* Intro /start */}
          <Intro />
          {/* Intro /end */}
          {/* Skills /start */}
          <Skills />
          {/* Skills /end */}
          {/* Portfolio /start */}
          <Portfolio />
          {/* Portfolio /end */}
          {/* Code examples /start */}
          <CodeExamples />
          {/* Code examples /end */}
        </main>
        {/* Footer */}
        <Footer />
        {/* End footer */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
