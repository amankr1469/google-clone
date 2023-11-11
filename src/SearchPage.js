import React from 'react';
import './SearchPage.css';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import useGoogleSearch from './useGoogleSearch';
import Search from './components/Search';
import { DescriptionIcon,MoreVertIcon, SearchIcon, ImageIcon,LocalOfferIcon,RoomIcon}  from '@mui/icons-material';

function SearchPage() {

const [{ term }, dispatch] = useStateValue ();
//Live API Call

const { data } = useGoogleSearch(term);

console.log (data);

return(
    <div className='searchPage'>
      <div className='searchPage_header'>
      <Link to="/">
        <img
           className="searchPage_logo"
           src="https://www.google.com/images/branding/
           googlelogo/2x/googlelogo_color_272x92dp.png"
           alt=""
           /> 
      </Link>
       <div className='searchPage_headerBody'>
        <Search hideButtons />

        <div className='searchPage_optons'>
          <div className="searchPage_optionsLeft">
            <div className="searchPage_option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage_option">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage_option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage_option">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchPage_option">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="searchPage_option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>

          <div className='SearchPage_optionsRight'>
          <div className="searchPage_option">
              <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
              <Link to="/tools">Tools</Link>
            </div>
            </div>
        </div>
        </div>
      </div>
      <div className="searchPage_results">
        <p className="searchPage_resultCount">
          About {data?.searchInformation.formattedToalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
        </p>
       {data?.items.map(item => (
        <div className="searchPage_result">
          <a href={item.link}>{item.dispalyLink}</a>
          <a className='searchPage_resultTitle' href={item.link}>
            <h2>{item.title}</h2>
          </a>
          <p className='searchPage_resultSnippet'>
            {item}
          </p>
          </div>
       ))}
      </div>
    </div>
)
}
export default SearchPage
