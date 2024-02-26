// Header.tsx
import "../index.css";
import Marque from "./Marque";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ onClick }: any) => {
  return (
    <header>
      <Marque />
      <div className="pink_bag h-14 flex justify-between   ">
        <div className="flex items-center cursor-pointer">
          <button className="ml-4" onClick={onClick}>
            <img
              className=" cursor-pointer bg-transparent "
              src="../../public/icon.svg"
              alt=""
            />
          </button>
          <p className=" ml-2 text-white font-bold">ProPhone</p>
        </div>
        <button className="mr-4">
          <img src="../../public/burg.svg" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
