// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Burger = ({ onClick }: any) => {
  return (
    <div className="flex flex-col">
      <div className="flex pt-4 pb-4 justify-between ">
        <button className="ml-4 flex " onClick={onClick}>
          <img
            className=" cursor-pointer bg-transparent "
            src="../../public/13.svg"
            alt=""
          />
          <p className=" text_bag font-bold ml-3">ProPhone</p>
        </button>
        <img
          src="../../public/14.svg"
          className="pr-4 w-7 h-6 cursor-pointer"
        />
      </div>

      <ul className=" cursor-pointer">
        <li className="flex justify-between ml-3" onClick={onClick}>
          Go to product page <img src="../../public/15.svg" className="mr-3" />
        </li>
        <li className="flex justify-between  ml-3">
          Track your order <img src="../../public/15.svg" className="mr-3" />
        </li>
        <li className="flex justify-between ml-3">
          Contact us <img src="../../public/15.svg" className="mr-3" />
        </li>
        <li className="flex justify-between ml-3">
          FAQs <img src="../../public/15.svg" className="mr-3" />
        </li>
      </ul>
    </div>
  );
};

export default Burger;
