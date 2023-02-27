import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const Context = createContext();
export { Context };

const AppContext = ({ children }) => {
    const [cartItem, setCartItem] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [SubTotal, SetSubTotal] = useState(0)
    const loacation = useLocation()

    useEffect(() => { }, [cartItem])
    const handleAddToCart = (product, quantity) => {
        console.log('Hello Cart')
        let items = [...cartItem]
        let index = items.findIndex(p => p.id === product.id)
        if (index !== -1) {
            items[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity
            items = [...items, product];
        }
        setCartItem(items)
    }
    const handleRemoveCart = (product) => {

        let items = [...cartItem];
        items = items.filter(p => p.id !== product.id)


    }
    const handleCartProductQuantity = (type, product) => {
         let items = [...cartItem]
        let index = items.findIndex(p => p.id === product.id)

        if(type === "inc"){
            items[index].attributes.quantity+=1
        } else if( type === 'dec'){
            if(items[index].attributes.quantity===1) return;
            items[index].attributes.quantity-=1
        }
        setCartItem(items)
    }
    return (
        <Context.Provider
            value={{
                cartItem,
                setCartItem,
                cartCount,
                setCartCount,
                SubTotal,
                SetSubTotal,
                handleAddToCart,
                handleRemoveCart,
                handleCartProductQuantity
            }}
        >{children}</Context.Provider>
    )
}



export default AppContext;