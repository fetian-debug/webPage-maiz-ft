import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRight";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
