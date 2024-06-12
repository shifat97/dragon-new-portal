import logo from "../Assets/logo.png";
import moment from "moment/moment";

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
    </div>
  );
}
