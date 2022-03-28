import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent';
import CustomPagination from '../../components/CustomPagination';
import Genres from '../../components/Genres';
import useGenres from '../../hooks/useGenres';


const Series = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const fetchMovies = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`);
        console.log(data); // for testing purposes

        setContent(data.results); // results is a key property with an array value of data 
        setNumberOfPages(data.total_pages); // total_pages is a property of data 
    };

    useEffect( () => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page, genreforURL]); // Whenever page changes fetchMovies is triggered


    return(
        <div>
            <span className='pageTitle'>TV Series</span>
            <Genres 
                type='tv'
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
                            media_type='tv'
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

export default Series;
