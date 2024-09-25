import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Context = createContext(null);

const StoreContextProvider = (props)=>{
    const[showSearch, setShowSearch] = useState(false);
    const[searchInput, setSearchInput] = useState('');
    const [cart, setCart] = useState({});
    const[token, setToken] = useState('');
    const url = 'http://localhost:4000';
    const[products, setProducts] = useState([]);

    const addToCart = async(itemId, size) => {
        setCart((prev) => {
            let cartData = structuredClone(prev);
    
            // Si l'item n'existe pas encore dans le panier, on crée un nouvel objet pour cet item
            if (!cartData[itemId]) {
                cartData[itemId] = {};
            }
    
            // Si la taille existe déjà, on augmente la quantité
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } 
            // Sinon, on initialise la taille avec une quantité de 1
            else {
                cartData[itemId][size] = 1;
            }
    
            return cartData;
        });
        if(token){
            try {
                await axios.post(`${url}/api/cart/add`, {itemId, size}, {headers:{token}});
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    const updateQuantity = async (itemId, size, quantity) => {
        setCart((prev) => {
            let cartData = structuredClone(prev);
    
            // Vérifiez que l'itemId existe déjà dans cartData
            if (cartData[itemId]) {
                // Si la quantité est 0, supprimez la taille de l'item
                if (quantity === 0) {
                    delete cartData[itemId][size];
                    // Si l'item n'a plus de tailles, supprimez l'item entièrement
                    if (Object.keys(cartData[itemId]).length === 0) {
                        delete cartData[itemId];
                    }
                } else {
                    // Sinon, mettez à jour la quantité
                    cartData[itemId][size] = quantity;
                }
            }
    
            return cartData; // Retournez le nouvel objet cartData pour mettre à jour l'état
        });
    };
    
    const getCartCount = ()=>{
        let totalCount=0;
        for(const items in cart){
            for(const item in cart[items]){
                if(cart[items][item]>0){
                    totalCount += cart[items][item];
                }
            }
        }
        return totalCount;
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cart){
            let itemInfos = products.find(product => product._id === items);
            for(const item in cart[items]){
                if(cart[items][item]>0){
                    totalAmount += itemInfos.price * cart[items][item];
                }
            }
        }
        return totalAmount;
    }


    const getProductsData = async()=>{
        try {
            const response = await axios.get(`${url}/api/product/list`);
            if(response.data.success){
                setProducts(response.data.products);
            }
            else{
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
        getProductsData();
    },[])

    const contextValue = {
        showSearch,
        setShowSearch,
        searchInput,
        setSearchInput,
        cart,
        setCart,
        addToCart,
        getCartCount,
        updateQuantity,
        getTotalCartAmount,
        token,
        setToken,
        url,
        products
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default StoreContextProvider;