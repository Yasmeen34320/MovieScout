import React from 'react'

export default async function page() {
   const getData=async()=>{
        const res=await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7" )
        return res.json()
    }

    let data=await getData()
    data=data.results
       if (!Array.isArray(data)) {
        console.error("Data is not an array:", data);
        return <div>Error: Data is not in the expected format.</div>
    }

  return (
//  <div className="flex gap-4 flex-wrap justify-center p-6">
//       {data.map((user) => (
//         <div key={user.id} className="w-64 p-4 bg-gray-800 text-white rounded-lg shadow-md">
//           <div className="flex items-center mb-4">
//             <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
//             <h2 className="text-xl font-semibold">{user.name}</h2>
//           </div>
//           <p className="text-gray-400 text-sm">{user.address}</p>
//         </div>
//       ))}
//     </div> 
     <div>
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {data.map((movie, index) => (
            <div key={index} className="w-[30%] mx-auto p-4 rounded-lg shadow-md border border-purple-950 mb-8" style={{ backgroundColor: '#0a0a0a' }}>
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
                <h3 className="text-xl tracking-[.2em] font-semibold mb-2">{movie.title}</h3>

                {/* Movie Overview */}
                <p className="text-sm mb-4 text-gray-400">
                  {movie.overview.length > 150 ? `${movie.overview.substring(0, 150)}...` : movie.overview}
                </p>

                {/* Movie Rating */}
                <div className="text-yellow-500 font-semibold">Rating: {movie.vote_average}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white text-center">Loading...</div>
      )}
    </div>
  )
}
