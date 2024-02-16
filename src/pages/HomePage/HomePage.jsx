import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/movies";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const fetchTrendMovies = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=826ff55be219075fe0c51d998b696b2f&page=${currentPage}`
        )
        .then((res) => {
          setTotalPages(res.data.total_pages);
          setMovies(res.data.results);
        });
    } catch (error) {
      console.error("Error fetching trend Movies" + error);
    }
  };

  useEffect(() => {
    if (!query) {
      fetchTrendMovies();
    }
  }, [currentPage]);

  const fetchQueryMovies = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US&query=${query}&page=${currentPage}`
        )
        .then((res) => {
          setMovies(res.data.results);
        });
    } catch (error) {
      console.error("Error fetching trend Movies" + error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchQueryMovies();
    }
  }, [query, currentPage]);
  const handleSubmit = (q) => {
    setQuery(q);
  };
  const handleUpdate = () => {
    fetchTrendMovies();
  };

  const handleClick = (value) => {
    const count = totalPages / 20;
    if (value === "plus" && count > currentPage) {
      setCurrentPage(currentPage + 1);
    } else if (value === "minus" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <Navbar
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
        value={true}
      />
      <Movies movies={movies} />
      <Pagination handleClick={handleClick} currentPage={currentPage} />
    </div>
  );
};

export default HomePage;
