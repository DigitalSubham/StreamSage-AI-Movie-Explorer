import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    if (!upcomingMovies) {
      getupcomingMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getupcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
