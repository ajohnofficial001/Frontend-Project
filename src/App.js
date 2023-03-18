import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import HomePage from "./components/Homepage";
import { AlertProvider } from "./contexts/useAlertContext";
import Success from "./components/Success";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
