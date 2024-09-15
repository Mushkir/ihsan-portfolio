import { Outlet } from "react-router-dom";
import TheNavBar from "../components/TheNavBar";

const TheGuestLayout = () => {
  return (
    <div className="font-nunito">
      <TheNavBar />
      <Outlet />
    </div>
  );
};

export default TheGuestLayout;
