import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ToggleContext from "./useContext/ToggleContext";
import LoginPage from "./pages/LoginPage";
import AllAddresses from "./pages/AllAddresses";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Provinces from "./pages/Provinces";
import Districts from "./pages/Districts";
import Corregimientos from "./pages/Corregimientos";
import StructureSytem from "./pages/StructureSytem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";
import AddressDetails from "./pages/AddressDetails";

function App() {
  return (
    <>
      <ChakraProvider>
        <ToggleContext>
          <Router>
            <Routes>
              <Route
                exact
                path="/login"
                element={<ProtectedRoutes component={<LoginPage />} />}
              />
              <Route
                exact
                path="/"
                element={<ProtectedRoutes component={<Home />} />}
              />

              <Route
                exact
                path="/Addresses"
                element={<ProtectedRoutes component={<AllAddresses />} />}
              />
              <Route
                exact
                path="/provinces"
                element={<ProtectedRoutes component={<Provinces />} />}
              />
              <Route
                exact
                path="/districts"
                element={<ProtectedRoutes component={<Districts />} />}
              />
              <Route
                exact
                path="/corregimientos"
                element={<ProtectedRoutes component={<Corregimientos />} />}
              />
              <Route
                exact
                path="/structureSystem"
                element={<ProtectedRoutes component={<StructureSytem />} />}
              />
              <Route
                exact
                path="/addresses/dbs"
                element={<ProtectedRoutes component={<AddressDetails />} />}
              />
            </Routes>
          </Router>
        </ToggleContext>

        <ToastContainer />
      </ChakraProvider>
    </>
  );
}

export default App;
