import CartElement from './CartElement';
import { useState, useEffect } from 'react';

const Cart = ({ cartData, setCartData }) => {
	const [reloadCart, setReloadCart] = useState(false);

	useEffect(() => {
		setReloadCart(false);
	}, [reloadCart]);

	return (
		<>
			<section className="cart-wrapper">
				<button
					onClick={() => {
						alert(`Le total de votre panier est de ${(cartData[0].totalPrice + 2.5).toFixed(2)}€`);
					}}
					disabled={cartData[0].items[0] ? false : true}
				>
					Valider mon Panier
				</button>
				{!cartData[0].items[0] ? (
					<div className="empty-cart-line">Votre panier est vide</div>
				) : (
					<div>
						<div className="cart-data">
							{cartData[0].items.map((element, index) => {
								return <CartElement key={index} element={element} setCartData={setCartData} cartData={cartData} setReloadCart={setReloadCart}></CartElement>;
							})}
						</div>
						<div className="cart-price">
							<div className="upper-cart-amount">
								<div className="before-total">
									<h3>Sous-total</h3>
									<h3>{cartData[0].totalPrice.toFixed(2)} €</h3>
								</div>
								<div className="before-total">
									<h3>Frais de livraison</h3>
									<h3>{cartData[0].deliveryFees} €</h3>
								</div>
							</div>
							<div className="total-amount">
								<h2>Total</h2>
								<h2>{(cartData[0].totalPrice + cartData[0].deliveryFees).toFixed(2)} €</h2>
							</div>
						</div>
					</div>
				)}
			</section>
		</>
	);
};

export default Cart;
