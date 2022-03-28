import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({selectedGenres, setSelectedGenres, genres, setGenres, type, setPage}) => {
    
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter( selected => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);   
        console.log(genres)
        setGenres(data.genres)
    }

    useEffect( () => {
        // eslint-disable-next-line
        fetchGenres();
        return () => {
            setGenres({})
        }; 
        // eslint-disable-next-line
    }, []);

    
    return (
        <div style={{padding: '6px 0'}}>
            {selectedGenres && selectedGenres.map(genre => (
                <Chip 
                    label={genre.name}
                    key={genre.id}
                    style={{margin: 3, backgroundColor: '#1976D2', color: 'white'}}
                    clickable
                    size='small'
                    onDelete={() => handleRemove(genre)}
                />
            ))}

            {genres && genres.map(genre => (
                <Chip 
                    label={genre.name}
                    key={genre.id}
                    style={{margin: 3, backgroundColor: 'whitesmoke'}}
                    clickable
                    size='small'
                    onClick={() => handleAdd(genre)}
                />
            ))}
            
        </div>
    )
}

export default Genres;

