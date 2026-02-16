import { useDispatch } from "react-redux";
import { removeToast, removeToCollection } from "../features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCollection = (item) => {
    dispatch(removeToCollection(item));
    removeToast();
  };
  return (
    <div className="w-[18vw] h-50 rounded-xl bg-white my-5 overflow-hidden relative">
      <a target="_blank" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.thumbnail}
            alt={item.title}
          />
        ) : (
          " "
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div className="bottom absolute bottom-0 flex justify-between w-full items-center px-3 gap-2">
        <h2 className=" py-3 font-semibold text-sm  capitalize h-16 overflow-hidden ">
          {item.title}
        </h2>
        <button
          onClick={() => {
            removeFromCollection(item);
          }}
          className="bg-green-600 text-sm py-1 px-3 rounded cursor-pointer active:scale-95"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
