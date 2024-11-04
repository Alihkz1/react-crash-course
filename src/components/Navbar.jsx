import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center font-bold text-[24px] h-[50px] bg-slate-300">
        <div className="flex items-center">
          <span className="me-2">
            <FaUserCircle />
          </span>
          <span className="text-[20px]">Ali Hosseinkhani</span>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
