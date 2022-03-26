import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent';
import CustomPagination from '../../components/CustomPagination';
import './Movies.css'
import Genres from '../../components/Genres';

const Movies = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);

    const fetchMovies = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`);
        console.log(data);

        setContent(data.results);
        setNumberOfPages(data.total_pages)
    };

    useEffect( () => {
        fetchMovies()
    }, [page]);


    return(
        <div>
            <span className='pageTitle'>Movies</span>
            <Genres 
                type='movie'
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className='movies'>
                {
                    content && content.map((c) => (
                        <SingleContent 
                            key={c.id} 
                            id={c.id} 
                            poster={c.poster_path} 
                            title={c.title || c.name} 
                            date={c.first_air_date || c.release_date}
                            media_type={c.movie}
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
            {numberOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numberOfPages} />
            )}
        </div>
    )
}

export default Movies;

// &with_genres=${genreForURL}

