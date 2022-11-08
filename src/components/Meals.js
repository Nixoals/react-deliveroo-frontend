const Meals = ({ meal, cartData, setCartData }) => {
	const { title, price, picture, popular, description, id } = meal;

	const addCart = () => {
		const newCartData = [...cartData];

		const data = newCartData[0].items;
		if (data[0]) {
			for (let i = 0; i < data.length; i++) {
				if (data[i].id === id) {
					const oldPrice = Number(data[i].price);
					data[i].price = Number(price) + oldPrice;
					data[i].quantity += 1;
					const oldTotalPrice = Number(newCartData[0].totalPrice);
					newCartData[0].totalPrice = oldTotalPrice + Number(price);

					return setCartData(newCartData);
				}
			}
		}
		const oldTotalPrice = Number(newCartData[0].totalPrice);
		const totalPrice = oldTotalPrice + Number(price);
		newCartData[0].items.push({ id, price, unityPrice: Number(price), title, quantity: 1 });
		newCartData[0].totalPrice = totalPrice;
		return setCartData(newCartData);
	};

	return (
		<>
			<div onClick={addCart} className="meal-card">
				<div className="meal-info">
					<h3>{title}</h3>
					{description && <p>{description}</p>}

					<div>
						<span>{price} €</span>
						{popular && <span>Star populair</span>}
					</div>
				</div>
				<div className="meal-picture">{picture && <img src={picture} alt={`${title}`}></img>}</div>
			</div>
		</>
	);
};

export default Meals;
