import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="p-4 max-w-[1240px] mx-auto">
      <Outlet />
    </div>
  );
}

export default App;
