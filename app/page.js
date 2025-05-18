"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);
const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      );
      setMovies(res.data.results);
    }
    fetchData();
  }, []);

  const nextSlide = () => setCurrent((current + 1) % 5);
  const prevSlide = () => setCurrent((current - 1 +5) % 5);

  return (
    <>
      {/* Slider */}
     
        {movies.length > 0 ? (
      <div className="relative w-full max-w-2xl mx-auto mt-10 rounded overflow-hidden border border-purple-950" style={{ backgroundColor: '#0a0a0a' }}>
            {movies[current] && movies[current].poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movies[current].poster_path}`}
                alt="Slide"
                className="w-full h-64 object-contain"
              />
            ) : (
              <div className="text-white text-center">Poster not available</div>
            )}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-75"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-75"
            >
              ›
            </button>
      </div>
        ) : (
                <div className="text-white text-center">Loading...</div>
        )}

      {/* TrendingNow */}
      {/* {movies.length > 0 ? (
        movies.slice(0, 4).map((movie, index) =>
        {
          <>
          
          </>
        }
        )):
        
        (<>
        
        </>


        )
      } */}
 {movies.length>0 ?(
        <>
        <div className="text-yellow-100 ml-10 tracking-[.2em] font-semibold text-xl mt-10 mb-5 ">
          Trending Now
        </div>
        </>
      ):(<>
      
      </>)}
        <div className="flex flex-wrap p-10 gap-x-10">
      {/* Loop through the first 4 movies only */}
     
      {movies.length > 0 ? (
        movies.slice(6, 12).map((movie, index) => (
          <div key={index} onClick={() => router.push(`/movies/${movie.id}`)}
  className="group relative cursor-pointer w-[30%]  p-4 rounded-lg shadow-md border border-purple-950 mb-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: '#0a0a0a' }}>
            {/* Movie Poster */}
              <div className="relative">

            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="text-white text-center mb-4">Poster not available</div>
            )}
   <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
      ⭐ {movie.vote_average}
    </div>
</div>
            {/* Movie Details */}
            <div className="text-white">
              {/* Movie Title */}
              <h3 className="text-base tracking-[.2em] font-semibold mb-2">{movie.title}</h3>

              {/* Movie Overview */}
              {/* <p className="text-sm mb-4 text-gray-400">{movie.overview.length > 150 ? `${movie.overview.substring(0, 150)}...` : movie.overview}</p> */}

              {/* Movie Rating */}
              {/* <div className="text-yellow-500 font-semibold">Rating: {movie.vote_average}</div> */}
            </div>
          </div>
        ))
      ) : (
        <></>
        // <div className="text-white text-center">Loading...</div>
      )}
    </div>
    </>
  );
}
