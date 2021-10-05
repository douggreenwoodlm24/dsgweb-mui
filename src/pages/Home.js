import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import CodeExamples from "../components/CodeExamples";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import NavAppBar from "../components/NavAppBar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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
  );
}
