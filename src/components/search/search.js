import React, { useState } from "react";
import { Link } from "wouter";
import { FaSearch } from "react-icons/fa";

import './Search.css';

export default function Search(){
  let [searchTextValue, updateText] = useState('');

  function HandleChange (e){
    updateText(e.target.value);
  };
  return(
      <div className="search-container large">
        <input type="text" placeholder="Buscar gif" value={searchTextValue} onChange={HandleChange} />
          <div className="search-link-container">
            <Link className="search-link" to={`gif/${searchTextValue}`}>
              <FaSearch />
            </Link> 
          </div>
          
      </div>
    )
}