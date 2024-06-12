import Marquee from "react-fast-marquee";

export default function Marque() {
  return (
    <div>
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
