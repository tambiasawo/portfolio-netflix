import Image from "next/image";
import React from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../utils/typings";
interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [randomMovie, setRandomMovie] = React.useState<Movie | null>(null);

  React.useEffect(() => {
    let randomNumber = Math.floor(Math.random() * netflixOriginals.length);
    setRandomMovie(netflixOriginals[randomNumber]);
  }, [netflixOriginals]);
  console.log(randomMovie);
  return (
    <div>
      <div className="relative top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          src={`${baseUrl}${
            randomMovie?.poster_path || randomMovie?.backdrop_path
          }`}
          layout="fill"
          alt={randomMovie?.name}
          objectFit="cover"
        />
        <div className="z-40 relative top-24 left-16 md:left-20 md:top-40">
          <h1 className="text-2xl md:text-4xl font-bold lg:text-6xl text-white ">
            {randomMovie?.name || randomMovie?.title}
          </h1>
          <p className="pt-5 max-w-xs md:max-w-lg lg:max-w-2xl text-lg md:text-xl lg:text-2xl">
            {randomMovie?.overview}
          </p>
          <div className="flex justify-start space-x-6">
            <button className="headerLink">Play</button>
            <button className="headerLink">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
