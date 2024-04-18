import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./utils/Themes";
import { useState } from "react";
import AppAppBar from "./components/AppAppBar";

function App() {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppAppBar mode={mode} />
    </ThemeProvider>
  );
}

export default App;
