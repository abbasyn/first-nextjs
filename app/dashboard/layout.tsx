import React, { Children } from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex gap-8 items-center">
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>

      <div className="flex ">
        <div className="h-screen bg-black w-[16vw]">
          <ul className="flex-col  text-white  gap-4 p-2 pt-5">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/todos">Todos</Link>
            </li>
            <li>
              <Link href="/dashboard/product">Product</Link>
            </li>
            <li>
              <Link href="/dashboard/profile">Profile</Link>
            </li>
            <li>
              <Link href="/dashboard/lists">List</Link>
            </li>
          </ul>
        </div>
        <div className="text-black max-h-screen overflow-auto ">
          {props.children}
        </div>
      </div>

      <div className="bg-black py-6 text-white text-center"> FOOTER </div>
    </div>
  );
};

export default DashboardLayout;
