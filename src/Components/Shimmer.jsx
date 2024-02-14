import useRestaurantList from "../../utils/useRestaurantList";

const Shimmer = () => {
  const { homeSuggestions } = useRestaurantList();
  return (
    <div className="shimmer-container">
      {homeSuggestions && (
        <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden">
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
          <div className="h-48 rounded-none cursor-pointer w-40 mx-2  bg-[#F6F6F6]"></div>
        </div>
      )}
      <hr className="my-8 border-1 border-slate-200 w-full" />
      <div className="shimmer-card">
        <div className=" shimmer-img "></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
      </div>

      <div className="shimmer-card">
        <div className=" shimmer-img "></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
      </div>

      <div className="shimmer-card">
        <div className=" shimmer-img "></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
      </div>

      <div className="shimmer-card">
        <div className=" shimmer-img "></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
      </div>

      <div className="shimmer-card">
        <div className=" shimmer-img "></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
      </div>

      <div className="shimmer-card">
        <div className=" shimmer-img "></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
      </div>

      <div className="shimmer-card">
        <div className=" shimmer-img "></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
      </div>

      <div className="shimmer-card">
        <div className=" shimmer-img "></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
        <div className="shimmer-desc shadow"></div>
      </div>
    </div>
  );
};

export default Shimmer;
