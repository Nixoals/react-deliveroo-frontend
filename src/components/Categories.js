import Meals from './Meals';

const Categories = (props) => {
	const { name, meals } = props.categoryData;
	const cartData = props.cartData;
	const setCartData = props.setCartData;

	return (
		<>
			<section className="meals-container">
				<h2>{name}</h2>
				<div className="meal-container">
					{meals.map((meal) => {
						return <Meals key={meal.id} meal={meal} cartData={cartData} setCartData={setCartData}></Meals>;
					})}
				</div>
			</section>
		</>
	);
};

export default Categories;
