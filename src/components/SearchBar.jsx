import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Paper, iconButton } from '@mui/material';
import { Search } from '@mui/icons-material'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Paper component='form' 
    onSubmit={()=> {}}
    sx={{
      borderRadius:20,
      boarder: '1px solid #e3e3e3',
      pl:2,
      boxShadow: 'none',
      mr:  {sm:5}
    }}
    >
        <input
        className='search-bar'
        placeholder='Search..'
        value=''
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton>
          <Search type='submit' sx={{p: '10px', color: 'red'}} />
        </IconButton>
    </Paper>
  )
}

export default SearchBar