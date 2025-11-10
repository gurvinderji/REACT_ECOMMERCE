import { useState } from "react";

const Admin = () => {
  const [size, setSize] = useState(280);
  const [accountMenu, setAccountMenu] = useState(false);
  return (
    <div>
      <aside
        className=" bg-indigo-400 fixed top-0 left-0 h-full"
        style={{ width: size, transition: ".3s" }}
      ></aside>
      <section
        className="bg-gray-100 h-screen"
        style={{ marginLeft: size, transition: ".3s" }}
      >
        <nav className="bg-white p-6 shadow-xl flex items-center justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => setSize(size === 280 ? 0 : 280)}
              className="bg-gray-50 hover:bg-indigo-800 hover:text-white w-8 h-8"
            >
              <i className="ri-menu-2-line text-xl"></i>
            </button>
            <h1 className="text-md font-semibold">Shopcode</h1>
          </div>
          <div>
            <button
              onClick={() => setAccountMenu(!accountMenu)}
              className="relative"
            >
              <img src="./images/avt.webp" className="h-10 w-10 rounded-full" />
              {accountMenu && (
                <div className="absolute top-16 right-0 bg-white w-[200px] p-6 shadow-lg">
                  <div>
                    <h1 className="text-lg font-semibold">gavi</h1>
                    <p className="text-gray-500">gavi@gmail.com</p>
                    <div className="h-px bg-gray-200 my-4" />
                    <button>
                      <i>Logout </i>
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Admin;
