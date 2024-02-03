/* eslint-disable react/prop-types */
import { OFFERLOGO_URL } from "../../utils/constants";

const MenuOffers = ({ info }) => {
  const { header, offerLogo, couponCode, description } = info;

  return (
    <div className="offer-box">
      <div>
        <img src={OFFERLOGO_URL + offerLogo} alt="" />
        {header}
      </div>
      <span>
        {couponCode} | {description}
      </span>
    </div>
  );
};

export default MenuOffers;
