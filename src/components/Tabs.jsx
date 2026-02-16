import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex justify-center gap-5 my-5">
      {tabs.map((elem, idx) => {
        return (
          <button
            className={`${elem == activeTab ? "bg-emerald-600" : "bg-gray-600"} px-4 py-2 transition-all active:scale-95 rounded cursor-pointer`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
