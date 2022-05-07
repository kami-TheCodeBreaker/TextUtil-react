import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { ToastContainer } from "react-toastify";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

        <Navbar title="TextUtils"/>
        <ToastContainer/>
        <TextForm/>

      {/* <Router>
        <Navbar title="TextUtils"/>
        <ToastContainer/>
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm/>}
          >
          </Route>
          <Route
            exact
            path="/about"
            element={<About/>}
          ></Route>
        </Routes>
      </Router> */}
    </>
  );
}
export default App;
