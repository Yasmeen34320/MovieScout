"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { index } = useParams();
  const [movie, setMovie] = useState(null);
const { data: session, status } = useSession();
const router = useRouter();

 
  useEffect(() => {
   
     if (status === 'unauthenticated') {
      setTimeout(() => {
        router.push('/Login');
      }, 2000);
    }
    async function fetchMovie() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${index}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`
      );
      setMovie(res.data);
    }
    fetchMovie();
  }, [index,status, router]);

  if (!movie) return <div className="text-white p-10 text-center">Loading...</div>;
 if (status === 'loading')  return <p>Loading...</p>;
  if (!session) return <p className="text-red-700">Access denied please Login First</p>;
  
  return (
    <div className=" bg-[#0a0a0a] text-white px-10 py-2">
      <div className="w-[80%]   rounded-xl shadow-lg px-8 md:flex md:space-x-8 mb-10">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[400px] bg-gray-900 p-4 rounded-lg object-cover mb-6 md:mb-0 shadow-md"
        />

        {/* Movie Info */}
        <div className="text-left ">
          <h1 className="text-2xl font-bold mb-4 tracking-[.1em] text-yellow-100">
            {movie.title}
          </h1>

          <div className="text-sm text-gray-400 mb-6">
            {movie.overview.substring(0, 200)}...
          </div>

          <div className="flex flex-col space-y-2">
              <span className="text-gray-400 text-sm">
             <span className="text-white">Release Date:</span>  {movie.release_date}
            </span>
            <span className="text-white font-bold  text-sm ">
              ⭐ {movie.vote_average}
            </span>
          
          </div>

          {movie.genres && (
            <div className="mt-6">
              <h4 className="text-gray-300 font-semibold mb-2">Genres:</h4>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-purple-700 bg-opacity-60 px-3 py-1 rounded-full text-xs font-medium text-white"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
