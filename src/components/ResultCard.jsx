import { useDispatch, useSelector } from "react-redux";
import {
  addedToast,
  addToCollection as addToCollectionAction,
  alreadyAddedToast,
} from "../features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const collectionItems = useSelector((store) => store.collection.items);

  const handleAddToCollection = (payload) => {
    const alreadyExists = collectionItems.find(
      (existingItem) => existingItem.id === payload.id,
    );
    if (!alreadyExists) {
      dispatch(addToCollectionAction(payload));
      addedToast();
    } else {
      alreadyAddedToast();
    }
  };
  return (
    <div className="w-[18vw] h-50 rounded-xl bg-white my-5 overflow-hidden relative">
      <a target="_blank" href={item.url}>
        {" "}
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
            handleAddToCollection(item);
          }}
          className="bg-green-600 text-sm py-1 px-3 rounded cursor-pointer active:scale-95"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
