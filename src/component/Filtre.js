import React from 'react' ;
import { useState} from "react";
import Data from './Data';
import MovieList from './MovieList';

function Filtre() {
    const [searchTerm, setsearchTerm] = useState('')
    return (
        <>
            <div className="searchBar">
                <input placeholder="Searh...."
                onChange={ event => {setsearchTerm(event.target.value)}}
                />
                {Data.filter((val) =>{
                    if(searchTerm == "")
                    {
                        return <MovieList/>
                    }
                    else if(val.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
                    {
                        return <MovieList/>
                    }
                }).map((val,key) =>{
                    return(
                        <div  className="Movie" key={key}> 
                            <h1>{val.title}</h1>
                            <img src= {val.src} />
                            <p>{val.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
      )
} 
export default Filtre;