import { Button, TextField, Tab } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import axios from 'axios';
import SingleContent from '../../components/SingleContent';
import CustomPagination from '../../components/CustomPagination';

const Search = () => {

    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [content, setContent] = useState();
    const [numberOfPages, setNumberOfPages] = useState();

    const fetchSearch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
        setContent(data.results);
        setNumberOfPages(data.total_pages);
    };
    // query is for the search text

    useEffect( () => {
        window.scroll(0,0);
        fetchSearch();
        // eslint-disable-next-line 
    }, [type, page]); // Whenever page changes fetchSearch is triggered




    return(
        <div>
            <div style={{display: 'flex', margin: '15px auto'}}>
                <TextField 
                    style={{flex: 1}}
                    className='searchBox'
                    label='Search'
                    variant='filled'
                    onChange={e => setSearchText(e.target.value)}
                />
                <Button 
                    variant='contained' 
                    style={{marginLeft: 10}}
                    onClick={ fetchSearch }
                >
                    <SearchIcon />
                </Button>
            </div>

            <Tabs 
                value={type} 
                indicatorColor='primary' 
                textColor='white'
                onChange={(e, newValue) => {
                    setType(newValue);
                    setPage(1);
                }} 
                style={{paddingBottom: 5}} 
            >
                <Tab style={{width: '50%'}} label='Search Movies'/>
                <Tab style={{width: '50%'}} label='Search TV Series'/>
            </Tabs>

            <div className='trending'>
                {
                    content && content.map((c) => (
                        <SingleContent 
                            key={c.id} 
                            id={c.id} 
                            poster={c.poster_path} 
                            title={c.title || c.name} 
                            date={c.first_air_date || c.release_date}
                            media_type={type ? 'tv' : 'movie'}
                            vote_average={c.vote_average}
                        />
                    ))
                }
                {
                    searchText && !content && 
                        (type? <h2> No Series found</h2> : <h2>No Movies found</h2>)
                }
            </div>
            {numberOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numberOfPages} />
            )}
        </div>
    )
}

export default Search;
