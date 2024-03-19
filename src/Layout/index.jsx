import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="App font-sans-serif mx-auto">
      <header>
        <div className="flex justify-between items-end px-7 py-5 text-primary bg-white fixed left-0 right-0 lg:w-full mx-auto top-0 z-20 border-b border-orange-500">
          <div className="logo">
            <h2 className="font-[cursive] tracking-tighter font-semibold text-xl text-orange-600">
              BI VOTING APP
            </h2>
            <p className="text-[0.6em] italic">Simple and easy voting app</p>
          </div>
          <div className="text-sm text-gray-700">
            <div>
              <a>SignUp</a>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-[38em]">
        <Outlet />
      </main>
      <footer>
        <div className="bg-orange-600 text-white mt-4 py-10 px-4 text-[10px] text-center w-full">
          <p>creatives techmind ~ 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
