const CartElement = ({ element, cartData, setCartData, setReloadCart }) => {
	const { id, price, title, quantity } = element;

	console.log(cartData);
	const handleMinusButton = () => {
		const newCartData = [...cartData];
		const item = newCartData[0].items;

		for (let i = 0; i < item.length; i++) {
			if (item[i].id === id) {
				const unity = Number(item[i].unityPrice);
				item[i].price = Number(item[i].price) - unity;
				item[i].quantity -= 1;
				newCartData[0].totalPrice -= unity;
				if (item[i].quantity === 0) {
					item.splice(i, 1);
					setReloadCart(true);
					return setCartData(newCartData);
				}

				setReloadCart(true);
				return setCartData(newCartData);
			}
		}
	};

	const handlePlusButton = () => {
		const newCartData = [...cartData];
		const item = newCartData[0].items;

		for (let i = 0; i < item.length; i++) {
			if (item[i].id === id) {
				const unity = Number(item[i].unityPrice);
				item[i].price = unity + Number(item[i].price);
				item[i].quantity += 1;
				newCartData[0].totalPrice += unity;

				setReloadCart(true);
				return setCartData(newCartData);
			}
		}
	};

	return (
		<>
			<div className="item-cart-wrapper">
				<button onClick={handleMinusButton}>-</button>
				<div>{quantity}</div>
				<button
					onClick={() => {
						handlePlusButton(id);
					}}
				>
					+
				</button>
				<div className="cart-item-title">{title}</div>
				<div>{Number(price).toFixed(2)} €</div>
			</div>
		</>
	);
};

export default CartElement;

