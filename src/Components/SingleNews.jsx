import PropTypes from "prop-types";
import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SingleNews({ data }) {
  const { author, title, image_url, rating, total_view, details } = data;

  return (
    <div className="border">
      <div className="flex items-center justify-between bg-[#F3F3F3] p-4">
        <div className="flex items-center gap-2">
          <img
            width={40}
            height={40}
            className="rounded-full"
            src={author.img}
            alt=""
          />
          <div className="text-[14px]">
            <p className="font-semibold">{author.name}</p>
            <p className="text-[12px]">
              {author?.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center text-[#706F6F]">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-[20px] font-semibold mb-4">{title}</h1>
        <img src={image_url} alt="" />
        <div className="mt-6">
          <p>
            {details.length > 200 ? details.slice(0, 200) + "..." : details}
            <Link className="text-[#FF8C47] cursor-pointer hover:underline">
              Read More
            </Link>
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p>{rating.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleNews.propTypes = {
  data: PropTypes.object,
};
