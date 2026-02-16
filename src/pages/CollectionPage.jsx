import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CollectionCard from "../components/CollectionCard";
import {
  clearCollection as clearCollectionAction,
  clearToast,
} from "../features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const handleClearCollection = () => {
    dispatch(clearCollectionAction());
  };
  const collection = useSelector((state) => state.collection.items);
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      <Navbar />
      {collection.length > 0 ? (
        <div className="py-6 px-6 flex justify-between ">
          <h2 className="text-2xl font-bold mb-4 text-center ">
            Your Collection
          </h2>
          <button
            onClick={() => {
              handleClearCollection();
              clearToast();
            }}
            className="bg-red-500 transition cursor-pointer text-white py-1 px-3 rounded text-base active:scale-95 font-medium h-fit"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center py-10">
            Collection is empty
          </h2>
        </div>
      )}
      <div className="flex flex-wrap gap-4 justify-start overflow-auto px-6">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
