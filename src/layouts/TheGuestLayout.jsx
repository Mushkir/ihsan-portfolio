import { Outlet } from "react-router-dom";
import TheNavBar from "../components/TheNavBar";
import TheFooter from "../components/TheFooter";

const TheGuestLayout = () => {
  return (
    <div className="font-nunito">
      <TheNavBar />
      <main className="min-h-[calc(100vh-120px)] bg-sky_blue">
        <Outlet />
      </main>
      <TheFooter />
    </div>
  );
};

export default TheGuestLayout;
