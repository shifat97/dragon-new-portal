import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import { CiCalendar } from "react-icons/ci";
import SingleNews from "./SingleNews";
import { useEffect, useState } from "react";

export default function AllNews() {
  const [data, setData] = useState([]);
  const newsData = useLoaderData();

  useEffect(() => {
    setData(newsData);
  }, [newsData]);

  if (data.length === 0) {
    return (
      <span className="loading loading-ring loading-lg h-screen block m-auto"></span>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="col-span-1">
        <h1 className="text-2xl font-semibold mb-4">All Category</h1>
        <Category />
        <div className="flex flex-col gap-4">
          {data.slice(0, 3).map((data) => (
            <div key={data._id}>
              <div>
                <img className="rounded-md" src={data.image_url} alt="" />
              </div>
              <h1 className="text-[20px] font-semibold my-4">{data.title}</h1>
              <div className="flex items-center gap-2 text-[14px]">
                <p>{data.rating.badge}</p>
                <CiCalendar />
                <p>{data.author.published_date.split(" ")[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 grid grid-cols-1 gap-4">
        {data.map((data) => (
          <SingleNews key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}
