import React, { useContext, useEffect, useState } from 'react';
import './Collection.css';
import Search from '../../components/search/Search';
import Title from '../../components/title/Title';
import Item from '../../item/Item';
import { Context } from '../../context/Context';

const Collection = () => {
  const{searchInput, setSearchInput, products} = useContext(Context)
  const[showFilter, setShowFilter] = useState(false);
  const[filterProducts, setFilterProducts] = useState([]);
  const[category, setCategory] = useState([]);
  const[subCategory, setSubCategory] = useState([]);
  const[sortType, setSortType] = useState('relavent');

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev,e.target.value]);
    }
  }

  // filtre une liste de produits en fonction des catégories sélectionnées
  const applyFilter = ()=>{
    // Copie de la liste des produits
    let productsCopy = products.slice();
    if(searchInput){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
    }
    if(category.length > 0){
      // conserve uniquement les produits dont la catégorie figure dans la liste des categories
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      // conserve uniquement les produits dont la catégorie figure dans la liste des categories
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  }

  const sortProduct = ()=>{
    let fpCopy = filterProducts.slice();
    switch (sortType){
      case 'lowtohigh':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'hightolow':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default: 
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category, subCategory,searchInput, setSearchInput, products]);

  useEffect(()=>{
    sortProduct();
}, [sortType]);

  return (
    <div className='collection'>
      <Search />
      <div className='container d-flex gap-5'>
        <div className={`filters ${showFilter && 'show'}`}>
          <p onClick={()=>setShowFilter(!showFilter)} className='title'>Filters <i className="fa-solid fa-angle-right ms-2"></i></p>
          <div className='box px-3 py-2 mb-3'>
            <p className='mb-3'>Categories</p>
            <p className='mb-2'><input type='checkbox' value={'Men'} className='me-2' onChange={toggleCategory}/>Men</p>
            <p className='mb-2'><input type='checkbox' value={'Women'} className='me-2' onChange={toggleCategory}/>Women</p>
            <p><input type='checkbox' value={'Kids'} className='me-2' onChange={toggleCategory}/>Kids</p>
          </div>
          <div className='box px-3 py-2 mb-3'>
            <p className='mb-3'>type</p>
            <p className='mb-2'><input type='checkbox' value={'Topwear'} className='me-2' onChange={toggleSubCategory}/>topwear</p>
            <p className='mb-2'><input type='checkbox' value={'Bottomwear'} className='me-2' onChange={toggleSubCategory}/>bottomwear</p>
            <p><input type='checkbox' value={'Winterwear'} className='me-2' onChange={toggleSubCategory}/>winterwear</p>
          </div>
        </div>
        <div className='collection-container'>
          <div className='header d-flex align-items-center justify-content-between'>
            <Title title1='All' title2='Collection'/>
            <select onChange={(e)=>setSortType(e.target.value)} className='p-2'>
              <option value='relavent'>Sort by: Relavent</option>
              <option value='lowtohigh'>Sort by: Low to High</option>
              <option value='hightolow'>Sort by: High to Low</option>
            </select>
          </div>
          <div className='mt-4 products'>
            {
              filterProducts.map((product)=>{
                return(
                  <Item id={product._id} key={product._id} image={product.image[0]} name={product.name} price={product.price}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    )
}

export default Collection
