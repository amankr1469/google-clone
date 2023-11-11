import React , { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import {useHistory} from 'react-router-dom';
import { actionTypes } from './reducer';
import {useStateValue } from './StateProvider';

function Search() {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] =useState('');
    const history = useHistory();

    const search = e =>{
        e.preventDefault();
        console.log(input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }

  return (
    <form className='search'>
        <div className='search_input'>
            <SearchIcon className='search_inputIcon'/>
            <input value={input} onChange={e =>
                setInput(e.target.value)}/>
            <MicIcon/>
        </div>

        <div className='search_buttons'>
            <button type='submit' onClick={search} variant="outlined">Google Search</button>
            <button variant="outlined">I'm Feeling Lucky</button>
        </div>
    </form>
  )
}

export default Search