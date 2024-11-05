import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ title, description, path }) {
  let customDesc = description;
  return (
    <>
      <div className="flex p-2 md:mb-4 sm:mb-4 flex-col h-[400px] min-w-[300px] border border-indigo-100 rounded-md">
        <div className="grow">
          <div className="text-[25px] font-medium">{title}</div>
          <div>{customDesc}</div>
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

export default Card;
