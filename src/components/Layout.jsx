import { Outlet } from "@tanstack/react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout() {
  return (
    <div className="bg-[#FFFBF4]">
       <Header />
      <Outlet />
      <Footer /> 
    </div>
  );
}
