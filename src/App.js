import axios from 'axios';
import './App.css';
import RestaurantTitle from './components/RestaurantTitle';
import Categories from './components/Categories';
import Cart from './components/Cart';

import { useState, useEffect } from 'react';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState();
	const [cartData, setCartData] = useState([{ items: [], totalPrice: 0, deliveryFees: 2.5 }]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('https://site--nixoals-backend-deliveroo--gsmxcbzt8tzm.code.run/');
			setData(response.data);
			setIsLoading(false);
		};

		fetchData();
	}, [isLoading]);

	return isLoading ? (
		<>
			<h1>Loading in progress</h1>
		</>
	) : (
		<>
			<header>
				<RestaurantTitle data={data.restaurant}></RestaurantTitle>
			</header>
			<section className="content-menu">
				<div>
					{data.categories.map((category, index) => {
						if (category.meals.length > 0) {
							return <Categories key={index} categoryData={category} setCartData={setCartData} cartData={cartData}></Categories>;
						} else {
							return null;
						}
					})}
				</div>

				<Cart cartData={cartData} setCartData={setCartData}></Cart>
			</section>
		</>
	);
}

export default App;
