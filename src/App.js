import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=a7103f3c';


function App() {
    const [movies,setMovies] = useState([]);

    const [searchTerm,setSearchTerm] = useState('');

    // key: a7103f3c
    const SearchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
       
        setMovies(data.Search);
        //console.log(data.Search);
        
    }

    
    useEffect(()=>{
        //SearchMovies(searchTerm);
        SearchMovies('Batman');
    },[])

    return (
        <>
        <div className="app">
            <h1>Movie Finder App</h1>
            <div className="search">
                <input 
                type="text" 
                placeholder="Search for a movie here : " 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}></input>

                <button className="searchBtn" onClick={() => {SearchMovies(searchTerm)}}>Search</button>
            </div>

            {
                movies?.length>0
                ?(
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie}></MovieCard>
                            ))
                        }
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
        
        </>
        
    );
}

export default App;