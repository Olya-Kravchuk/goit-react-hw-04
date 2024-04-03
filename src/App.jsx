
import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { getPhotos } from "./service/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";


const App = () => {
  const [photos, setPhotos] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
    async function handleSearch() {
      try {
        setLoading(true);
        setError(false);
        const data = await getPhotos(query, page);
        if (Array.isArray(data)) {
          setPhotos((prevPhotos) => [...prevPhotos, ...data]);
          setTotalPages(data.total_pages);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    handleSearch();
  }, [query, page]);

  const handleQuery = (newQury) => {
    setQuery(newQury);
    setPhotos(null);
    setPage(1);
    setTotalPages(0);
  };


  const loadMorePhotos = () => {
    setPage((totalPages) => totalPages + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleQuery} />
      {totalPages > page && ( <LoadMoreBtn loadMorePhotos={loadMorePhotos} /> )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    
      {photos !== null && ( <ImageGallery photos={photos} /> )}
     
    </div>
  );
};

export default App;
