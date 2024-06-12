import Navbar from "./Navbar";
import Marque from "./Marque";
import { Outlet } from "react-router-dom";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../Assets/qZone1.png";
import qZone2 from "../Assets/qZone2.png";
import qZone3 from "../Assets/qZone3.png";
import bgImage from "../Assets/bg.png";

export default function Feed() {
  const myBackground = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <Marque />
      <Navbar />
      <section className="feed-container grid md:grid-cols-4 gap-8 mt-[70px]">
        <div className="col-span-1 md:col-span-3">
          <Outlet />
        </div>
        <div className="col-span-1">
          {/* Third party login */}
          <div>
            <h1 className="text-2xl font-semibold mb-4">Login with</h1>
            <div className="border border-blue-500 text-blue-500 flex gap-2 items-center justify-center p-2 rounded-md cursor-pointer">
              <FaGoogle />
              <p>Login with Google</p>
            </div>
            <div className="border border-black text-black flex gap-2 items-center justify-center p-2 rounded-md mt-2 cursor-pointer">
              <FaGithub />
              <p>Login with Github</p>
            </div>
          </div>
          {/* Find us On */}
          <div className="mt-10">
            <h1 className="text-2xl font-semibold mb-4">Find us on</h1>
            <div>
              <div className="flex items-center gap-2 border p-4 border-b-0">
                <div className="rounded-full p-2 bg-slate-200 text-blue-500">
                  <FaFacebookF />
                </div>
                <p>Facebook</p>
              </div>
              <div className="flex items-center gap-2 border p-4">
                <div className="rounded-full p-2 bg-slate-200 text-cyan-500">
                  <FaTwitter />
                </div>
                <p>Twitter</p>
              </div>
              <div className="flex items-center gap-2 border p-4 border-t-0">
                <div className="rounded-full p-2 bg-slate-200 text-[#D82D7E]">
                  <FaInstagram />
                </div>
                <p>Instagram</p>
              </div>
            </div>
          </div>
          {/* Q Zone */}
          <div className="mt-4 bg-[#F3F3F3] p-4">
            <h1 className="text-2xl font-semibold mb-4">Q-Zone</h1>
            <div className="flex flex-col gap-4">
              <img src={qZone1} alt="" />
              <img src={qZone2} alt="" />
              <img src={qZone3} alt="" />
            </div>
          </div>
          {/* Amazing newspaper */}
          <div className="mt-4 px-14 py-20" style={myBackground}>
            <h1 className="text-white text-[30px] text-center font-semibold">
              Create an Amazing Newspaper
            </h1>
            <p className="text-white text-center my-[20px]">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="bg-[#D72050] text-white px-6 py-2 rounded-md block mx-auto">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
