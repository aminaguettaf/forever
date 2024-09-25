import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlaceOrder from './pages/place-order/PlaceOrder';
import Collection from './pages/collection/Collection';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place-order' element={<PlaceOrder/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
