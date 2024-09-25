import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets';
import './Navbar.css';
import { Context } from '../../context/Context';
import {jwtDecode} from 'jwt-decode';
import {toast} from 'react-toastify';

const Navbar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const[showNavMenu, setShowNavMenu] = useState(false);
    const{setShowSearch, getCartCount, token, setToken} = useContext(Context);
    const[userName, setUserName] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    useEffect(()=>{
      const path = location.pathname;
      if(path === '/collection'){
        setActiveLink('collection');
      }
      else if(path === '/about'){
        setActiveLink('about');
      }
      else if(path === '/contact'){
        setActiveLink('contact');
      }
      else if(path === '/'){
        setActiveLink('home');
      }
      else{
        setActiveLink('');
      }
    },[location.pathname])

    useEffect(()=>{
      if(token){
        const decode = jwtDecode(token);
        setUserName(decode.name);
      }
    },[token])

    const logout = ()=>{
      localStorage.removeItem('token');
      setToken('');
      toast.success('You logged out');
      navigate('/login');
    }
    return (
    <div className='navbar'>
      <div className='container py-4 d-flex align-items-center justify-content-between'>
        <Link to='/' className='logo'><img src={assets.logo} alt=''/></Link>
        <ul className={`nav-menu d-flex align-items-center gap-4 ${showNavMenu && 'show'}`}>
          <div onClick={()=>setShowNavMenu(false)} className='back d-flex align-items-center gap-3'>
            <i className="fa-solid fa-angle-left"></i>
            <p>Back</p>
          </div>
          <li onClick={()=>setActiveLink('home')} className={`${activeLink === 'home' && 'active'}`}><Link to='/'>home</Link></li>
          <li onClick={()=>setActiveLink('collection')} className={`${activeLink === 'collection' && 'active'}`}><Link to='/collection'>collection</Link></li>
          <li onClick={()=>setActiveLink('about')} className={`${activeLink === 'about' && 'active'}`}><Link to='/about'>about</Link></li>
          <li onClick={()=>setActiveLink('contact')} className={`${activeLink === 'contact' && 'active'}`}><Link to='/contact'>contact</Link></li>
          <li><Link className='button'>Admin Panel</Link></li>
        </ul>
        <div className='nav-right d-flex align-items-center gap-4'>
          <Link to='collection'><i onClick={()=>setShowSearch(true)} className="fa-solid fa-magnifying-glass fa-fw"></i></Link>
          {token ? 
          <div className='login-dropdown position-relative' >
            <i className="fa-regular fa-user fa-fw"></i>
            <ul>
              <li>Welcome <span>{userName}</span></li>
              <li className='logout' onClick={logout}>Logout</li>
            </ul>
          </div>
          :
          <Link className='position-relative' to='/login'>
            <i className="fa-regular fa-user fa-fw"></i>
          </Link>}
          <Link to='/cart' className='position-relative'>
            <i className="fa-solid fa-bag-shopping fa-fw"></i>
            <div className='notif position-absolute d-flex align-items-center justify-content-center'>{getCartCount()}</div>
          </Link>
          <i onClick={()=>setShowNavMenu(true)} className="fa-solid fa-bars-staggered fa-fw menu"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
