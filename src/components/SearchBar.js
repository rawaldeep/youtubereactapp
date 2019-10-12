import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {

        setSearchTerm(e.target.value);
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {

            onFormSubmit(searchTerm);
            setSearchTerm('');

        }
    }


    return (
        <Paper elevation={6} style={{ padding: '20px' }}>
            {/* <h1>Search bar component</h1> */}
            <TextField
                fullWidth
                label='Search video...'
                value={searchTerm}
                onKeyPress={onKeyPress}
                onChange={handleChange} />
        </Paper>
    )
}

export default SearchBar;
