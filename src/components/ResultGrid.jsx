import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setError,
  setResults,
  setLoading,
} from "../features/searchSlice";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const resultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, result, loading, error } = useSelector(
    (store) => store.search,
  );
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        } else if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "vedio",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        console.log(data);

        dispatch(setResults(data));
      } catch (err) {
        const message =
          err?.response?.data?.message || err?.message || "Network Error";
        dispatch(setError(message));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);
  if (error) {
    return <h2>Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="flex flex-wrap gap-4 justify-start overflow-auto p-6">
      {result &&
        result.map((item, idx) => {
          return (
            <div key={idx}>
              <ResultCard item={item} />
            </div>
          );
        })}
    </div>
  );
};

export default resultGrid;
