import { Outlet } from "react-router-dom";
import TheNavBar from "../components/TheNavBar";
import TheFooter from "../components/TheFooter";
import { motion, useScroll, useSpring } from "framer-motion";

const TheGuestLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="font-nunito">
      <TheNavBar />
      <motion.div
        className="progress-bar fixed bg-blue_25 rounded-r-full left-0 right-0 h-[0.5rem] top-[4.5rem] md:top-[7rem] origin-[0%]"
        style={{ scaleX }}
      />
      <main className="min-h-[calc(100vh-120px)] bg-sky_blue">
        <Outlet />
      </main>
      <TheFooter />
    </div>
  );
};

export default TheGuestLayout;
