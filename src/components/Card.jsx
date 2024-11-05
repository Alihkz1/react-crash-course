import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function Card({ title, description, path }) {
  const [seeMore, setSeeMore] = useState(false);
  let displayingDescription = description.substring(0, 100) + "...";
  if (seeMore) {
    displayingDescription = description;
  }

  function handleSeeMore() {
    setSeeMore((state) => !state);
  }

  return (
    <>
      <div className="flex p-2 md:mb-4 sm:mb-4 flex-col h-[400px] min-w-[300px] border border-indigo-100 rounded-md">
        <div className="grow">
          <div className="text-[25px] font-medium font-serif">{title}</div>
          <div>
            {displayingDescription}
            <span
              className="text-sky-400	ms-2 text-[14px] cursor-pointer"
              onClick={handleSeeMore}
            >
              {seeMore ? "See Less" : "See More"}
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            className="bg-indigo-100 mr-4 mb-2 px-2 py-1 cursor-pointer rounded-md border border-gray-200"
            to={path}
          >
            Explore
          </Link>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Card;
