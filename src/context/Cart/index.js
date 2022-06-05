import { createContext, useReducer, useEffect, useState } from "react";
import cartReducer from './cartReducer'

export const CartContext = createContext();

export const CartContextProvider = (props) => {
	const [cart, dispatchCart] = useReducer(cartReducer, []);
	const [totals, setTotals] = useState()
	
	useEffect(() => {
		let productTotals = cart.map(product => [product.name, product.quantity * product.price])
		productTotals.push(["grandTotal", productTotals.reduce((productA, productB) => productA + productB[1],0)])
		setTotals(new Map(productTotals))
	},[cart])

	return (<CartContext.Provider value={{ cart, totals, dispatchCart }} {...props}/>)
};
