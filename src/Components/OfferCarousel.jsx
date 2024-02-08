/* eslint-disable react/prop-types */
import { OFFERLOGO_URL } from "../../utils/constants";

const OfferCarousel = ({ info }) => {
  const { header, offerLogo, couponCode, description } = info;

  return (
    <div className=" cursor-pointer shrink-0 text-sm mx-2 pr-12 p-2 flex justify-start flex-col border border-[e9e9eb] rounded-md shadow">
      <div className="flex items-center text-[3e4512] font-semibold">
        <img src={OFFERLOGO_URL + offerLogo} alt="" />
        {header}
      </div>
      <span className="text-xs text-[#686b78]">
        {couponCode} | {description}
      </span>
    </div>
  );
};

export default OfferCarousel;
