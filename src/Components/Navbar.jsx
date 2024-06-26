import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import userImage from "../Assets/user.png";
import { AuthContext } from "../Providers/AuthProvider";

export default function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        alert("User logged out");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navLinks = (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/career">Career</Link>
    </>
  );

  return (
    <div className="flex justify-between items-center">
      {/* Navbar for small device */}
      <div className="relative lg:hidden">
        <FaBars onClick={handleToggle} className="text-2xl cursor-pointer" />
        <ul
          className={`flex flex-col bg-slate-200 p-4 absolute left-8 top-0 rounded-md ${
            toggle ? "block" : "hidden"
          }`}
        >
          {navLinks}
        </ul>
      </div>
      {/* Navbar for larger device */}
      <div className="hidden lg:block">
        <ul className="flex gap-4">{navLinks}</ul>
      </div>
      <div>
        {user ? (
          <div className="flex gap-2 items-center">
            <img width={40} height={40} src={userImage} alt="" />
            <button
              onClick={handleLogOut}
              className="bg-[#403F3F] text-white px-6 py-1 rounded-md cursor-pointer"
            >
              Sing Out
            </button>
          </div>
        ) : (
          <Link to="/account/login" className="flex gap-2 items-center">
            <button className="bg-[#403F3F] text-white px-6 py-1 rounded-md cursor-pointer">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
