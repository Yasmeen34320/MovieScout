"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
const Page = () => {
  const [data, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);
const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      );
      console.log(res.data);
      setMovies(res.data.results);
    }
    fetchData();
  }, []);
const { data: session, status } = useSession();
useEffect(() => {
    if (status === 'unauthenticated') {
      setTimeout(() => {
        router.push('/Login');
      }, 2000);
    }
  }, [status, router]);
  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return <p className="text-red-700">Access denied please Login First</p>;
  return (
    <div>
      {data.length>0 ? (<>
        <div className="text-yellow-100 ml-8  tracking-[.3em] font-semibold text-2xl  ">
        All Movies
      </div>

      </>)
      
      :(<>
      </>)}
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-x-10 gap-y-4 p-10 ">
          {data.map((movie, index) => (
            <div   onClick={() => router.push(`/movies/${movie.id}`)}
 key={index} className="w-[30%] cursor-pointer p-4 rounded-lg shadow-md border border-purple-950 mb-8 group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: '#0a0a0a' }}>
              {/* Movie Poster */}
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="text-white text-center mb-4">Poster not available</div>
              )}

              {/* Movie Details */}
              <div className="text-white">
                {/* Movie Title */}
                <h3 className="text-base h-10  tracking-[.2em] font-semibold mb-3">{movie.title}</h3>

                {/* Movie Overview */}
                <p className="text-sm mb-4 text-gray-400">
                  {movie.overview.length > 150 ? `${movie.overview.substring(0, 50)}...` : movie.overview.substring(0,50)}
                </p>

                {/* Movie Rating */}
                <div className="text-yellow-500 font-semibold">⭐ {movie.vote_average}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white text-center">Loading...</div>
      )}
    </div>
  );
};

export default Page;
