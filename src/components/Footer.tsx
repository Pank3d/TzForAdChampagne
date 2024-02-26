import { useState } from "react";

const Footer = () => {
  const [skrito, setSkrito] = useState<boolean>(false);
  const [skrito1, setSkrito1] = useState<boolean>(false);
  const [skrito2, setSkrito2] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-100 ml-3 mr-16">
        <p className="font-bold text-sm w-72 mb-4 ">Shipping & Returns</p>
        <div className="flex text-sm text-pink-600  font-bold mb-4 ">
          <img src="../../public/9.svg" />
          <p className=" w-72">Free delivery in United Kingdom</p>
          <button onClick={() => setSkrito(!skrito)}>
            <img src="../../public/12.svg" />
          </button>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              {skrito ? (
                <>
                  <div className="flex flex-col ">
                    <div className="flex mt-3 mb-3">
                      <img src="../../public/7.svg" />
                      <img src="../../public/5.svg" className="ml-3" />
                      <img src="../../public/6.svg" className="ml-3" />
                      <img src="../../public/8.svg" className="ml-3" />
                    </div>
                    <p className=" text-slate-400">
                      All purchases are shipped from our warehouse in{" "}
                      <span className=" font-bold text-black">
                        United Kingdom{" "}
                      </span>{" "}
                      and are fully insured with a tracking number. Tracked
                      delivery between 2-4 days in{" "}
                      <span className=" font-bold text-black">
                        United Kingdom{" "}
                      </span>{" "}
                      + Free Delivery.
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="flex text-sm text-pink-600  font-bold mb-4 ">
          <img src="../../public/11.svg" />
          <p className=" w-72">3 years warranty</p>
          <button onClick={() => setSkrito1(!skrito1)}>
            <img src="../../public/12.svg" />
          </button>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              {skrito1 ? (
                <>
                  <div className="flex flex-col ">
                    <p className=" text-slate-400">
                      Our product is guaranteed for 3 years from the date of
                      your purchase. For more information, please contact our
                      team.
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="flex text-sm text-pink-600  font-bold mb-4 ">
          <img src="../../public/10.svg" />
          <p className=" w-72">100% money-back guarantee</p>
          <button onClick={() => setSkrito2(!skrito2)}>
            <img src="../../public/12.svg" />
          </button>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              {skrito2 ? (
                <>
                  <div className="flex flex-col ">
                    <p className=" text-slate-400">
                      If you're not satisfied with your purchase, we offer a
                      100% Money Back Guarantee. No Questions Asked.
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
