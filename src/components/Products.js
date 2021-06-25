import React,{useContext} from 'react';
import { StateContext } from '../StateContext';
// Components
import Product from './Product';

const Products = props => {
	const {products,addItem} = useContext(StateContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
