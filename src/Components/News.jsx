import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

export default function News() {
  const [data, setData] = useState([]);
  const newsData = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    setData(newsData);
  }, [newsData]);

  if (data.length === 0) {
    return (
      <span className="loading loading-ring loading-lg h-screen block m-auto"></span>
    );
  }

  const getData = data.find((d) => d._id === id);

  return (
    <div className="mt-20">
      <h1 className="text-xl font-semibold">Dragon News</h1>
      {/* News card */}
      <div className="mt-10 border p-8">
        <div>
          <img className="w-full" src={getData.image_url} alt="" />
        </div>
        <h1 className="text-xl font-semibold mt-4">{getData.title}</h1>
        <p className="text-[#706F6F] my-4">{getData.details}</p>
        <hr className="mt-2 mb-4" />
        <Link to="/">
          <button className="flex items-center justify-center gap-2 text-white bg-[#D72050] px-4 py-2 cursor-pointer">
            <FaArrowLeftLong />
            <p>All news in this category</p>
          </button>
        </Link>
      </div>

      <div className="mt-10">
        <h1 className="text-xl font-semibold">Editors Insight</h1>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {data.slice(0, 3).map((d) => (
            <div key={d._id}>
              <div>
                <img className="rounded-xl" src={d.image_url} alt="" />
              </div>
              <h1 className="text-md font-semibold my-4">{d.title}</h1>
              <div className="flex items-center gap-2">
                <CiCalendar />
                <p>{d.author.published_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
