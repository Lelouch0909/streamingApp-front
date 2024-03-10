import { useState } from 'react';
import api from './api/axiosConfig'
import { Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/home/Home';
import './App.css'
import { useEffect } from 'react';
import Trailer from './Components/trailer/Trailer';


export function App() {


  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get("/api/v1/movies")
      if (JSON.stringify(response.data) !== JSON.stringify(movies)) {
        console.log(response.data);
        console.log(movies);
        setMovies(response.data);
      }

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />} />
          <Route path='/Trailer/:ytTrailerId' element={<Trailer></Trailer>
          }></Route>
        </Route>
      </Routes>
    </div>
  );
}

