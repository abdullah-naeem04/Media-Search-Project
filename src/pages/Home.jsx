import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/resultGrid";
import Navbar from "../components/Navbar";
const Home = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white ">
      <Navbar />
      <SearchBar />
      {query && <Tabs />}
      {query && <ResultGrid />}
    </div>
  );
};

export default Home;
