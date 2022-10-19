import { response } from "express";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import requests from "../utils/requests";
import { Movie } from "../utils/typings";

interface Props {
  trendingNow: Movie[];
  netflixOriginals: Movie[];
  fetchTopRated: Movie[];
  fetchActionMovies: Movie[];
  fetchComedyMovies: Movie[];
  fetchHorrorMovies: Movie[];
  fetchRomanceMovies: Movie[];
  fetchDocumentaries: Movie[];
}
const Home = ({
  trendingNow,
  netflixOriginals,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-100/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner netflixOriginals={netflixOriginals} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    fetchTrendingNow,
    fetchNetflixOriginals,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((response) => response.json()),
    fetch(requests.fetchNetflixOriginals).then((response) => response.json()),
    fetch(requests.fetchTopRated).then((response) => response.json()),
    fetch(requests.fetchActionMovies).then((response) => response.json()),
    fetch(requests.fetchComedyMovies).then((response) => response.json()),
    fetch(requests.fetchHorrorMovies).then((response) => response.json()),
    fetch(requests.fetchRomanceMovies).then((response) => response.json()),
    fetch(requests.fetchDocumentaries).then((response) => response.json()),
  ]);
  return {
    props: {
      netflixOriginals: fetchNetflixOriginals.results,
      trendingNow: fetchTrendingNow.results,
      topRated: fetchTopRated.results,
      actionMovies: fetchActionMovies.results,
      comedyMovies: fetchComedyMovies.results,
      horrorMovies: fetchHorrorMovies.results,
      romanceMovies: fetchRomanceMovies.results,
      documentaries: fetchDocumentaries.results,
    },
  };
};
