import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
    console.log("form submitted");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="flex justify-center bg-gray-900 gap-5 px-14 py-10 rounded ">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Search..."
            className="p-2 rounded outline-none border w-3/4"
          />
          <button className="cursor-pointer bg-(--c2) px-3 outline-none  rounded active:scale-95">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
