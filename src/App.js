import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {StateContext} from './StateContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
const initialState = {
	products:data,
	cart:[]
}
function App() {
	const [state,setState] = useState(initialState);
	const addItem = item => {
		// add the given item to the cart
		setState({
			...state,
			cart:[...state.cart,item]
		})
	};
	return (
		<div className="App">
			<StateContext.Provider value={{...state,addItem}}>
				<Navigation/>
				{/* Routes */}
				<Route exact path="/">
					<Products/>
				</Route>

				<Route path="/cart">
					<ShoppingCart/>
				</Route>
			</StateContext.Provider>
		</div>
	);
}

export default App;
