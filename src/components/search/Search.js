import React, { useContext } from 'react';
import './Search.css';
import { Context } from '../../context/Context';

const Search = () => {
    const{showSearch, setShowSearch, searchInput, setSearchInput} = useContext(Context);
    return (
    <div className={`search mb-5 ${showSearch && 'show'}`}>
        <div className='container py-4 d-flex align-items-center justify-content-center'>
            <div className='search-container d-flex align-items-center gap-4'>
                <input type='search' placeholder='Search' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <i onClick={()=>setShowSearch(false)} class="fa-solid fa-xmark xmark"></i>
        </div>
    </div>
    )
}

export default Search
