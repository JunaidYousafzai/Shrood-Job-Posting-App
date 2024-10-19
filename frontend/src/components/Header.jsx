import { NavLink } from "react-router-dom";
import { useAuthentication } from "../context/AuthContext";

const Header = () => {
  const { user, setUser } = useAuthentication();

  const logOut = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setUser({ username: null, email: null, token: null });
  };

  return (
    <header className="bg-base-100">
      <div className="container mx-auto font-bold flex flex-col my-2 lg:flex-row lg:justify-between items-center">
        <NavLink to="/" className="text-4xl text-center my-2 lg:mb-0">
          Shrood
        </NavLink>
        <nav className="w-full">
          <ul className="menu menu-horizontal flex justify-center lg:justify-end">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : "text-black"
                }
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : "text-black"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              {!user.email ? (
                <NavLink
                  to="/signIn"
                  className="bg-red-950 px-4 py-2 rounded-lg border hover:border-red-950 hover:text-red-950 text-white"
                >
                  Sign In
                </NavLink>
              ) : (
                <details className="relative z-50">
                  <summary className="cursor-pointer text-black hover:text-red-500 z-50">
                    Profile
                  </summary>
                  <ul className="absolute bg-white z-50">
                    <li>
                      <NavLink
                        to="/profile"
                        className="block p-2 hover:bg-gray-100"
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/post-job"
                        className="block p-2 hover:bg-gray-100"
                      >
                        Post Job
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/my-jobs"
                        className="block p-2 hover:bg-gray-100 whitespace-nowrap"
                      >
                        Posted Jobs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home"
                        className="bg-red-950 px-4 py-2 rounded-lg border hover:border-red-950 hover:text-red-950 text-white"
                        onClick={logOut}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </details>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
