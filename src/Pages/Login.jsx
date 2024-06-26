import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

export default function Login() {
  const { handleLoginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLoginUser(email, password)
      .then(() => {
        if (location.state) {
          navigate(`${location.state}`);
        } else {
          navigate("/");
        }
        alert("User logged in");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="bg-[#F3F3F3] mt-32 p-10 lg:w-[600px] lg:mx-auto">
      <h1 className="text-[35px] text-[#403F3F] font-semibold text-center">
        Login with your account
      </h1>
      <hr className="my-4" />
      <form onSubmit={handleLoginForm} className="flex flex-col gap-6">
        <div>
          <label className="text-xl font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="block px-4 py-4 rounded-md w-full mt-2"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-xl font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="block px-4 py-4 rounded-md w-full mt-2"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <input
            className="bg-[#403F3F] w-full text-white px-6 py-4 rounded-md cursor-pointer"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <div>
        <p className="text-center mt-4 font-semibold">
          Don&apos;t have an account?{" "}
          <Link to="/account/register" className="text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
