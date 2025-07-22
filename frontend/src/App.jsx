import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Box>
      <Navbar />
      <AppRoutes />
    </Box>
  );
};

export default App;
