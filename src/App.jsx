import { useEffect } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import useRestaurant from "./hooks/useRestaurant";

function App() {
  useRestaurant([]);

  return (
    <>
      <div className="flex flex-col relative min-w-[1240px] min-h-full pt-20">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
