import { useEffect, useState } from "react";
import Movies from "./Movies";

export default function MovieContainer(props) {
   
  // le input=${props.input}
  const [moviesData, setMoviesData] = useState([]);
  
  useEffect(() => {
   
    const url = `https://api.themoviedb.org/3/search/movie?query=${props.input}&api_key=22a9a0b10eff5b8ad22ee6dce1560f60`;
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const moviesData = data.results;
      //console.log(moviesData);
      setMoviesData(moviesData);
    };
    fetchData();
  }, [props.input]);

  return (
    <div>
      {/* <p>{props.input}</p> */}
      <Movies moviesData={moviesData} />
    </div>
  );
}
