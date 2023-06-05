import { NavLink } from 'react-router-dom';
import profilePic from '../assets/images/me.jpg';
import menu from '../assets/icons/mobile-menu.svg';
const Navbar = () => {
  return (
    <div className="navbar flex justify-between">
      <div className="flex-1 gap-40 items-center">
        <div className="flex items-center">
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQFp8rS9GGBjOg/company-logo_200_200/0/1624400083492?e=1694044800&v=beta&t=MpusRa2YbrI2W_GuUBvG6FxyH_bNtGEt3dDdjUExEJs"
            alt="icon"
            className="h-10"
          />
          <a className="btn btn-ghost normal-case text-xl">OYOTEE</a>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive
                ? 'text-[#9A4B9C] h-12 flex items-center justify-center cursor-pointer text-sm font-medium border-b-2 border-b-[#9A4B9C] py-7'
                : ' h-12 flex items-center justify-center cursor-pointer text-sm font-medium py-7'
            }
            end
          >
            Shop
          </NavLink>
          <NavLink
            to="/new"
            className={({ isActive }) =>
              isActive
                ? 'text-[#9A4B9C] h-12 flex items-center justify-center cursor-pointer text-sm font-medium border-b-2 border-b-[#9A4B9C] py-7'
                : ' h-12 flex items-center justify-center cursor-pointer text-sm font-medium py-7'
            }
            end
          >
            Add New
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-[#9A4B9C] h-12 flex items-center justify-center cursor-pointer text-sm font-medium border-b-2 border-b-[#9A4B9C] py-7'
                : ' h-12 flex items-center justify-center cursor-pointer text-sm font-medium py-7'
            }
            end
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-[#9A4B9C] h-12 flex items-center justify-center cursor-pointer text-sm font-medium border-b-2 border-b-[#9A4B9C] py-7'
                : ' h-12 flex items-center justify-center cursor-pointer text-sm font-medium py-7'
            }
            end
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      <div className=" flex gap-4 items-center">
        <div className="hidden md:block dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item animate-pulse">
                8
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="md:hidden flex gap-4 items-center h-12 dropdown dropdown-hover dropdown-bottom dropdown-end "
        >
          <img src={menu} alt="" />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-4  bg-base-100 rounded-box w-60 flex flex-col gap-4 text-neutral-dark shadow-2xl shadow-gray-950 "
          >
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#9A4B9C] h-12 flex items-center justify-center cursor-pointer text-sm font-medium border-b-2 border-b-[#9A4B9C] py-7'
                    : ' h-12 flex items-center justify-center cursor-pointer text-sm font-medium py-7'
                }
                end
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
                <p>Cart</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="."
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#9A4B9C] h-12 flex items-center justify-center cursor-pointer text-sm font-medium border-b-2 border-b-[#9A4B9C] py-7'
                    : ' h-12 flex items-center justify-center cursor-pointer text-sm font-medium py-7'
                }
                end
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#9A4B9C] h-12 flex items-center justify-center cursor-pointer text-sm font-medium border-b-2 border-b-[#9A4B9C] py-7 '
                    : ' h-12 flex items-center justify-center cursor-pointer text-sm font-medium py-7'
                }
                end
              >
                Add New
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#9A4B9C] h-12 flex items-center justify-center cursor-pointer text-sm font-medium border-b-2 border-b-[#9A4B9C] py-7 '
                    : ' h-12 flex items-center justify-center cursor-pointer text-sm font-medium py-7'
                }
                end
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={profilePic} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;