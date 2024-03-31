import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";

function App() {
  return (
    <main className="">
      <Navber></Navber>
      <div className="max-w-screen-xl mx-auto lg:p-0 p-2">
        <Outlet></Outlet>
      </div>
    </main>
  );
}

export default App;
