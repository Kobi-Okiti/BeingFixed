import { Link, Outlet } from "react-router-dom";
import WaitlistForm from "./WaitListForm";

export default function Layout() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-start justify-between">
      <nav className="h-[65px] relative w-full bg-[#FFFFFF] flex flex-row items-center p-[28px]">
        <div className="flex flex-row items-center gap-[]">
          <i className="logo-svg size-[32px]" />
          <p className="p-[10px] text-[14px] font-semibold text-black">
            Beingfixed
          </p>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6">
          <Link to="/" className="!text-[#000000] !font-extrabold text-[14px]">
            Home
          </Link>
        </div>
      </nav>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="bg-[#000000] pt-[54px] flex flex-col items-center !h-[382px] w-full">
        <p className="text-white font-semibold text-[26px]">
          Be the First to Fix Apartment Issues{" "}
          <span className="text-[#005EFF]">Faster</span>
        </p>
        <div className="h-[38px] flex items-center justify-center w-full mt-[26px] text-[#FFFFFF] text-[15px]">
          <p>
            Join the Beingfixed waitlist today and get early access to
            hassle-free apartment maintenance
          </p>
        </div>
        <WaitlistForm style="my-[29px]" />
        <p className="text-[14px] text-[#00A63E]">
            50+ landlords and tenants <span className="text-[#FFFFFF]"> already signed up! </span>
        </p>
      </footer>
    </div>
  );
}
