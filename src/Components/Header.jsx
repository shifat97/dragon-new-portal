import logo from "../Assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <div>
      <div>
        <img className="block mx-auto" src={logo} alt="" />
      </div>
      <div className="text-center mt-4 text-[#706F6F]">
        <p>Journalism Without Fear or Favour</p>
        <p className="text-xl mt-2">
          {" "}
          <span className="font-semibold">{moment().format("dddd")}</span>{" "}
          {moment().format(", MMMM D, YYYY")}
        </p>
      </div>
      <div className="bg-[#F3F3F3] flex items-center gap-2 p-4 my-4 rounded-md">
        <button className="bg-[#D72050] text-white px-6 py-2 rounded-md">
          Latest
        </button>
        <Marquee>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
}
